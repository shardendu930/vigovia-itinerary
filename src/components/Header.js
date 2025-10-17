import React from "react";
import styled from "styled-components";
import logo from "../assets/vigovia.png";
import { theme } from "./StyledComponents";

const HeaderBar = styled.header`
  background: #fff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.04);
  padding: 12px 0;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const HeaderInner = styled.div`
  width: 900px;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 44px;
`;

export default function Header() {
  return (
    <HeaderBar>
      <HeaderInner>
        <Logo src={logo} alt="Vigovia" />
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <a href="#itinerary" style={{ color: theme.purple, fontWeight: 600 }}>
            Itinerary
          </a>
          <a href="#contact" style={{ color: "#374151" }}>
            Contact
          </a>
        </div>
      </HeaderInner>
    </HeaderBar>
  );
}
