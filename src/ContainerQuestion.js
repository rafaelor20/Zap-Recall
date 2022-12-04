import styled from 'styled-components';
import Question from './Question';


export default function ContainerQuestion(props){
    return (
        <Questions>
            {props.deck.map(Question)}
        </Questions>
    )
}

const Questions = styled.div`
    width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

