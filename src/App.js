import styled from 'styled-components';
import "./assets/css/reset.css"
import TopBar from './topBar';
import ContainerQuestion from './ContainerQuestion';
import BottomBar from './BottomBar';

function App() {
  return (
    <ScreenContainer>
      <TopBar />
      <ContainerQuestion />
      <BottomBar />
    </ScreenContainer>
  );
}

export default App;


const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`