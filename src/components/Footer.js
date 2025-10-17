import React from "react";
import styled from "styled-components";
import logo from "../assets/vigovia.png";
import { theme } from "./StyledComponents";

const Foot = styled.footer`
  background: linear-gradient(
    90deg,
    ${theme.purple} 0%,
    ${theme.purpleLight} 100%
  );
  color: white;
  padding: 28px 0;
  margin-top: 28px;
`;

const Inner = styled.div`
  width: 900px;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <Foot>
      <Inner>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>Plan. Pack. Go.</div>
          <div style={{ opacity: 0.9 }}>Vigovia - Travel made easy</div>
        </div>
        <img src={logo} alt="logo" style={{ height: 44 }} />
      </Inner>
    </Foot>
  );
}
