import React from 'react'
import styled from 'styled-components'

function QuemSomos() {
    return (
        <Container>
            <QuemSomosContent>
                <h1>Quem somos</h1>
                <Grid>
                    <GroupPhoto src="images/membros.png"/>
                    <TextQuemSomos>
                        <Wrap>
                            <p>
                                Somos um grupo de pessoas que querem fazer a 
                                diferença.
                            </p>
                            <p>
                                Nossa ideia de viabilizar doações surge
                                em 2021, durante o Gama Experience (Programa 
                                de treinamento oferecido pela Gama Academy).
                            </p>
                            <p>
                                O propósito da givee é juntar pessoas que
                                querem doar, mas que não sabem qual causa
                                apoiar, com ONGs que precisam de ajuda mas
                                não têm o alcance necessário.
                            </p>
                        </Wrap> 
                    </TextQuemSomos>
                </Grid>
            </QuemSomosContent>
        </Container>
    )
}

export default QuemSomos

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
const QuemSomosContent = styled.div` 
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    h1{
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        color: #102737;
    }
    @media(max-width: 1050px){
        padding-left: 25px;
        padding-right: 25px;
    }
`
const Grid = styled.div` 
    display: flex;
    flex-wrap: wrap;
`
const GroupPhoto = styled.img` 
    width: 50%;
    @media(max-width: 710px){
        width: 100%;
        order: 1;
        margin-bottom: 45px;
    }
`
const TextQuemSomos = styled.div` 
    width: 50%;
    display: flex;
    align-items: center;
    p{
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #454545;
    }
    @media(max-width: 710px){
        width: 100%;
    }
`
const Wrap = styled.div` 
    padding-left: 15px;
    padding-bottom: 85px;
    @media(max-width: 710px){
        padding-bottom:25px;
    }
`