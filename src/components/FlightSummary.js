import React from "react";
import styled from "styled-components";
import { Card } from "./StyledComponents";
import flightIcon from "../assets/material-symbols_flight.svg";
import { theme } from "./StyledComponents";

const SectionTitle = styled.h3`
  color: ${theme.purple};
  margin-bottom: 12px;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const FlightCard = styled(Card)`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export default function FlightSummary() {
  return (
    <div className="section-gap">
      <SectionTitle>Flight Summary</SectionTitle>
      <Table>
        <FlightCard>
          <img
            src={flightIcon}
            alt="flight"
            style={{ width: 38, height: 38 }}
          />
          <div>
            <div style={{ fontWeight: 700 }}>SG 123 • Delhi → Singapore</div>
            <div style={{ color: "#6B7280" }}>
              Depart: 10:00 • Arrive: 18:00
            </div>
          </div>
        </FlightCard>

        <FlightCard>
          <img
            src={flightIcon}
            alt="flight"
            style={{ width: 38, height: 38 }}
          />
          <div>
            <div style={{ fontWeight: 700 }}>SG 456 • Singapore → Delhi</div>
            <div style={{ color: "#6B7280" }}>
              Depart: 22:00 • Arrive: 02:00
            </div>
          </div>
        </FlightCard>
      </Table>
    </div>
  );
}
