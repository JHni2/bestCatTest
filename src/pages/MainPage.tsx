import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

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
          <img
            className="rounded-circle"
            src={mainCat}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI 기반 나랑 잘 맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 돼서 고양이를 키운다면..?</Desc>
        <Button
          className="btn-danger"
          onClick={handleClickButton}
          style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
        >
          테스트 시작하기
        </Button>
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
  margin-top: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const LogoImage = styled.div`
  width: 200;
  heigth: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
`;
