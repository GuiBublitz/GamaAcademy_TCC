import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

function BemVinde() {
    return (
        <Container>
                <IntroContent>
                        <BemVindeContent>
                            <h1>Bem-vinde a givee</h1>
                            <h3>Quer ajudar, mas não sabe por onde começar?</h3>
                            <p>
                                Aqui na givee você encontra diferentes causas 
                                que precisam de ajuda. Você doa, e nós direcionamos 
                                as doações para ONGs cadastradas em nosso projeto
                            </p>
                            <GroupButton>
                                <Link to="/TCC/build/apoie-uma-causa"><BtnCausa>apoie uma causa</BtnCausa></Link>
                                <a href="https://forms.gle/Ts4sERmMdiUhHsRZA"><BtnOng>cadastre sua ONG</BtnOng></a>
                            </GroupButton>
                        </BemVindeContent>
                    <GroupImage>
                        <Border1/>
                        <Img1 src="images/bemvinde1.png"/>
                        <Relative><Border2/></Relative>
                        <Img2 src="images/bemvinde2.png"/>
                    </GroupImage>
                </IntroContent>
        </Container>
    )
}

export default BemVinde

const Container = styled.div`
    position: relative;   
    width: 100%;
    &:before{
        position: absolute;
        content:"";
        background-image: url('images/shapes-intro.png');
        background-repeat:no-repeat ;
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        z-index: -2;
    }
`

const IntroContent = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
`   
const BemVindeContent = styled.div`
    padding-top: 40px;
    width: 60%;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 56px;
        color: #3682B9;
        margin-bottom: 0;
    }
    h3{
        font-size: 23px;
        color: #454545;
        font-weight: normal;
    }
    p{
        color: #454545;
        font-size: 16px;
        max-width: 458px;
        line-height: 22px;
    }
    @media(max-width: 1050px){
        padding-left:25px;
    }
    @media(max-width: 750px){
        align-items: center;
        width: 100%;
        padding-top: 0px;
        padding-right: 25px;
        box-sizing: border-box;
    }
`
const GroupButton = styled.div` 
    padding-top: 50px;
    display: flex;
    gap: 25px;
    @media(max-width: 500px){
        gap: 10px;
        flex-direction: column;
        padding-top: 25px;
    }
    @media(max-width: 350px){
        align-items: center;
        gap: 10px;
    }
`
const BtnCausa = styled.button`
    width: 187px;
    height:54px;
    color: white;
    border-radius: 8px;
    border:none;
    background: #EB7F31;
    font-size: 16px;
    font-weight: 700;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(235, 127, 49, 0.3);
    &:hover{
        background: rgba(188, 102, 39, 1);
    }
    @media(max-width: 500px){
        width: 250px;
    }
`
const BtnOng = styled(BtnCausa)`
    box-shadow: none;
    background: #3682B9;
    transition: all 200ms;
    display:none ;
    &:hover{
        background: #2B6894;
    }
`
const GroupImage = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    positive: relative;
    @media(max-width: 750px){
        display: none;
    }
`
const Img1 = styled.img` 
    margin: 45px 0 65px 0;
    width: 228px;
    height: 228px;
    align-self: end;
    positive: relative;
    @media(max-width: 1050px){
        margin-right:75px;
    }
`
const Img2 = styled.img` 
    width: 228px;
    height: 228px;
`
const Border1 = styled.div`
    width: 228px;
    height: 228px;
    position: absolute;
    border: 1px solid #7EDFB1;
    border-radius: 15px;
    z-index: -100;
    right: -35px;
    top: 10px;
    @media(max-width: 1050px){
        right:40px;
    }
`
const Border2 = styled.div`
    width: 228px;
    height: 228px;
    position: absolute;
    border: 1px solid #F3B488;
    border-radius: 15px;
    z-index: -100;
    bottom: -200px;
    left: 35px;
`
const Relative = styled.div`
    position: relative;
`