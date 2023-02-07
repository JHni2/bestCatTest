import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
  type: string;
  questionNo: number;
}

export default function Header(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNo / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '40px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper style={{ backgroundColor: '#ffa07a' }}>
          🐾 예비 집사 판별기 🐾
        </TitleWrapper>
      )}
    </>
  );
}

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40pt;
  padding: 20px 20px 20px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffa07a;
  font-size: 40pt;
`;
