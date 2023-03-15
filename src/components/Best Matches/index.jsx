import styled from "styled-components";

const MatchesDiv = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    transition: ease-in-out .2s;
    border-bottom: 1px solid #d5e0d5;
    margin: 1% 0;
    &:hover {
        background: #f5f3f3;
    }
`;

const Flex = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 1% 0 0 0;
`;

const JopTitle = styled.a`
    color: #5e6d55;
    font-weight: 600;
    padding: 25px;
    text-decoration: none;
    &:hover {
        color: rgb(20, 168, 0);
        text-decoration: underline;
    }
`;

const SVG = styled.svg`
    width: 40%;
    fill:rgb(20, 168, 0);
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    background: #fff;
    border: 2px solid #dadada;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        background: #f5f3f3;
    }
`;

const Span = styled.span`
    font-size: 12px;
    color: rgb(94, 109, 85);
    padding: 25px;
`;

const P = styled.p`
    font-size:14px;
    color: rgb(0, 30, 0);
    padding: 10px 25px;
`;

const Skills = styled.span`
    padding: 5px 8px;
    font-size: 12px;
    background: #e9e9e9;
    border-radius: 10px;
    color: #5e6d55;
`;

const Verified = styled.svg`
    width: 1.8%;
    fill: blue;  
`;

const Stars = styled.svg`
    width: 1.5%;
    fill: rgb(20, 168, 0);
    margin: 0 1px;
`;

const Location = styled.svg`
    width: 1.8%;
    fill: gray;
`

const index = () => {

    return (
        <MatchesDiv>
            <Flex>
                <JopTitle href="/job_details">Minor addition in PHP code</JopTitle>
                <div style={{display:'flex',alignItems: 'center',justifyContent: 'space-around', width:'10%', height:'60px', marginRight:'2%'}}>
                    <Button>
                        <SVG xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M3.237 1.368h5.896v5.375c0 .185-.097.552-.2.757l-2.564 2.802c-.205.22-.317.508-.317.81v1.35c-.35-.274-.946-1.057-.215-2.974a1.2 1.2 0 00-1.115-1.624H1.54l1.697-6.496zM.15 8.948c.142.183.36.284.614.284H4.48c-1.194 3.422.965 4.492 1.22 4.605a1.946 1.946 0 001.629-.033.177.177 0 00.09-.152l.002-2.475s2.577-2.79 2.587-2.79h3.78c.116 0 .21-.078.21-.172V.172c0-.094-.095-.17-.21-.17L3.085 0C2.59 0 2.08.404 1.947.903L.032 8.243a.805.805 0 00.12.706z"></path></SVG>                    
                    </Button>
                    <Button>
                        <SVG xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"></path></SVG>
                    </Button>
                </div>
            </Flex>

            <Span>Fixed-price - Entry level - Est. Budget: $25 - Posted 1 hour ago</Span>

            <P>
                See attached php file. it is part of a process to filter an email list where user has 2 email (work & personal) and send the email. The problem i am having is that the email list generated includes BLANK email fields. Your task is to fix this code so it does NOT include BLANK emails. Once you go through the code, you will see that this is a extremely simple task. How
            </P>

            <div style={{display:'flex',alignItems: 'center',justifyContent: 'flex-start', width:'95%', margin:'auto'}}>
                <Skills>PHP</Skills>
            </div>
            
            <br/>
            <Span>Proposals: <b>5 to 10</b></Span>

            <div style={{display:'flex',alignItems: 'center',justifyContent: 'flex-start', width:'95%', margin:'0 auto 1% auto'}}>
            <Verified xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path></Verified>
                <Span style={{padding:'15px 5px'}}>Payment verified</Span>

                <Stars xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></Stars>
                <Stars xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></Stars>
                <Stars xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></Stars>
                <Stars xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></Stars>
                <Stars xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></Stars>
                
                <Span style={{padding:'15px 5px'}}>$4k+ spent</Span>

                <Location xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path fill-rule="evenodd" d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"></path></Location>
                <Span style={{padding:'15px 5px'}}>Brazil</Span>
            
            </div>

        
        </MatchesDiv>
    )
}

export default index