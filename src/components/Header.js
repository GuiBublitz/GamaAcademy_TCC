import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

function Header() {
    const[burgerStatus, setBugerStatus] = useState(false)
    return (
        <Container id="topo">
            <Link to="/TCC/build/"><Logo src="images/givee.svg"/></Link>
            <MenuNav>
                <nav id="default">
                    <li><a><Link to="/TCC/build/quem-somos">quem somos</Link></a></li>
                    <li><a><Link to="/TCC/build/transparencia">transparência</Link></a></li>
                    <li><a><Link to="/TCC/build/nossos-parceiros">parceiros</Link></a></li>
                    <li><a href="https://forms.gle/Ts4sERmMdiUhHsRZA">cadastre sua ONG</a></li>
                </nav>
                <NavMob show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBugerStatus(false)}/>
                    </CloseWrapper>
                    <li><a onClick={()=>setBugerStatus(false)}><Link to="/TCC/build/quem-somos">quem somos</Link></a></li>
                    <li><a onClick={()=>setBugerStatus(false)}><Link to="/TCC/build/transparencia">transparência</Link></a></li>
                    <li><a onClick={()=>setBugerStatus(false)}><Link to="/TCC/build/nossos-parceiros">parceiros</Link></a></li>
                    <li><a onClick={()=>setBugerStatus(false)}><Link to="https://forms.gle/Ts4sERmMdiUhHsRZA">cadastre sua ONG</Link></a></li>
                </NavMob>
                <CustomMenu onClick={()=>setBugerStatus(true)}>
                    <CustomMenuIcon/>
                </CustomMenu>
                <Link to="/TCC/build/apoie-uma-causa"><Btn>apoie uma causa</Btn></Link>
            </MenuNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    transition: all 250ms;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 1;
`
const Logo = styled.img`
    height: 57px;
    width: 143px;
`
const MenuNav = styled.div`
    a{
        text-decoration: none;
        color: #102737;
        transition: 200ms ease-in-out;
        &:hover{
            color: #EC873D;
        }
    }
    display: flex;
    align-items: center;
    list-style: none;
    #default{
        display: flex;
        margin-right: 25px;
        gap: 25px;
        li{
            font-weight: 400;
            color: #102737;
        }
        @media(max-width: 745px){
            display: none;
        }
    }
`
const NavMob = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #E9F3F6;
    width: 250px;
    padding: 20px;
    text-align: left;
    transition: transform 0.2s ease-in-out;
    transform: ${prop => prop.show ? 'translateX(0)': 'translateX(100%)'};
    li{ 
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
    }
`

const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`
const CustomMenu = styled.div`
    display: none;
    @media(max-width:745px){
        display: block;
    }
`

const Btn = styled.button`
    width: 187px;
    height:54px;
    color: white;
    border-radius: 8px;
    border:none;
    background: #EB7F31;
    font-size: 16px;
    font-weight: 700;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(235, 127, 49, 0.3);
    &:hover{
        background: rgba(188, 102, 39, 1);
        color: #FFFFFF;
    }
    @media(max-width: 925px){
        display: none;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 14px 5px;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`