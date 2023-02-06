import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';

export default function QuestionPage(): React.ReactElement {
  const navigate = useNavigate();

  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {
      id: 'EI',
      score: 0,
    },
    {
      id: 'SN',
      score: 0,
    },
    {
      id: 'TF',
      score: 0,
    },
    {
      id: 'JP',
      score: 0,
    },
  ]);

  const handleClickAnswer = (ans: number, type: string) => {
    setQuestionNo(questionNo + 1);

    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + ans } : s,
    );

    setTotalScore(newScore);

    // 마지막 문제가 아닐 경우
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    }
    // 마지막 문제일 경우
    else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        '',
      );

      console.log({ mbti });

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '14pt',
            }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            className="btn-warning"
            style={{
              width: '45%',
              minHeight: '200px',
              fontSize: '14pt',
            }}
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
          >
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
