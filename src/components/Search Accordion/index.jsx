import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, SVG } from '../../global/style';

const AccordionContainer = styled.div`
    border-bottom: 1px solid #d5e0d5;
    width: 90%;
    margin: 3% 0 0 0;
`;

const AccordionHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    border-bottom: .5px solid #dde3ed;
    transition: background-color 0.2s ease-out;
`;

const AccordionTitle = styled.p`
    width: 150%;
    font-size: 14px;
    color: rgb(0, 30, 0);
    font-weight: 500;
`;

const AccordionContent = styled.div`
    padding: 12px 16px;
`;

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer>
        <AccordionHeader onClick={toggleAccordion}>
            <Flex width='100%' align='center' justify='space-between'>
                <AccordionTitle>{title}</AccordionTitle>

                    <Flex width='100%' align='flex-end' justify='flex-end'>{ 
                        isOpen 
                        ? 
                            <SVG fill='green' width='15%' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><polygon fill-rule="evenodd" points="7 3 0 10.433 1.476 12 7 6.134 12.524 12 14 10.433"></polygon></SVG>
                        : 
                            <SVG fill='green' width='15%' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><polygon fill-rule="evenodd" points="7 12 14 4.567 12.524 3 7 8.866 1.476 3 0 4.567"></polygon></SVG>
                    }</Flex>

            </Flex>
        </AccordionHeader>
        {isOpen && <AccordionContent>{children}</AccordionContent>}
        </AccordionContainer>
    );
};

export default Accordion;
