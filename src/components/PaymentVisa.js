import React from "react";
import styled from "styled-components";
import { Card } from "./StyledComponents";
import { theme } from "./StyledComponents";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Title = styled.h3`
  color: ${theme.purple};
  margin-bottom: 12px;
`;

export default function PaymentVisa() {
  return (
    <div className="section-gap">
      <Title>Payment Plan & Visa Details</Title>
      <Grid>
        <Card>
          <h4>Payment Plan</h4>
          <ul style={{ color: "#4B5563", paddingLeft: 18 }}>
            <li>Advance: 30%</li>
            <li>Before departure: 70%</li>
          </ul>
        </Card>

        <Card>
          <h4>Visa Details</h4>
          <div style={{ color: "#4B5563" }}>
            Visa requirements vary by nationality. Please check and apply at
            least two weeks prior.
          </div>
        </Card>
      </Grid>
    </div>
  );
}
