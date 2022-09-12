import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function TransictionsResume() {
    const { token } = useContext(UserContext);
    const [transictionsList, setTransictionsList] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "localhost:5000/transictions"
        const promise = axios.get(URL, config);

        promise.then((res) => {
            const { data } = res;
            setTransictionsList([...data]);
        });

        promise.catch((err) => {
            alert(err.message);
        });
    }, [transictionsList]);

    function buildTransictionsList(){
        if(transictionsList.length > 0){
            transictionsList.map(transiction => {
                const { id, date, description, value } = transiction;
                return <Transiction key={id} id={id} date={date} description={description} value={value}/>
            });
        } else {
            return <p>Não há registros de
            entrada ou saída</p>
        }
    }

    return (
        <ResumeContent>
            {buildTransictionsList()}
        </ResumeContent>    
    )
}

const ResumeContent = styled.div`
    width: 100%;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #868686;
    }
`

function Transiction(props){
    const { id, date, description, value} = props;

    return(
        <TransictionContent>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <Value value={value}>{value}</Value>
        </TransictionContent>
    )
}

const TransictionContent = styled.div`
    display: flex;
    justify-content: space-around;
`

const Date = styled.p`
    color: #C6C6C6;
`

const Description = styled.p`
    color: #000000;
`

const Value = styled.p`
    color: ${props => props.value > 0 ? "#03AC00" : "#C70000"};
`