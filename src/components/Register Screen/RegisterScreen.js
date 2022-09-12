import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_imgs/MyWallet.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

export default function RegisterScreen() {
    return(
        <ScreenContainer>
            <Logo src={logo}/>
            <RegisterForm />
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

function RegisterForm(){
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        const URL = 'http://localhost:5000/register';
        const promise = axios.post(URL, registerData);

        promise.then(() => {
            navigate("/");
        })

        promise.catch(() => {
            alert("Preenchido de forma incorreta ou usuário já foi cadastrado.");
        })

        setRegisterData()
    }

    
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }); 

    const { name, email, password, confirmPassword } = registerData;

    function handleForm(e) {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        })
    }

    console.log(registerData);

    return (
        <FormContainer onSubmit={register}>
            <InputStyle 
                type="text"
                id='name'
                placeholder='Nome'
                required
                name='name'
                onChange={handleForm}
                value={name}
            />
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
                type="text"
                id='password'
                placeholder='Senha'
                required
                name='password'
                onChange={handleForm}
                value={password}
            />
            <InputStyle 
                type="text"
                id='confirmPassword'
                placeholder='Confirmar a senha'
                required
                name='confirmPassword'
                onChange={handleForm}
                value={confirmPassword}
            />
            <RegisterButton type='submit'>Cadastrar</RegisterButton>
            <Link to={'/'}>
                <Span>Já tem uma conta? Entre agora!</Span>
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
const RegisterButton = styled.button`
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