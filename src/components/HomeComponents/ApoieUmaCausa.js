import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

function ApoieUmaCausa() {
    return (
        <Container>
            <ApoieContent>
                <h1>Apoie uma causa</h1>
                <Grid>
                    <Item1>
                        <label>LGBTQIAP+</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item1>
                    <Item2>
                        <label>Causa animal</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item2>
                    <Item3>
                        <label>Pessoas em<br/> situação de rua</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item3>
                    <Item4>
                        <label>Igualdade Racial</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item4>
                    <Item5>
                        <label>Sustentabilidade</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item5>
                    <Item6>
                        <label>Direitos Humanos</label>
                        <Link to="/TCC/build/contribuicao"><Btn>apoiar</Btn></Link>
                    </Item6>
                </Grid>
            </ApoieContent>
        </Container>
    )
}

export default ApoieUmaCausa

const Container = styled.div`
    width: 100%;
    padding-bottom: 60px;
    position: relative;
    &:before{
        background-image: url('images/shapes-apoie.png');
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
const ApoieContent = styled.div` 
    padding-top: 20px ;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    h1{
        text-align: center;
        font-weight: 600;
        font-size: 48px;
        color: #102737;
    }
    @media(max-width: 1000px){
        padding-left: 25px;
        padding-right:25px; 
    }
`
const Grid = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`
const Item1 = styled.div`
    width: calc(33.333333% - 7px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image:url('images/apoie6.png');
    background-position: center;
    height: 242px;
    max-width: 301px;
    border-radius: 9px;
    label{
        padding: 15px;
        color: white;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
    }
    @media(max-width: 850px){
        width: calc(50% - 10px);
    }
    @media(max-width: 550px){
        width: 100%;
    }
`
const Item2 = styled(Item1)`
    background-image:url('images/apoie1.png');
`
const Item3 = styled(Item1)`
    background-image:url('images/apoie5.png');
`
const Item4 = styled(Item1)`
    background-image:url('images/apoie3.png');
`
const Item5 = styled(Item1)`
    background-image:url('images/apoie4.png');
`
const Item6 = styled(Item1)`
    background-image:url('images/apoie2.png');
`
const Btn = styled.button`
    width: 100%;
    height: 54px;
    color: white;
    border-radius: 0 0 8px 8px;
    border:none;
    background: #EB7F31;
    font-size: 16px;
    font-weight: 700;
    transition: all 250ms;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(235, 127, 49, 0.3);
    &:hover{
        background: rgba(188, 102, 39, 1);
        color: #FFFFFF;
    }
`

