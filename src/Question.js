import styled from 'styled-components';
import { useState } from 'react';
import logoPlay from './assets/img/seta_play.png'
import logoTurn from './assets/img/seta_virar.png'


export default function Question(props, index) {
    console.log(props);
    const setCardsDone = props.cardsData.setCardsDone;
    console.log(setCardsDone);
    const cardsDone = props.cardsData.cardsDone;
    console.log(cardsDone);
    const [displayClosedQuestion, setDisplayClosedQuestion] = useState('flex');
    const stateDisplayClosedQuestion = { displayClosedQuestion: displayClosedQuestion, setDisplayClosedQuestion: setDisplayClosedQuestion };
    const [displayFrontQuestion, setDisplayFrontQuestion] = useState('none');
    const stateDisplayFrontQuestion = { displayFrontQuestion: displayFrontQuestion, setDisplayFrontQuestion: setDisplayFrontQuestion };
    const [displayBackQuestion, setDisplayBackQuestion] = useState('none');
    const stateDisplayBackQuestion = { displayBackQuestion: displayBackQuestion, setDisplayBackQuestion: setDisplayBackQuestion };
    const [displayFinishedQuestion, setDisplayFinishedQuestion] = useState('none');
    const stateDisplayFinishedQuestion = { displayFinishedQuestion: displayFinishedQuestion, setDisplayFinishedQuestion: setDisplayFinishedQuestion };
    return (
        <div data-test="flashcard">
            <ClosedQuestion stateDisplayClosedQuestion={stateDisplayClosedQuestion}>
                <TextQuestion data-identifier="flashcard-text">Pergunta {(index + 1)}</TextQuestion>
                <LogoClosedQuestion data-identifier="play-btn" src={logoPlay} onClick={() => displayFrontCard(stateDisplayClosedQuestion, stateDisplayFrontQuestion)} />
            </ClosedQuestion>
            <FrontQuestion stateDisplayFrontQuestion={stateDisplayFrontQuestion}>
                <TextQuestion data-identifier="flashcard-text">
                    {props.question}
                    <LogoTurnQuestion data-identifier="turn-btn" src={logoTurn} onClick={() => displayBackCard(stateDisplayFrontQuestion, stateDisplayBackQuestion)} />
                </TextQuestion>
            </FrontQuestion>
            <BackQuestion stateDisplayBackQuestion={stateDisplayBackQuestion}>
                <TextQuestion data-identifier="flashcard-text">
                    {props.answer}
                </TextQuestion>
                <Buttons>
                    <RedButtonAnswer onClick={() => displayFinishedCard(stateDisplayBackQuestion, stateDisplayFinishedQuestion, cardsDone, setCardsDone)}>
                        <FontButtonAnswer>Não lembrei</FontButtonAnswer>
                    </RedButtonAnswer>
                    <YellowButtonAnswer onClick={() => displayFinishedCard(stateDisplayBackQuestion, stateDisplayFinishedQuestion, cardsDone, setCardsDone)}>
                        <FontButtonAnswer>Quase não lembrei</FontButtonAnswer>
                    </YellowButtonAnswer>
                    <GreenButtonAnswer onClick={() => displayFinishedCard(stateDisplayBackQuestion, stateDisplayFinishedQuestion, cardsDone, setCardsDone )}>
                        <FontButtonAnswer>Zap!</FontButtonAnswer>
                    </GreenButtonAnswer>
                </Buttons>
            </BackQuestion>
            <FinishedQuestion stateDisplayFinishedQuestion={stateDisplayFinishedQuestion}>
                <TextQuestion data-identifier="flashcard-text">Pergunta {(index + 1)}</TextQuestion>
                <LogoClosedQuestion data-identifier="play-btn" src={logoPlay} />
            </FinishedQuestion>
        </div>
    )
}

function displayFrontCard(stateDisplayClosedQuestion, stateDisplayFrontQuestion) {
    const setDisplayClosedQuestion = stateDisplayClosedQuestion.setDisplayClosedQuestion;
    setDisplayClosedQuestion('none');
    const setDisplayFrontQuestion = stateDisplayFrontQuestion.setDisplayFrontQuestion;
    setDisplayFrontQuestion('flex');
}

function displayBackCard(stateDisplayFrontQuestion, stateDisplayBackQuestion) {
    const setDisplayFrontQuestion = stateDisplayFrontQuestion.setDisplayFrontQuestion;
    setDisplayFrontQuestion('none');
    const setDisplayBackQuestion = stateDisplayBackQuestion.setDisplayBackQuestion;
    setDisplayBackQuestion('flex');
}

function displayFinishedCard(stateDisplayBackQuestion, stateDisplayFinishedQuestion, cardsDone, setCardsDone) {
    const setDisplayBackQuestion = stateDisplayBackQuestion.setDisplayBackQuestion;
    setDisplayBackQuestion('none');
    const setDisplayFinishedQuestion = stateDisplayFinishedQuestion.setDisplayFinishedQuestion;
    setDisplayFinishedQuestion('flex');
    setCardsDone((cardsDone + 1));
}

const SmalldQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  
  align-items: center;
  justify-content: space-between;
`
const ClosedQuestion = styled(SmalldQuestion)`
    display: ${props => props.stateDisplayClosedQuestion.displayClosedQuestion};
`

const FinishedQuestion = styled(SmalldQuestion)`
    display: ${props => props.stateDisplayFinishedQuestion.displayFinishedQuestion};
`

const LogoClosedQuestion = styled.img`
    width: 20px;
    height: 23px;
    color: #333333;
`

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const FrontQuestion = styled(OpenQuestion)`
    display: ${props => props.stateDisplayFrontQuestion.displayFrontQuestion};
`

const BackQuestion = styled(OpenQuestion)`
    display: ${props => props.stateDisplayBackQuestion.displayBackQuestion};
`

const LogoTurnQuestion = styled.img`
    width: 20px;
    height: 23px;
    color: #333333;
    position: absolute;
    bottom: 15px;
    right: 15px;
`
const TextQuestion = styled.p`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`

const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const ButtonAnswer = styled.button`
    width: 86px;
    height: 38px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0px 10px;
`

const GreenButtonAnswer = styled(ButtonAnswer)`
    background-color: #2FBE34;
`

const YellowButtonAnswer = styled(ButtonAnswer)`
    background-color: #FF922E;
`

const RedButtonAnswer = styled(ButtonAnswer)`
    background-color: #FF3030;
`

const FontButtonAnswer = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`