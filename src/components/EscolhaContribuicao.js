import React from 'react'
import styled from 'styled-components'

function EscolhaContribuicao() {
    return (
        <Container>
            <ContribuicaoContent>
                <h1>Escolha uma contribuição</h1>
                <p>
                    Os produtos refletem o valor da contribuição 
                    para a ONG. Escolha com o que deseja doar e um
                    formulário se abrirá para finalizar sua doação.
                </p>
                <Grid>
                    <Item1>
                        <ImgItem1 src="images/item1.png"/>
                        <caption>Kit higiene feminino</caption>
                        <h2>R$ 35,00</h2>
                    </Item1>
                    <Item2>
                        <ImgItem2 src="images/item1.png"/>
                        <caption>Kit higiene unissex</caption>
                        <h2>R$ 35,00</h2>
                    </Item2>
                    <Item3>
                        <ImgItem3 src="images/item4.png"/>
                        <caption>Cesta básica</caption>
                        <h2>R$ 80,00</h2>
                    </Item3>
                    <Item4>
                        <ImgItem4 src="images/item3.png"/>
                        <caption>Saco de ração - 5kg</caption>
                        <h2>R$ 20,00</h2>
                    </Item4>
                </Grid>
            </ContribuicaoContent>
        </Container>
    )
}

export default EscolhaContribuicao

const Container = styled.div`
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
const ContribuicaoContent = styled.div`
    padding-bottom: 50px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    h1{
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        color: #102737;
    }
    >p{
        max-width: 725px;
        text-align:center;
        margin: 0 auto;
    }
    @media(max-width: 1050px){
        padding-left: 25px;   
        padding-right: 25px;   
    }
`
const Grid = styled.div` 
    display: flex;
    padding-top: 85px;
    gap: 15px;
    @media(max-width: 720px){   
        flex-wrap: wrap; 
    }
`
const Item1 = styled.div` 
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    caption{
        font-weight: normal;
        font-size: 16px;
        color: #454545;
    }
    h2{
        font-weight: bold;
        font-size: 24px;
    }
    @media(max-width: 720px){   
        width: calc(50% - 15px); 
    }
    @media(max-width: 500px){   
        width: 100% ; 
    }
`
const ImgItem1 = styled.img` 
    margin-bottom: 15px;
    object-fit: contain;
    width: 100%;
    height: 100%;
`
const Item2 = styled(Item1)` 

`
const ImgItem2 = styled(ImgItem1)` 

`
const Item3 = styled(Item1)` 

`
const ImgItem3 = styled(ImgItem1)` 
    
`
const Item4 = styled(Item1)` 

`
const ImgItem4 = styled(ImgItem1)` 
    
`