import styled from "styled-components";
import { Flex, Text, HR, Button } from "../global/style";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Skill from "../components/Skill";


const JobDiv = styled.div`
    width: ${props => props.width};
    height: 650px;
    border: 1px solid #d5e0d5;
    border-radius: ${props => props.radius};
    border-radius: ${props => props.radius};
`;

const SVG = styled.svg`
    width: ${props => props.width};
    fill: ${props => props.fill};
`;

const JobDetails = () => {


    return (
        <>
            <Header />
                <Flex width='65%' height='800px' justify='center' align='center' direction='column' >

                    {/* ELEMENT (1) */}
                    <Flex width='100%' margin='2%'>
                        <Text size='26px' weight='bold' height='32px' color='rgb(0, 30, 0)' padding='5px 30px'> Job details </Text>
                    </Flex>

                    {/* ELEMENT 2 */}
                    <Flex margin='1%'>
                        <Flex width='70%' direction='column' >
                            <JobDiv width='100%' radius='16px 0 0 16px'>
                                <Flex direction='column'>
                                    <Text size='22px' weight='bold' height='32px' color='rgb(0, 30, 0)' padding='30px'> Make A HTML CSS Website </Text>

                                    <Text size='14px' weight='500' height='20px' color='rgb(20, 168, 0)' padding='30px 30px 5px' decoration='underline'> Front-End Development </Text>
                                    <Text size='14px' weight='400' height='20px' color='rgb(94, 109, 85)' padding='0px 30px'> Posted 2 hours ago </Text>
                                </Flex>

                                <HR width='100%' height='.5px' margin='2% 0' />

                                <Text color="rgb(0, 30, 0)" size="14px" weight='400' height='20px' padding=' 5px 30px'>
                                    I need general help and support revising my web domain related code, working with existing code. Difficulty level for this task is not very great. Inquire for more details.
                                </Text>

                                <HR width='100%' height='.5px' margin='2% 0' />

                                <Text color="rgb(0, 30, 0)" size="14px" weight='400' height='20px' padding=' 5px 30px'>
                                    <strong>Project Type: </strong>  One-time project
                                </Text>

                                <HR width='100%' height='.5px' margin='2% 0' />

                                <Text size='16px' weight='bold' height='22px' color='rgb(0, 30, 0)' padding='5px 30px'> Skills and Expertis </Text>

                                <Flex width='95%' justify='flex-start' align='flex-start'> 
                                    <Skill skill='HTML' />
                                    <Skill skill='CSS' />
                                    <Skill skill='JavaScript' />
                                    <Skill skill='Web Development' />
                                    <Skill skill='Landing Page' />
                                </Flex>

                                <HR width='100%' height='.5px' margin='2% 0' />

                                <Flex width='100%' justify='flex-start' align='flex-start' direction='column'>
                                    <Text 
                                        size='16px' 
                                        weight='bold' 
                                        height='22px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px 30px'>
                                        Activity on this job
                                    </Text>
                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Proposals: less than 5
                                    </Text>
                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Interviewing: 0
                                    </Text>
                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Invites sent: 0
                                    </Text>
                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Unanswered invites: 0
                                    </Text>
                                </Flex>

                                <Flex margin='.5%' width='100%' justify='flex-start' align='center'>
                                    <Text size='18px' weight='bold' height='24px' color='rgb(0, 30, 0)' padding='5px 5px 5px 30px'>
                                        Upgrade your membership to see the bid range   
                                    </Text>
                                    <SVG fill='#108a00' width='2.5%' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M7 0a7 7 0 100 14A7 7 0 007 0zm3.017 4.981c0 1.57-1.128 2.278-2.52 2.52l-.131 1.03h-.96l-.251-2.015.059-.06c1.608-.06 2.327-.588 2.327-1.44v-.023c0-.72-.551-1.236-1.462-1.236-.804 0-1.464.36-2.064 1.008l-.9-.948c.72-.827 1.644-1.39 3-1.39 1.738 0 2.902.983 2.902 2.53v.024zm-3.958 6.284V9.598h1.606v1.667H6.059z"></path></SVG>
                                </Flex>


                            </JobDiv>
                        </Flex>

                        <Flex width='30%' >
                            <JobDiv width='100%' radius='0 16px 16px 0'>
                                    <Button
                                        margin='8% auto'
                                        width='80%' 
                                        background='rgb(20, 168, 0)' 
                                        color='#fff'> 
                                        Apply Now 
                                    </Button>

                                    <Button 
                                        margin='4% auto'
                                        width='80%' 
                                        background='none' 
                                        border='2px solid rgb(20, 168, 0)' 
                                        color='rgb(20, 168, 0)'> 
                                        <SVG width='5%' fill="rgb(20, 168, 0)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"></path></SVG>
                                        <Text padding='5px'>Save Job</Text> 
                                    </Button>

                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Required Connects to submit a proposal: <strong>4</strong>
                                    </Text>

                                    <Text 
                                        size='14px' 
                                        weight='400' 
                                        height='20px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Available Connects: <strong>162</strong>
                                    </Text>

                                    <HR width='100%' height='.5px' margin='2% 0' />
                                    
                                    <Text 
                                        size='16px' 
                                        weight='500' 
                                        height='22px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        About the client
                                    </Text>

                                    <Flex width='80%' justify='flex-start' align='center'>
                                        <SVG fill='#108a00' width='6%' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path></SVG>
                                        <Text 
                                            size='16px' 
                                            weight='500' 
                                            height='22px' 
                                            color='rgb(0, 30, 0)' 
                                            padding='15px 5px'
                                        >
                                            Payment method verified
                                        </Text>
                                    </Flex>

                                    <Flex width='80%' justify='flex-start' align='center'>
                                        <SVG fill='#108a00' width='8%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></SVG>
                                        <SVG fill='#108a00' width='8%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></SVG>
                                        <SVG fill='#108a00' width='8%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></SVG>
                                        <SVG fill='#108a00' width='8%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></SVG>
                                        <SVG fill='#108a00' width='8%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></SVG>
                                        
                                        <Text 
                                            size='14px' 
                                            weight='400' 
                                            height='20px' 
                                            color='rgb(0, 30, 0)' 
                                            padding='15px 5px'
                                        >
                                            5.00 of 68 reviews
                                        </Text>
                                    </Flex>

                                    <Flex width='100%' margin='3% 0' direction='column'>

                                    <Text 
                                        size='16px' 
                                        weight='600' 
                                        height='22px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        Canada
                                    </Text>

                                    <Text 
                                            size='14px' 
                                            weight='400' 
                                            height='20px' 
                                            color='rgb(94, 109, 85)' 
                                            padding='0px 30px'
                                        >
                                            Toronto 7:09 am
                                    </Text>

                                    </Flex>

                                    <Flex width='100%' margin='3% 0' direction='column'>

                                    <Text 
                                        size='16px' 
                                        weight='600' 
                                        height='22px' 
                                        color='rgb(0, 30, 0)' 
                                        padding='5px 30px'>
                                        66 jobs posted
                                    </Text>

                                    <Text 
                                            size='14px' 
                                            weight='400' 
                                            height='20px' 
                                            color='rgb(94, 109, 85)' 
                                            padding='0px 30px'
                                        >
                                            97% hire rate, 1 open job
                                    </Text>
                                    </Flex>


                                    <Flex width='100%' margin='3% 0' direction='column'>
                                        <Text 
                                            size='16px' 
                                            weight='600' 
                                            height='22px' 
                                            color='rgb(0, 30, 0)' 
                                            padding='5px 30px'>
                                                $1.7K total spent
                                        </Text>

                                        <Text 
                                                size='14px' 
                                                weight='400' 
                                                height='20px' 
                                                color='rgb(94, 109, 85)' 
                                                padding='0px 30px'
                                            >
                                                74 hires, 5 active
                                        </Text>
                                    </Flex>

                                    <Text 
                                                size='12px' 
                                                weight='400' 
                                                height='17px' 
                                                color='rgb(94, 109, 85)' 
                                                padding='15px 30px'
                                            >
                                                Member since Jun 14, 2020
                                    </Text>

                                    <HR width='100%' height='.5px' margin='2% 0' />


                            </JobDiv>
                        </Flex>
                    </Flex>
                </Flex>
            <Footer/>
        </>
    )
}




export default JobDetails;