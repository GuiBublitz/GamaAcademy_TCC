import React from 'react'
import styled from 'styled-components'

function NossosParceiros() {
    return (
        <Container >
            <ParceirosContent>
                <h1>Nossos parceiros</h1>
                <Grid>
                    <Img1 src="images/kit-com-elas.svg"/>
                    <Img2 src="images/liga-do-bem.svg"/>
                    <Img3 src="images/prato-verde-sustentavel.svg"/>
                    <Img4 src="images/adeh.svg"/>
                    <Img5 src="images/focinho-amigo.svg"/>
                </Grid>
                <Btn>cadastre sua ONG</Btn>
            </ParceirosContent>
        </Container>
    )
}

export default NossosParceiros

const Container = styled.div`
    width: 100%;
    position: relative;
    &:before{
        background-image: url('images/shapes-parceiros.png');
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
const ParceirosContent = styled.div` 
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    h1{
        text-align: center;
        font-weight: 600;
        font-size: 48px;
        color: #102737;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Grid = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    gap: 50px;
    
`
const Img1 = styled.img` 
    object-fit: contain;

`
const Img2 = styled(Img1)` 
    
`
const Img3 = styled(Img1)` 
    
`
const Img4 = styled(Img1)` 
    
`
const Img5 = styled(Img1)` 
    
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
    margin: 50px 0 100px 0;
    &:hover{
        background: #2B6894;
    }
`

