import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <Container>
            <Bg>
                <FooterContent>
                    <GroupArrow>
                        <p>voltar para o topo</p>
                        <a href="#topo"><ArrowBtn></ArrowBtn></a>
                    </GroupArrow>
                    <Grid>
                        <Link to="/TCC/build/"><Icon src="images/givee-white.svg"/></Link>
                        <Institucional>
                            <h3>institucional</h3>
                            <nav>
                                <li><a><Link to="/TCC/build/quem-somos">quem somos</Link></a></li>
                                <li><a><Link to="/TCC/build/transparencia">transparência</Link></a></li>
                                <li><a><Link to="/TCC/build/nossos-parceiros">parceiros</Link></a></li>                  
                                <li><a><Link to="/TCC/build/apoie-uma-causa">apoie</Link></a></li>
                                <li><a><Link to="">cadastre sua ONG</Link></a></li>
                            </nav>
                            <SocialMedias>
                                <ul>
                                    <li><a><img src="images/instagram-icon.svg"/></a></li>
                                    <li><a><img src="images/facebook-icon.svg"/></a></li>
                                    <li><a><img src="images/linkedin-icon.svg"/></a></li>
                                </ul>
                            </SocialMedias>
                        </Institucional>
                        <Contact>
                            <Contato>
                                <h3>contato</h3>
                                <p>givee@gmail.com</p>
                            </Contato>
                            <Endereco>
                                <h3>endereço</h3>
                                <p>Rua Ali Perto 123 - Bairro Longe<br/>São Paulo - SP</p>
                            </Endereco>
                        </Contact>
                    </Grid>
                    <p>givee © todos os direitos reservados. 2021</p>
                </FooterContent>
            </Bg>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    margin: 0 auto;
    height: 600px;
    z-index: -4;
`
const Bg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &:after{
        content: '';
        background-image: url('images/Rectangle.png');
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: top;
        background-size:cover;
        z-index: -5;
    }
`

const FooterContent = styled.div`
    padding: 0 20px;
    color: white;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    z-index: 2;
    list-style: none;
    >p:last-child{
        align-self: flex-start;
        background-color: #3682B9;
        width: 100%;
        margin: 0;
        font-size: 16px;
        @media(max-width: 615px){
            text-align: center;
            padding: 15px 0;
        }
    }
    @media(max-width: 615px){
        padding: 0;
    }
`
const GroupArrow = styled.div`
    p{
        color: #3682B9;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    text-align: center;
    position: absolute;
    top: -30px;
`
const ArrowBtn = styled.div` 
    background-image: url('images/ArrowUp.png');
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    background-color: #3682B9;
    padding: 25px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-size: 40% 20%;
`

const Grid = styled.div`
    margin: 170px 0 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr 3fr;
    @media(max-width: 615px){
        grid-template-columns: 1fr; 
        justify-items: start;
        background-color: #3682B9;
        text-align: left;
    }
`

const Icon = styled.img`
    height: 57px;
    width: 143px;
    padding-top: 25px;
    @media(max-width: 615px){
        margin: 0;
        padding-left: 50px ;
    }
`
const Institucional = styled.div`
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    h3{
        font-size: 24px;
        font-weight: 700;
    }
    li{
        margin-bottom: 20px;
        font-size: 16px;
    }
    @media(max-width: 615px){
        margin: 0;
        padding-left: 50px ;
    }
`

const SocialMedias = styled.div`
    ul{ 
        padding: 0;
        display: flex;
        justify-content: start;
        gap: 25px;
        align-items: center;
        list-style: none;
        img{
            width: 28px;
            height:28px;
            object-fit: cover;
        }
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: 16px;
    }
    h3{
        font-size: 24px;
    }
    @media(max-width: 615px){
        margin: 0;
        padding-left: 50px ;
    }
`

const Contato = styled.div`

`

const Endereco = styled.div`
    
`