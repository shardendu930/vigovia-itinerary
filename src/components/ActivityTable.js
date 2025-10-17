import React from "react";
import styled from "styled-components";
import { Card } from "./StyledComponents";
import { theme } from "./StyledComponents";

const SectionTitle = styled.h3`
  color: ${theme.purple};
  margin-bottom: 12px;
`;

const TableWrap = styled(Card)`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: ${theme.purple};
  color: white;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
  color: #374151;
`;

export default function ActivityTable() {
  return (
    <div className="section-gap">
      <SectionTitle>Activity Table</SectionTitle>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <Th>Activity</Th>
              <Th>Day</Th>
              <Th>Time</Th>
              <Th>Notes</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>City Tour</Td>
              <Td>Day 2</Td>
              <Td>09:00</Td>
              <Td>Pickup from hotel</Td>
            </tr>
            <tr>
              <Td>Island Trip</Td>
              <Td>Day 3</Td>
              <Td>07:00</Td>
              <Td>Includes lunch</Td>
            </tr>
            <tr>
              <Td>Spa</Td>
              <Td>Optional</Td>
              <Td>Flexible</Td>
              <Td>Advance booking required</Td>
            </tr>
          </tbody>
        </Table>
      </TableWrap>
    </div>
  );
}
