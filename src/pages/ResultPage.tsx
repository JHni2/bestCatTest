import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ReusltData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import { IResult } from '../stores/Result/types';
import KakaoShareButton from '../components/KakaoShareButton';

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti'); // 예비 집사의 mbti
  const testResult: IResult = ReusltData.find(
    (cat: IResult) => cat.best === mbti,
  ) ?? {
    id: 0,
    name: '',
    best: '',
    mbti: '',
    desc: '',
    image: '',
  };
  const friendCat = ReusltData.find(
    (friend) => friend.best === testResult?.mbti,
  );
  const navigate = useNavigate();

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
          <div style={{ marginBottom: 20, display: 'flex' }}>
            <Button
              onClick={() => navigate('/')}
              className="btn-danger"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 25,
                marginTop: 30,
                marginRight: 20,
                marginBottom: 50,
              }}
            >
              테스트 다시하기
            </Button>
            <KakaoShareButton data={testResult} />
          </div>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 203px);
  margin-top: 20px;
  padding: 20px 60px 20px 60px;
  word-break: keep-all;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20pt;
`;

const ResultImage = styled.div`
  width: 350px;
  heigth: 350px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Desc = styled.div`
  font-size: 15pt;
`;

const BestDesc = styled.div`
  font-size: 15pt;
  margin-top: 20px;
  color: #ffa07a;
`;
