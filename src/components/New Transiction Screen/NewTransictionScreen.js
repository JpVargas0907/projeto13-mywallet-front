import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_imgs/MyWallet.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";

export default function NewTransictionScreen() {
    return(
        <ScreenContainer>
            <NewTransictionForm />
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

function NewTransictionForm(){
    return (
        <FormContainer>
            <p>Nova entrada / Saída</p>
            <InputStyle 
                placeholder='Valor'
            />
            <InputStyle 
                placeholder='Descrição'
            />
            <RegisterTransictionButton>Salvar Entrada / Saída</RegisterTransictionButton>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        margin-top: 25px;
        margin-bottom: 40px;
    }

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
const RegisterTransictionButton = styled.button`
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