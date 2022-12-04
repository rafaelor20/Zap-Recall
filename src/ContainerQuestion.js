import styled from 'styled-components';
import Question from './Question';
import deck from "./cards.js"

export default function ContainerQuestion(){
    return (
        <Questions>
            {deck.map(Question)}
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
function cards(deck){
    return(<>deck.map(Question)</>)
}
