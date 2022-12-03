import styled from "styled-components";

export default function BottomBar() {
    return (
        <BottomBarDiv>
            <FontBottomBar>0/4 CONCLUÍDOS</FontBottomBar>
        </BottomBarDiv>
    )
}

const BottomBarDiv = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
`

const FontBottomBar = styled.p`
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`