import React from 'react'
import styled from 'styled-components'

function ApoieUmaCausa() {
    return (
        <Container>
            
        </Container>
    )
}

export default ApoieUmaCausa

const Container = styled.div`
    height: 700px;
    padding-top: 60px;
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
