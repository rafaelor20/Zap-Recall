import styled from 'styled-components';
import Question from './Question';

export default function ContainerQuestion(){
    return (
        <Questions>
            <Question/>
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

