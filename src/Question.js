import styled from 'styled-components';
import logoPlay from './assets/img/seta_play.png' 
import logoTurn from './assets/img/seta_virar.png' 


export default function Question(props, index) {
    return (
        <>
            <ClosedQuestion>
                <TextQuestion>Pergunta {(index+1)}</TextQuestion>
                <LogoClosedQuestion src={logoPlay}/>
            </ClosedQuestion>
            <FrontQuestion>
                <TextQuestion>
                    {props.question}
                    <LogoTurnQuestion src={logoTurn}/>
                </TextQuestion>
            </FrontQuestion>
            <BackQuestion>
                <TextQuestion>
                    {props.answer}
                </TextQuestion>
                <Buttons>            
                    <RedButtonAnswer>
                        <FontButtonAnswer>Não lembrei</FontButtonAnswer>
                    </RedButtonAnswer>
                    <YellowButtonAnswer>
                        <FontButtonAnswer>Quase não lembrei</FontButtonAnswer>
                    </YellowButtonAnswer>
                    <GreenButtonAnswer>
                        <FontButtonAnswer>Zap!</FontButtonAnswer>
                    </GreenButtonAnswer>
                </Buttons>

            </BackQuestion>
        </>
    )
}

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    diplay: flex;
`

const BackQuestion = styled(OpenQuestion)`
    display: flex;
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