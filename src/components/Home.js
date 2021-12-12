import React from 'react'
import styled from 'styled-components'
import ApoieUmaCausa from './HomeComponents/ApoieUmaCausa'
import BemVinde from './HomeComponents/BemVinde'
import NossosParceiros from './HomeComponents/NossosParceiros'
import SobreAGive from './HomeComponents/SobreAGive'

function Home() {
    return (
        <Container>
            <BemVinde/>
            <SobreAGive/>
            <ApoieUmaCausa/>
            <NossosParceiros/>
        </Container>
    )
}

export default Home

const Container = styled.div`

`