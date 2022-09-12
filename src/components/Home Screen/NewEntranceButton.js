import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function NewEntranceButton(){
    const navigate = useNavigate();
    const { setTransictionType } = useContext(UserContext);

    function navigateToNewTransictionScreen(){
        navigate('/new-transiction');
        setTransictionType('Entrada');
    }

    return(
            <NewTransictionButtonContent onClick={navigateToNewTransictionScreen}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova Entrada</p>
            </NewTransictionButtonContent>
    );
}

const NewTransictionButtonContent = styled.div`
    width: 45%;
    height: 114px;
    margin-bottom: 16px;
    background: #A328D6;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
    }

    ion-icon {
        width: 25px;
        height: 35px;
        color: #FFFFFF;
    }
`
