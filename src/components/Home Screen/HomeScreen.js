import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/_imgs/MyWallet.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../../contexts/UserContext";
import TransictionsResume from './TransictionsResume';
import NewEntranceButton from './NewEntranceButton';
import NewExitButton from './NewExitButton';

export default function HomeScreen() {
    return(
        <ScreenContainer>
            <HomeContent />
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

function HomeContent(){
    return(
        <HomeContainer>
            <Header>
                <p>Olá, Fulano</p>
                <Link to={'/'}>
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link>      
            </Header>
            <TransictionsResume />
            <OperationsButtons>
                <NewEntranceButton />
                <NewExitButton />
            </OperationsButtons>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 90%;
    display: flex;
    height: 100vh;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 26px;   

    > p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }

    ion-icon {
        color: #FFFFFF;
        width: 25px;
        height: 35px;
    }
`

const OperationsButtons = styled.div`
    display: flex;
    justify-content: space-between;
`