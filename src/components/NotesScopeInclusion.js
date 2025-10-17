import React from "react";
import styled from "styled-components";
import { Card } from "./StyledComponents";
import { theme } from "./StyledComponents";

const SectionTitle = styled.h3`
  color: ${theme.purple};
  margin-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
`;

export default function NotesScopeInclusion() {
  return (
    <div className="section-gap">
      <SectionTitle>Important Notes</SectionTitle>
      <Grid>
        <Card>
          <h4 style={{ marginBottom: 8 }}>Important Notes</h4>
          <ul style={{ color: "#4B5563", paddingLeft: 18 }}>
            <li>Traveller must carry passport copy.</li>
            <li>Check-in/out times may vary.</li>
            <li>Local taxes not included.</li>
          </ul>
        </Card>

        <Card>
          <h4 style={{ marginBottom: 8 }}>Scope of Services</h4>
          <ul style={{ color: "#4B5563", paddingLeft: 18 }}>
            <li>Flights (economy)</li>
            <li>3-star hotels with breakfast</li>
            <li>Transfers and sightseeing</li>
          </ul>
        </Card>

        <Card>
          <h4 style={{ marginBottom: 8 }}>Inclusion Summary</h4>
          <ul style={{ color: "#4B5563", paddingLeft: 18 }}>
            <li>Meals as specified</li>
            <li>Local guide (where applicable)</li>
            <li>24/7 support</li>
          </ul>
        </Card>

        <Card>
          <h4 style={{ marginBottom: 8 }}>Other Info</h4>
          <div style={{ color: "#4B5563" }}>
            Visas, insurance and optional activities can be added.
          </div>
        </Card>
      </Grid>
    </div>
  );
}
