import styled from "styled-components";
import {Button,Or, Input} from "../global/style";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import ErrorMessage from '../components/Erorr Message/index';


const LoginDiv = styled.div`
    width: 35%;
    height: auto;
    border: 1px solid #d5e0d5;
    border-radius: 8px;
    margin: 5% auto;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) { 
        width: 90%;
    }
`;

const H1 = styled.h1`
    font-size: 26px;
    color: rgb(0, 30, 0);
    line-height:32px; 
    padding: 25px;
    text-align: center;
`;

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Error, setErorr] = useState(false);

    const HandelLogin = () => {
        if (email === localStorage.getItem('Email') && password === localStorage.getItem('Password')) {
            setErorr(false)
            localStorage.setItem('session', true)
            navigate('/')
        } else {
            setErorr(true)
        }
    }

    return (
        <LoginDiv>
            <H1>Log in to Upwork</H1>
            <Input 
                width='70%' 
                type='text' 
                placeholder='Username or Email' 
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
                width='70%' 
                height='40px' 
                type='password' 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)}
            />

            {Error === true ? <ErrorMessage message='Please check your email or password' /> : null }

            
            <Button 
                width='70%' 
                background='#108a00' 
                color="#fff"
                onClick={() => HandelLogin()}
            >
                Countinue with Email
            </Button>

            <Or> or </Or>

            <Button width='70%' background='#4285f4' color="#fff">
                Countinue with Google
            </Button>

            <Button width='70%' background='none' border='1px solid #222222' color="#222222">
                Countinue with Apple
            </Button>

            <Or>  Don't have an account? </Or>

            <Button onClick={() => navigate('/signup')} width='50%' background='none' border='3px solid #108a00' color="#108a00">
                Sign Up
            </Button>
        </LoginDiv>
    )
}

export default Login