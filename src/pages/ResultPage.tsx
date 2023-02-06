import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ReusltData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import { IResult } from '../stores/Result/types';

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti'); // 예비 집사의 mbti
  const testResult = ReusltData.find((cat: IResult) => cat.best === mbti);
  const friendCat = ReusltData.find(
    (friend) => friend.best === testResult?.mbti,
  );

  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              className="rounded-circle"
              src={testResult?.image}
              width={350}
              height={350}
            />
          </ResultImage>
          <Desc>
            {testResult?.best}형 예비 집사님과 찰떡궁합인 고양이는 {mbti}형
            고양이 {testResult?.name}
            입니다.
          </Desc>
          <Desc>
            {testResult?.name} 고양이는 {testResult?.desc}
          </Desc>
          <BestDesc>
            나의 고양이와 잘 맞는 형제 묘는 {friendCat?.name}입니다.
          </BestDesc>
        </ContentsWrapper>
      </Wrapper>
    </>
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
  padding: 20px 60px 20px 60px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const ResultImage = styled.div`
  width: 200;
  heigth: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 15pt;
`;

const BestDesc = styled.div`
  font-size: 15pt;
  margin-top: 20px;
  color: #ffa07a;
`;
