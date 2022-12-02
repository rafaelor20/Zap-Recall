import styled from "styled-components"
import logo from "./assets/img/logo.png"

export default function TopBar() {
    return (
        <TopBarBody>
            <Logo src={logo} alt="logo" />
            <Title>ZapRecall</Title>
        </TopBarBody>
    )
}

const TopBarBody = styled.div`
    height: 160px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Logo = styled.img`
    width: 52px;
    height: 60px;
`

const Title = styled.p`
    width: 204px;
    height: 44px;
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
`