import styled from "styled-components";
import {Flex,Button,Or, Input} from "../global/style";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import ErrorMessage from '../components/Erorr Message/index';

const SignupDiv = styled.div`
    width: 50%;
    height: auto;
    border: 1px solid #d5e0d5;
    border-radius: 8px;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    font-size: 26px;
    color: rgb(0, 30, 0);
    line-height:32px; 
    padding: 25px;
    text-align: center;
`;

const P = styled.p`
    font-size: 12px;
    color:  rgb(0, 30, 0);
    font-weight: 400;
    padding: 15px;
    width: 95%;
`;

const Signup = () => {

    const navigate = useNavigate();
    const [Error, setError] = useState(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [check, setCheck] = useState(false);


    const HandelSubmit = () => {
        if  (   firstName === '' || 
                lastName === '' ||
                email === '' ||
                password === '' ||
                country === '' ||
                check === false
            ) {
            setError(true)
        } else {
            setError(false)
            localStorage.setItem('FirstName', firstName)
            localStorage.setItem('LastName', lastName)
            localStorage.setItem('Email', email)
            localStorage.setItem('Password', password)
            localStorage.setItem('Country', country)
            localStorage.setItem('session', false)
            navigate('/login')
        }
    }


    return (
        <SignupDiv>
            <H1>Sign up to find work you love</H1>

            <Button width='90%' background='none' border='1px solid #222222' color="#222222">
                Countinue with Apple
            </Button>

            <Button width='90%' background='#4285f4' color="#fff">
                Countinue with Google
            </Button>

            <Or> or </Or>

            <Flex width='90%' justify='space-between' align='center'>
                
                <Input 
                    width='50%' 
                    type='text' 
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />


                <Input 
                    width='50%' 
                    type='text' 
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Flex>
            <Input 
                width='90%' 
                type='email' 
                placeholder='Email'  
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                width='90%' 
                type='password' 
                placeholder='Password (8 or more characters)'  
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input 
                width='90%' 
                type='text' 
                placeholder='Palestinian Territories'  
                onChange={(e) => setCountry(e.target.value)}
            />


            {Error === true ? <ErrorMessage message='All fields are required' /> : null }
            

            <Flex width='90%' justify='center' align='center'>
                <Input height='20px' width='20px' type='checkbox' />
                <P>Send me helpful emails to find rewarding work and job leads.</P>
            </Flex>

            <Flex width='90%' justify='center' align='center'>
                <Input height='20px' width='20px' type='checkbox' onClick={() => setCheck(true)} />
                <P>Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy .</P>
            </Flex>

            <Button 
                onClick={() => HandelSubmit()}
                width='90%' 
                background='#108a00' 
                color="#fff">
                Create My Account
            </Button>

            <Flex width='30%'>
                <P>Already have an account? <a style={{textDecoration:'none', color:'#108a00',fontSize:'16px'}} href="/login">  Log In </a> </P>
            </Flex>


        </SignupDiv>
    )
}

export default Signup