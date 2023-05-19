import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';

import mainCat from '../assets/cat/mainCat.jpg';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <Wrapper>
      <Header type="title" questionNo={0} />
      <ContentsWrapper>
        <Title>나에게 맞는 주인님은?!</Title>
        <LogoImage>
          <Image
            className="rounded-circle"
            src={mainCat}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI 기반! 나랑 잘 맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 돼서 고양이를 키운다면..?</Desc>
        <Button
          className="btn-danger"
          onClick={handleClickButton}
          style={{
            fontSize: 25,
            marginTop: 40,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          테스트 시작하기
        </Button>
      </ContentsWrapper>
      <div className="adfit" />
    </Wrapper>
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
  height: calc(100vh - 218px);
  margin-top: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20pt;
`;

const LogoImage = styled.div`
  width: 350px;
  heigth: 350px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Desc = styled.div`
  font-size: 15pt;
`;
