// src/components/StyledComponents.js
import styled from "styled-components";

export const theme = {
  primary: "#6A11CB",
  secondary: "#2575FC",
  lightPurple: "#F5F0FF",
  textDark: "#2D2D2D",
  textLight: "#666666",
  white: "#FFFFFF",
  shadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

export const Card = styled.div`
  background: ${theme.white};
  border-radius: 16px;
  box-shadow: ${theme.shadow};
  padding: 24px;
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.primary};
  margin-bottom: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${theme.lightPurple};
  border-radius: 12px;
  overflow: hidden;
  text-align: left;

  th,
  td {
    padding: 12px 16px;
  }

  th {
    background: ${theme.primary};
    color: white;
    font-weight: 500;
  }

  tr:nth-child(even) {
    background: #f9f9ff;
  }
`;

export const DayPill = styled.div`
  display: inline-block;
  background: linear-gradient(90deg, ${theme.primary}, ${theme.secondary});
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 18px;
  border-radius: 50px;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: ${theme.shadow};
`;
