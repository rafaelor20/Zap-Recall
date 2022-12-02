import styled from 'styled-components';

export default function ContainerQuestion(){
    return (
        <Questions>
            <Question/>
        <Questions/>
    )
}

const Questions = styled.div`
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Question = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
`