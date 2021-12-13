import React from 'react'
import styled from 'styled-components'

function SobreAGive() {
    return (
        <Container>
            <SobreContent>
                <h1>Sobre a <span>givee</span></h1>
                <Grid>
                    <Img1 src="images/foto-menino-sobre.png"/>
                    <Proposito>
                        <MaxWidth>
                            <h3>Nosso propósito</h3>
                            <p>
                                Acreditamos no poder que a união pode exercer
                                sobre uma comunidade. Com isso em mente, 
                                criamos a givee, pensada para servir de ponte 
                                àqueles que desejam ajudar, mas não sabem por onde 
                                começar.
                            </p>
                        </MaxWidth>
                    </Proposito>
                    <Givee>
                        <MaxWidth2>
                            <h3>Por que a givee?</h3>
                            <p>
                                Na givee, todas as doações são revertidas
                                para as instituições apoiadas, proporcionalmente 
                                às doações recebidas. Seja você uma apoiador,
                                ou representante de uma ONG, aqui é o seu lugar.
                            </p>
                            <Btn>cadastre sua ONG</Btn>
                        </MaxWidth2>
                    </Givee>
                    <Img2 src="images/foto-maos-sobre.png"/>
                </Grid>
            </SobreContent>
        </Container>
    )
}

export default SobreAGive

const Container = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
    &:before{
        background-image: url('images/shapes-sobre.png');
        position: absolute;
        content:"";
        background-repeat:no-repeat ;
        background-position: center;
        background-size: contain;
        height: 100%;
        width: 100%;
        z-index: -2;
    }
    }
`

const SobreContent = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    h1{ 
        color:#102737;
        font-size: 48px;
        font-weight: 600;
        text-align: center;
        span{
            color:#3682B9;
        }
        @media(max-width: 750px){
            margin-bottom: 0;
        }
    }

`
const Grid = styled.div` 
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 1050px){
        padding-left: 25px;
        padding-right: 25px;
    }
    @media(max-width: 850px){
        padding-top: 0;
    }
    @media(max-width: 650px){
        flex-direction: column;   
    }
    @media(max-width: 400px){
        padding-left: 10px;
        padding-right: 10px;
    }
`
const Img1 = styled.img` 
    width: 50%;
    object-fit: contain;
    @media(max-width: 680px){
        flex-direction: column;
        width: 100%;
        order: 2;
    }
`
const Proposito = styled.div ` 
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    h3{
        font-size: 32px;
        font-weight: normal;
    }
    p{
        color: #454545;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
    }
    @media(max-width: 1050px){
        padding: 0 15px;
    }
    @media(max-width: 680px){
        flex-direction: column;
        width: 100%;
        align-items: start;
        order: 1;
    }
    @media(max-width: 550px){
        padding: 0;
    }
`
const MaxWidth = styled.div` 
    width: 100%;
    max-width: 380px;
    @media(max-width: 1050px){
        padding: 0 25px;
    }
    @media(max-width: 680px){
        max-width:none;
        h3{
            margin-bottom: 5px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
`
const MaxWidth2 = styled(MaxWidth) ` 
`
const Givee = styled(Proposito)`
    @media(max-width: 680px){
        order: 3;
    }
`
const Btn = styled.button` 
    width: 187px;
    height:54px;
    color: white;
    border-radius: 8px;
    border:none;
    background: #3682B9;
    font-size: 16px;
    font-weight: 700;
    transition: all 200ms;
    cursor: pointer;
    box-shadow: none;
    &:hover{
        background: #2B6894;
    }
    @media(max-width: 680px){
        margin-bottom: 25px;
    }
    @media(max-width: 680px){
        width: 250px;
    }
`
const Img2 = styled(Img1)` 
    @media(max-width: 680px){
        order: 4;
    }
`
