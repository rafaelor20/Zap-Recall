import styled from 'styled-components';
import "./assets/css/reset.css"
import TopBar from './topBar';
import ContainerQuestion from './ContainerQuestion';
import BottomBar from './BottomBar';
import deck from "./cards.js"


function App() {
  return (
    <ScreenContainer>
      <TopBar />
      <ContainerQuestion deck={deck}/>
      <BottomBar number={deck.length}/>
    </ScreenContainer>
  );
}

export default App;


const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`