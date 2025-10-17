import React from "react";
import styled from "styled-components";
import { Card } from "./StyledComponents";
import bannerImg from "../assets/Vector.svg";
import { theme } from "./StyledComponents";

const BannerWrap = styled(Card)`
  display: flex;
  gap: 20px;
  align-items: center;
  background: linear-gradient(
    90deg,
    ${theme.purple} 0%,
    ${theme.purpleLight} 100%
  );
  color: white;
  padding: 28px;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 700;
`;
const Sub = styled.div`
  font-size: 14px;
  opacity: 0.95;
`;

export default function HeroBanner() {
  return (
    <BannerWrap>
      <Left>
        <div style={{ fontSize: 14, opacity: 0.9 }}>
          Hi, <strong>Rahul</strong>
        </div>
        <Title>Singapore Itinerary</Title>
        <Sub>4 Days / 3 Nights • 5 Activities • Flight + Hotel</Sub>
      </Left>
      <Right>
        <img
          src={bannerImg}
          alt="banner"
          style={{
            maxWidth: "100%",
            height: 120,
            objectFit: "contain",
            opacity: 0.95,
          }}
        />
      </Right>
    </BannerWrap>
  );
}
