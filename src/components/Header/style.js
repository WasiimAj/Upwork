import styled from "styled-components";

const HeaderDiv = styled.header`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const LeftDiv = styled.div`
    width: 46%;
    height: 100%; 
    display: flex;
    align-items:center;
    justify-content: flex-start;
`;

const RightDiv = styled.div`
    width: 48%;
    height: 100%; 
    display: flex;
    align-items:center;
    justify-content: flex-end;
`;

const Logo = styled.img`
    width: 11%;
    &:hover {
        cursor: pointer;
    }
`;

const AccordianDiv = styled.div`
    display: flex;
    align-items:center;
    width: 80%;
    margin-left: 5%;
    height: 100%;
`;

const SearchDiv = styled.div`
    width: 380px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #e4ebe4;
    display: flex;
    align-items: center;
    transition: ease-in .1s;
    &:hover {
        background: #e6e6e6;
    }
`;

const SearchSVG = styled.svg`
    width: 5%;
    margin: 2%;
    &:hover {
        cursor: pointer;
    }
`;

const SearchInput = styled.input`
    height: 100%;
    width: 70%;
    border: none;
    outline: none;
    background: none;
    border-radius: 0 20px 20px 0;
    font-size: 16px;
    padding: 5px;
    color: #222;
    transition: ease-in .1s;
    &:hover {
        background: #f2f2f2;
    }
`;

const IconsDiv = styled.div`
    width: 28%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const SVG = styled.svg`
    width: 12%;
    &:hover {
        cursor: pointer;
    }
`;

const UserImg = styled.div`
    background: url('https://www.upwork.com/profile-portraits/c1isb-q9tIq2pjq_UH0krfPEh8r7FfNPyo2Sh-2dw0rhfNz_yAninExta3OWGosR7x');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    &:hover {
        cursor: pointer;
    }
`;

export { HeaderDiv, LeftDiv, RightDiv, Logo, AccordianDiv, SearchDiv, SearchSVG, SearchInput, IconsDiv, SVG, UserImg};