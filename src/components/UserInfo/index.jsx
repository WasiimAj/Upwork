import styled from "styled-components";

const UserInfo = styled.div`
    width: 25%;
    height: auto;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`;

const UserDiv = styled.div`
    width: 100%;
    height: auto;
    border-radius: 16px;
    border: 1px solid #d5e0d5;
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Img = styled.div`
    background: url(https://www.upwork.com/profile-portraits/c1isb-q9tIq2pjq_UH0krfPEh8r7FfNPyo2Sh-2dw0rhfNz_yAninExta3OWGosR7x);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 60px;
    height: 60px;
    border-radius: 50%; 
    margin: 10% auto;
`;

const A = styled.a`
    color: #001e00;   
    font-size: 18px;
    font-weight: 500; 
    text-decoration: underline;
    text-align: center;
    width: 100%;

    &:hover {
        color: #108a00;   
        cursor: pointer;
    }
`;

const P = styled.p`
    color: #001e00;   
    font-size: 14px;
    padding: 15px;
    text-align: center;
    width: 100%;
`;

const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #e4ebe4;
    margin: 5% 0;
    padding: 15px;
`;

const ProgressDiv1 = styled.div`
    width: 80%;
    height: 4px;
    background: #108a00;
    border-radius: 10rem;
`;

const Hr = styled.div`
    width: 100%;
    height: 1px;  
    background: #d5e0d5;
`;

const SVG = styled.div`
    fill: #108a00;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #d5e0d5;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background: #ebf3eb;
        cursor: pointer;
    }
`;

const H1 = styled.h1`
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    color: rgb(0, 30, 0);
    padding: 15px 0 0 15px;
    text-align: left;
`;

const P2 = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: rgb(20, 168, 0);
    padding: 5px 15px 15px;
    text-align: left;
`;





const index = () => {
    return (
        <UserInfo>
            <UserDiv>
                <Img src="https://www.upwork.com/profile-portraits/c1isb-q9tIq2pjq_UH0krfPEh8r7FfNPyo2Sh-2dw0rhfNz_yAninExta3OWGosR7x" alt="user-picture" />
                <A href="#profile" >Wasiim A.</A>
                <P>Front-End Developer ...</P>

                <Profile>
                    <A href="#profile"> Profile Completeness: </A>
                    <div style={{width:'65%', display:'flex', alignItems:'center', margin:'5% auto'}}>
                        <ProgressDiv1/>
                        100%
                    </div>
                </Profile>

                <Hr />
                
                <div style={{margin:'5% 0'}}>
                    <div style={{display:'flex'}}>
                    <h4 style={{padding:'5px 15px'}}>Availability Badge</h4>
                    <SVG>
                        <svg style={{fill:'#108a00', width:'50%'}} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path></svg>
                    </SVG>
                    </div>
                    <p style={{padding:'5px 15px'}}>Off</p>
                </div>

                <div style={{margin:'5% 0'}}>
                    <div style={{display:'flex'}}>
                    <h4 style={{padding:'5px 15px'}}>Hours per week</h4>
                    <SVG>
                        <svg style={{fill:'#108a00', width:'50%'}} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path></svg>
                    </SVG>
                    </div>
                    <p style={{padding:'5px 15px'}}>More than 30 hrs/week</p>
                </div>

                <div style={{margin:'5% 0'}}>
                    <div style={{display:'flex'}}>
                    <h4 style={{padding:'5px 15px'}}>Profile Visibility</h4>
                    <SVG>
                        <svg style={{fill:'#108a00', width:'50%'}} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path></svg>
                    </SVG>
                    </div>
                    <p style={{padding:'5px 15px'}}>Upwork Users Only</p>
                </div>

                <div style={{margin:'5% 0'}}>
                    <div style={{display:'flex'}}>
                    <h4 style={{padding:'5px 15px'}}>Job Preference</h4>
                    <SVG>
                        <svg style={{fill:'#108a00', width:'50%'}} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path></svg>
                    </SVG>
                    </div>
                    <p style={{padding:'5px 15px'}}>No preference set</p>
                </div>

                <Hr />

                <div style={{margin:'5% 0'}}>
                    <div style={{display:'flex'}}>
                    <h4 style={{padding:'5px 15px'}}>My Categories</h4>
                    <SVG>
                        <svg style={{fill:'#108a00', width:'50%'}} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"></path></svg>
                    </SVG>
                    </div>
                    <p style={{padding:'5px 15px'}}>Web & Mobile Design</p>
                    <p style={{padding:'5px 15px'}}>Web Development</p>
                </div>

            </UserDiv>

            <UserDiv>
                <H1> Proposals </H1>
                <P2> My Proposals </P2>
                <Hr/>
                <p style={{padding:'20px'}}> Looking for work? Browse jobs and get started on a proposal. </p>
            </UserDiv>

            <UserDiv>
                <H1> Project Catalog </H1>
                <P2> My Project Dashboard </P2>
                <Hr/>
                <p style={{padding:'20px'}}> Create a Catalog project for clients to purchase instantly </p>
            </UserDiv>
        </UserInfo>
    )
}

export default index