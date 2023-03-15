import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lato;
    }
`;

const Layout = styled.div` 
    width: ${props => props.width};
    height: auto;
    margin: 3% auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const HR = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    background: #d5e0d5 ;
    margin: ${props => props.margin};
`;

const Flex = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => props.height};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    margin: ${props => props.margin} auto;
    border: ${props => props.border};
    border-radius: ${props => props.radius};
`;

const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height ? props.height : '40px'};
    padding: 2px 15px 0;
    background: #fff;
    border-radius:${props => props.radius ? props.radius : '8px'};
    border: 2px solid #e4ebe4;
    outline: none;
    transition: ease-in .1s;
    margin: ${props => props.margin ? props.margin : '1% auto'};

    &:focus {
        border: 2px solid green;
    }

    &:hover {
        border: 2px solid #bababa;
    }
`;

const Button = styled.button`
    width: ${props => props.width};
    border:${props => props.border ? props.border : 'none'};
    background: ${props => props.background};
    margin: ${props => props.margin ? props.margin : '2% auto'};
    color: ${props => props.color};
    height: 40px;
    border-radius: 10rem;
    outline: none;
    font-size: 15px;
    line-height: 39px;
    text-align: center;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

const Or = styled.h1`
    margin: 2% auto;
    color:  rgb(96, 96, 96);
    text-align: center;
    font-size: 14px;
    position: relative;

    &:before {
        display: inline-block;
        content: "";
        border-top: 1px solid #e4ebe4;
        width: 150px;
        margin: -4% 5px;
        transform: translateY(-1rem);
    }

    &:after {
        display: inline-block;
        content: "";
        border-top: 1px solid #e4ebe4;
        width: 150px;
        margin: -4% 5px;
        transform: translateY(-1rem);
    }
`;

const Text = styled.p`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: ${props => props.height};
    padding: ${props => props.padding};
    color: ${props => props.color};
    text-align: ${props => props.align};
    text-decoration: ${props => props.decoration};
`;

const SVG = styled.svg`
    width: ${props => props.width};
    fill: ${props => props.fill};
`;

export { GlobalStyle, Layout, HR, Flex, Input, Button, Or, Text, SVG};