import styled from "styled-components";

export default function NewEntranceButton(){
    return(
            <NewTransictionButtonContent>
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