import React, { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
    position: relative;
`;

const DropdownButton = styled.button`
    width: 200px;
    background: none;
    cursor: pointer;
    font-size: 14px;
    color: rgb(0, 30, 0);
    padding: 10px 20px;
    border: 1.5px solid #d5e0d5;
    border-radius: 16px;
    text-align: left;
`;

const DropdownMenu = styled.ul`
    border: .5px solid #000000;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    list-style-type: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    z-index: 1;

    li {
        cursor: pointer;
        padding: 10px 20px;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`;

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Newest", "Relevance", "Client spend", "Client rating"];
    const [SelectedOption, setSelected] = useState();

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        console.log(`Selected option: ${option}`);
        setIsOpen(false);
    };

    return (
        <DropdownWrapper>
        <DropdownButton onClick={handleDropdownToggle}>
            {SelectedOption ? SelectedOption : 'Newest'}
        </DropdownButton>
        {isOpen && (
            <DropdownMenu>
            {options.map((option) => (
                <li key={option} onClick={() => {
                    
                    handleOptionSelect(option)
                    setSelected(option)
                    }}>
                {option}
                </li>
            ))}
            </DropdownMenu>
        )}
        </DropdownWrapper>
    );
};

export default Dropdown;
