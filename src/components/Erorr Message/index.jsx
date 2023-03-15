import styled from "styled-components";
import {Flex, Text, SVG} from "../../global/style";

const ErrorDiv = styled.div`
    
`;

const index = (props) => {
    return (
        <Flex width='88%' justify='flex-start' align='center'>

            <SVG 
                width='2%' 
                fill="rgb(155, 33, 27)" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                viewBox="0 0 14 14" 
                role="img">
                <path fill-rule="evenodd" d="M8 7.927V9H6V2h2v5.927zM7 12a1 1 0 110-2 1 1 0 010 2zM7 0C3.15 0 0 3.15 0 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7z"></path>
            </SVG>

            <Text
                color='rgb(155, 33, 27)'
                size='14px'
                weight='500'
                height='20px'
                padding='15px 8px'
            >
                {props.message}
            </Text>
        </Flex>
    )
}

export default index