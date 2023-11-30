import styled from 'styled-components';
import { useState } from 'react';
import "./assets/css/reset.css"
import TopBar from './topBar';
import ContainerQuestion from './ContainerQuestion';
import BottomBar from './BottomBar';
import deck from "./cards.js"


function App() {
  const [cardsDone, setCardsDone] = useState(0);
  const cardsData = { cardsDone: cardsDone, setCardsDone: setCardsDone, deckLength: deck.length }
  //const infoQuestions = {deck: deck, cardsData: cardsData};
  const infoQuestions = transformDeck(deck, cardsData);

  return (
    <ScreenContainer>
      <TopBar />
      <ContainerQuestion infoQuestions={infoQuestions}/>
      <BottomBar cardsData={cardsData} />
    </ScreenContainer>
  );
}

export default App;

function transformDeck(list, cardsData) {
  const infoQuestions = { deck: [] };
  let question;
  let answer;
  for (const element of list) {
    question = element.question;
    answer = element.answer;
    infoQuestions.deck.push({ question: question, answer: answer, cardsData: cardsData });
  }
  return infoQuestions;
}

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