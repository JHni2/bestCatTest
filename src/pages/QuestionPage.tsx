import React from 'react';
import styled from 'styled-components';

import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';
import { Button } from 'react-bootstrap';

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0);

  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{ marginRight: '20px' }}
            onClick={handleClickAnswer}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button className="btn-warning">
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
