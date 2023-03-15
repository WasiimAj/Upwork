import styled from "styled-components";
import { Flex, Text, Button, SVG, HR } from "../global/style";
import Header from '../components/Header';
import Footer from "../components/Footer";
import Skill from "../components/Skill";

const Img = styled.img`
    border-radius: 50%;
`;

const Profile = () => {
    return (
        <>
            <Header />
                <Flex direction='column' justify="flex-start" align='flex-start' margin='5%' width='65%' height='auto' border='1px solid #d5e0d5' radius='16px'>
                    
                    {/* Basic User Details .. */}
                    <Flex margin='5%' width='90%' height='100px'>
                        <Flex>
                            <Img src="https://www.upwork.com/profile-portraits/c1isb-q9tIq2pjq_UH0krfPEh8r7FfNPyo2Sh-2dw0rhfviXspxhntdVe2m0arUCYM" />
                        </Flex>
                        <Flex direction='column'>
                            <Text size='26px' weight='bold' padding='15px'>Wasiim A.</Text>
                            <Text size='14px' weight='500' padding='0 15px' color=" rgb(0, 30, 0)"> 
                            <SVG width='2.5%' fill=" rgb(0, 30, 0)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"></path></SVG>
                            Gaza, Palestinian Territories – 2:59 am local time</Text>
                        </Flex>
                        <Flex width="60%">
                            <Button width='45%' border='2px solid rgb(16, 138, 0)' background='none' color="rgb(16, 138, 0)">See Public View</Button>
                            <Button width='45%' background='rgb(16, 138, 0)' color="#fff">Profile Setting</Button>
                        </Flex>
                    </Flex>

                    {/* User Job Details .. */}
                    <Flex justify="flex-start" align='flex-start' width='100%' >
                        
                        <Flex width='30%' justify="flex-start" align='flex-start' direction='column' height='550px' style={{borderRight:'1px solid #d5e0d5'}}>

                            <Flex width='100%' justify="flex-start" align='flex-start' >
                                <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                    Video introduction
                                </Text>
                                
                                <Button 
                                    margin='0'
                                    background='none' 
                                    border='2px solid #e4ebe4' 
                                    width='40px' 
                                    height='40px'>
                                    <SVG 
                                        fill="rgb(16, 138, 0)" 
                                        width='40%' 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        aria-hidden="true" 
                                        viewBox="0 0 14 14" 
                                        role="img">
                                        <polygon fill-rule="evenodd" points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"></polygon>
                                    </SVG>
                                </Button>
                            </Flex>

                            <Flex width='100%' justify="flex-start" align='flex-start' direction='column'>
                                <Flex width='100%'>
                                    <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        Hours per week
                                    </Text>
                                    
                                    
                                </Flex>

                                <Text size='14px' weight='400' color="rgb(0, 30, 0)" padding='5px 30px'>
                                    More than 30 hrs/week
                                </Text>

                                <Text size='14px' weight='400' color="rgb(94, 109, 85)" padding='5px 30px'>
                                    Hours per week
                                </Text>
                            </Flex>

                            <Flex width='100%' justify="flex-start" align='flex-start' direction='column'>
                                <Flex width='100%'>
                                    <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        Languages
                                    </Text>
                                    <Button 
                                        margin='0 5px'
                                        background='none' 
                                        border='2px solid #e4ebe4' 
                                        width='40px' 
                                        height='40px'>
                                        <SVG 
                                            fill="rgb(16, 138, 0)" 
                                            width='40%' 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            aria-hidden="true" 
                                            viewBox="0 0 14 14" 
                                            role="img">
                                            <polygon fill-rule="evenodd" points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"></polygon>
                                        </SVG>
                                    </Button>

                                    <Button 
                                        margin='0 5px'
                                        background='none' 
                                        border='2px solid #e4ebe4' 
                                        width='40px' 
                                        height='40px'>
                                        <SVG 
                                            fill="rgb(16, 138, 0)"  
                                            width='40%' 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            aria-hidden="true" 
                                            viewBox="0 0 14 14" 
                                            role="img">
                                                <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                        </SVG>
                                    </Button>
                                    
                                </Flex>

                                <Text size='14px' weight='400' color="rgb(0, 30, 0)" padding='5px 30px'>
                                    <strong>English:</strong> Basic
                                </Text>
                                <Text size='14px' weight='400' color="rgb(0, 30, 0)" padding='5px 30px'>
                                    <strong>Arabic:</strong> Native or Bilingual
                                </Text>

                            </Flex>

                            <Flex width='100%' justify="flex-start" align='flex-start' direction='column'>
                                <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                    Verifications
                                </Text>
                            <Flex width='100%' justify="flex-start" align='flex-start' >
                                    <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        Military Veteran
                                    </Text>
                                    
                                    <Button 
                                        margin='0'
                                        background='none' 
                                        border='2px solid #e4ebe4' 
                                        width='40px' 
                                        height='40px'>
                                        <SVG 
                                            fill="rgb(16, 138, 0)" 
                                            width='40%' 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            aria-hidden="true" 
                                            viewBox="0 0 14 14" 
                                            role="img">
                                            <polygon fill-rule="evenodd" points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"></polygon>
                                        </SVG>
                                    </Button>
                            </Flex>
                            <Flex width='100%' justify="flex-start" align='flex-start' >
                                    <Text size='14px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        Education
                                    </Text>
                                    
                                    <Button 
                                        margin='0'
                                        background='none' 
                                        border='2px solid #e4ebe4' 
                                        width='40px' 
                                        height='40px'>
                                        <SVG 
                                            fill="rgb(16, 138, 0)" 
                                            width='40%' 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            aria-hidden="true" 
                                            viewBox="0 0 14 14" 
                                            role="img">
                                            <polygon fill-rule="evenodd" points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"></polygon>
                                        </SVG>
                                    </Button>
                            </Flex>
                                <Button width='80%' background='none' border='2px solid #5e6d55' color="#5e6d55">GitHub</Button>
                                <Button width='80%' background='none' border='2px solid #5e6d55' color="#5e6d55">StackOverflow</Button>
                            </Flex>
                            
                        </Flex>
                        




                        <Flex justify="flex-start" align='flex-start' width='70%' direction='column' height='auto' >
                            
                            <Flex width="100%" justify="space-between" align='center'>
                                <Flex width='70%' justify="flex-start" align='center' >
                                    <Text size='22px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        Front-End Developer React Js
                                    </Text>
                                    
                                    <Button 
                                            margin='0'
                                            background='none' 
                                            border='2px solid #e4ebe4' 
                                            width='40px' 
                                            height='40px'>
                                            <SVG 
                                                fill="rgb(16, 138, 0)"  
                                                width='40%' 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                aria-hidden="true" 
                                                viewBox="0 0 14 14" 
                                                role="img">
                                                    <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                            </SVG>
                                        </Button>
                                </Flex>

                                <Flex width='30%' justify="flex-start" align='center' >
                                    <Text size='22px' weight='bold' color="rgb(0, 30, 0)" padding='15px 15px 15px 30px'>
                                        $10.00/hr 
                                    </Text>
                                    
                                    <Button 
                                            margin='0'
                                            background='none' 
                                            border='2px solid #e4ebe4' 
                                            width='40px' 
                                            height='40px'>
                                            <SVG 
                                                fill="rgb(16, 138, 0)"  
                                                width='40%' 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                aria-hidden="true" 
                                                viewBox="0 0 14 14" 
                                                role="img">
                                                    <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                            </SVG>
                                        </Button>
                                </Flex>
                            </Flex>

                            <Flex width='100%' justify="flex-start" align='flex-start' direction='column'>

                                <Flex justify="space-between" align='center' width='100%'>
                                    <Text padding='15px 15px 15px 30px' size='14px' weight='400' height='20px' color="rgb(0, 30, 0)" >Experience: -</Text>
                                    <Button 
                                            margin='0 3% 0 0'
                                            background='none' 
                                            border='2px solid #e4ebe4' 
                                            width='40px' 
                                            height='40px'>
                                            <SVG 
                                                fill="rgb(16, 138, 0)"  
                                                width='40%' 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                aria-hidden="true" 
                                                viewBox="0 0 14 14" 
                                                role="img">
                                                    <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                            </SVG>
                                        </Button>
                                </Flex>

                                <Flex margin='0 0' width='80%' justify="flex-start" align='flex-start'>
                                    <Text padding='15px 15px 15px 30px' size='14px' weight='400' height='20px' color="rgb(0, 30, 0)" >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                </Flex>
                            </Flex>

                            <HR width='100%' height='.5px' />

                            <Flex direction='column'>
                                <Text padding='15px 15px 5px 30px' size='14px' weight='bold' height='20px' color="rgb(0, 30, 0)">Work History</Text>
                                <Flex margin='0 0' justify="flex-start" align='flex-start' width='90%'>
                                    <Text padding='5px 15px 15px 30px' size='14px' weight='400' height='20px' color="rgb(0, 30, 0)">No work yet. Once you start getting hired on Upwork, your work with clients will show up here. Start your search</Text>
                                </Flex>
                            </Flex>

                            <HR width='100%' height='.5px' />

                            <Flex margin='1% auto' justify="flex-start" align='center' width='100%'>
                                    <Text padding='15px 15px 15px 30px' size='18px' weight='bold' height='20px' color="rgb(0, 30, 0)" >Skills</Text>
                                    <Button 
                                            margin='0 3% 0 0'
                                            background='none' 
                                            border='2px solid #e4ebe4' 
                                            width='40px' 
                                            height='40px'>
                                            <SVG 
                                                fill="rgb(16, 138, 0)"  
                                                width='40%' 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                aria-hidden="true" 
                                                viewBox="0 0 14 14" 
                                                role="img">
                                                    <path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path>
                                            </SVG>
                                        </Button>
                                </Flex>


                                <Flex margin='1% auto' justify="flex-start" align='center' width='92%'>
                                    <Skill skill='HTML5' />
                                    <Skill skill='CSS3' />
                                    <Skill skill='JavaScript' />
                                    <Skill skill='ReactJs' />
                                    <Skill skill='Bootstrap' />
                                    <Skill skill='MUI' />
                                    <Skill skill='Ant' />
                                </Flex>
                                
                                <HR width='100%' height='.5px' />

                                <Flex margin='1%' justify="space-between" align='center' width='100%'>
                                    <Text padding='15px 15px 15px 30px' size='18px' weight='bold' height='20px' color="rgb(0, 30, 0)" >Your Project Catalog </Text>
                                    <Button margin='0 5%' background='none' color="rgb(16, 138, 0)" border='2px solid rgb(16, 138, 0)' width='30%'>Mange Projects</Button>
                                </Flex>


                                <Flex margin='1% auto' justify="flex-start" align='center' width='92%'>
                                    <Text padding='0 15px 15px 0' size='14px' weight='400' height='20px' color="rgb(0, 30, 0)" >
                                        Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
                                    </Text>
                                </Flex>

                        </Flex>
                    </Flex>
                </Flex>
            <Footer />
        </>
    )
}

export default Profile;