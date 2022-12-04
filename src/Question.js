import styled from 'styled-components';


export default function Question(props) {
    return (
        <>
            <ClosedQuestion>
                <TextQuestion>Pergunta 1</TextQuestion>
            </ClosedQuestion>
            <OpenQuestion>
                <TextQuestion>
                    {props.question}
                </TextQuestion>
            </OpenQuestion>
            <OpenQuestion>
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

            </OpenQuestion>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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