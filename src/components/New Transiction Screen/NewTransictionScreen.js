import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_imgs/MyWallet.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";
import { useContext } from 'react';

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
    const { transictionType, balance, setBalance, token } = useContext(UserContext);
    const { value, setValue } = useState(0);
    const { description, setDescription } = useState("");
    const navigate = useNavigate();

    function updateBalance(value, transictionType){
        if(transictionType === 'Entrada'){
            setBalance(balance + value);
        } else if(transictionType === 'Saída'){
            setBalance(balance - value);
        }
    }

    function sendNewTransiction(event){
        event.preventDefault();

        const newTransiction = {
            value: value,
            description: description
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = 'localhost:5000/transictions';

        updateBalance(value, transictionType);

        if(transictionType === 'Entrada'){
            const promise = axios.post(URL, newTransiction, config);
            promise.then(res => {
                alert('Transação registrada com sucesso!');
                navigate('/home');
            });

            promise.catch(err => {
                alert('Não foi possível registrar sua transação. Tente novamente!');
            });
        } else if(transictionType === 'Saída'){

        }
    }

    return (
        <FormContainer onSubmit={sendNewTransiction}>
            <p>Nova {transictionType}</p>
            <InputStyle 
                type="number"
                placeholder='Valor'
                required
                onChange={(e) =>
                    setValue(e.target.value)
                }
            />
            <InputStyle 
                type="text"
                placeholder='Descrição'
                required
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />
            <RegisterTransictionButton type="submit" onClick={sendNewTransiction}>Salvar {transictionType}</RegisterTransictionButton>
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