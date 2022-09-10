import styled from "styled-components";

export default function TransictionsResume() {
    return (
        <ResumeContent>
            <p>Não há registros de entrada ou saída</p>
        </ResumeContent>    
    );
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