import React from 'react'
import styled from 'styled-components'

function Transparencia() {
    return (
        <Container>
            <TransparenciaContent>
                <h1>Transparência</h1>
                <PreviewBox>
                    <h3>Preview das doações</h3>
                </PreviewBox>
                <p>Confira o relatório completo clicando aqui</p>
            </TransparenciaContent>
        </Container>
    )
}

export default Transparencia

const Container = styled.div`
    height: 650px;
    width: 100%;
    position: relative;
    &:before{
        background-image: url('images/shapes-quem-somos.png');
        position: absolute;
        content:"";
        background-repeat:no-repeat ;
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        z-index: -2;
    }
`
const TransparenciaContent = styled.div` 
    width: 100%;
    max-width: 613px;
    margin: 0 auto;
    h1{
        text-align: center;
        margin: 35px 0 55px 0;
        font-weight: 600;
        font-size: 48px;
        color: #102737;
    }
    >p{
        font-weight: normal;
        font-size: 16px;
        color: #454545;
    }
    @media(max-width:650px){
        padding-left: 25px;
        padding-right: 25px;
    }
`
const PreviewBox = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 257px;
    background-color: #C4C4C4;
    h3{
        font-weight: bold;
        font-size: 32px;
    }
    @media(max-width:410px){
        padding: 15px;
    }
`