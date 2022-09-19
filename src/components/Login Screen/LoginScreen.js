import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_imgs/MyWallet.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner';


export default function LoginScreen() {
    return(
        <ScreenContainer>
            <Logo src={logo}/>
            <LoginForm />
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #8C11BE;
    height: 100vh;
    width: 100%;
    margin: 0px;
`

const Logo = styled.img`
    width: 146px;
    height: 50px;
    margin-bottom: 24px;
`

function LoginForm(){
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false);

    function login(event) {
        event.preventDefault();
        const URL = 'http://localhost:5000/login';
        const promise = axios.post(URL, loginData);

        setLoading(true);

        promise.then((res) => {
            const { token } = res.data;
            setToken(token);
            navigate('/products');
        })

        promise.catch((err) => {
            alert(`Vish deu ruim :( Cadastres-se ou tente novamente!`);
            setLoading(false);
        })
    }

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const {email, password} = loginData; 

    function handleForm(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <FormContainer onSubmit={login}>
            <InputStyle 
                type="email"
                id='email'
                placeholder='E-mail'
                required
                name='email'
                onChange={handleForm}
                value={email}
            />
            <InputStyle 
                type="password"
                id='password'
                placeholder='Senha'
                required
                name='password'
                onChange={handleForm}
                value={password}
            />
            <LoginButton type="submit">{loading ? <ThreeDots color="#FFFFFF" height={60} width={60} /> : "Entrar"}</LoginButton>
            <Link to={'/register'}>
                <Span>Primeira vez? Cadastre-se!</Span>
            </Link>
            
        </FormContainer>
    );
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input::placeholder  {
        color: #000;
    }

    button:hover {
        cursor: pointer;
    }

    span:hover {
        cursor: pointer;
    }
`

const InputStyle = styled.input`
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    color: black;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding-left: 10px;
    box-sizing: border-box;
`
const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    margin-bottom: 36px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
`

const Span = styled.span`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
`