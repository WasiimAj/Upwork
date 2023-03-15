import styled from "styled-components"

const Skill = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: rgb(0, 30, 0);
    background: #e4ebe4;
    padding: 3px 10px;
    border-radius: 12px;
    margin: 1% .3%;
`;

const index = (props) => {
    return (
        <Skill>
            {props.skill}
        </Skill>
    )
}

export default index