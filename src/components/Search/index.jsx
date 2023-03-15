import styled from "styled-components"

const SearchDiv = styled.div`
    width: 95%;
    height: 40px;
    border: 2px solid #e4ede4;
    border-radius: 8px;
    margin: 3% auto;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 95%;
    height: 100%;
    padding: 15px;
    color: rgb(0, 30, 0);  
    outline: none;
    border: none;
    border-radius: 8px;
`;

const Button = styled.button`
    width: 5%;  
    height: 100%;
    background: #108a00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 5px 5px 0px;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;

const SVG = styled.svg`
    width: 35%;
    display: flex;
    fill: #fff; 
`;

const index = () => {
    return (
        <SearchDiv>
            <Input type="text" placeholder="Search for jop" />
            <Button>
                <SVG xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M13.655 12.004l-3.25-3.255a5.64 5.64 0 00.92-3.087c0-1.509-.589-2.93-1.66-4.001A5.626 5.626 0 005.661.002 5.666 5.666 0 000 5.661a5.67 5.67 0 005.661 5.663 5.655 5.655 0 003.093-.92l3.252 3.252c.218.221.512.344.825.344.314 0 .606-.123.824-.345.222-.219.345-.511.345-.823 0-.312-.123-.606-.345-.828zM5.661 9.549a3.89 3.89 0 01-3.885-3.888 3.89 3.89 0 013.885-3.887 3.892 3.892 0 013.888 3.887 3.892 3.892 0 01-3.888 3.888z"></path></SVG>
            </Button>
        </SearchDiv>
    )
}

export default index