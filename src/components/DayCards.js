import React from "react";
import styled from "styled-components";
import { Card, DayPill } from "./StyledComponents";

// ✅ Import all 6 images exactly as renamed
import frame0 from "../assets/frame206-0.png";
import frame1 from "../assets/frame206-1.png";
import frame2 from "../assets/frame206-2.png";
import frame3 from "../assets/frame206-3.png";
import frame4 from "../assets/frame206-4.png";
import frame5 from "../assets/frame206-5.png";

// Styled containers
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;
`;

const DayRow = styled(Card)`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background-color: #fff;
`;

const ImgWrap = styled.div`
  width: 220px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f3f4f6; /* light gray bg for visibility */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* show full image */
    display: block;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const days = [
  {
    title: "Day 1 • Arrival",
    date: "Mon, 4 Aug",
    img: frame0,
    desc: "Arrival, transfer and evening city walk.",
  },
  {
    title: "Day 2 • City Tour",
    date: "Tue, 5 Aug",
    img: frame1,
    desc: "Full day sightseeing and local cuisine.",
  },
  {
    title: "Day 3 • Activities",
    date: "Wed, 6 Aug",
    img: frame2,
    desc: "Island trip and adventure sports.",
  },
  {
    title: "Day 4 • Departure",
    date: "Thu, 7 Aug",
    img: frame3,
    desc: "Checkout and airport transfer.",
  },
  {
    title: "Optional • Shopping",
    date: "Flexible",
    img: frame4,
    desc: "Evening shopping and leisure.",
  },
  {
    title: "Optional • Relax",
    date: "Flexible",
    img: frame5,
    desc: "Spa and relax day.",
  },
];

console.log("Frame0 import:", frame0);
console.log("All days array:", days);

export default function DayCards() {
  return (
    <div className="section-gap">
      <Grid>
        {days.map((d, i) => (
          <DayRow key={i}>
            <DayPill>{i + 1}</DayPill>
            <ImgWrap>
              {/* ✅ Display correct image */}
              <img src={d.img} alt={d.title} />
            </ImgWrap>
            <Info>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{d.title}</div>
                  <div style={{ color: "#6B7280", fontSize: 13 }}>{d.date}</div>
                </div>
                <div style={{ color: "#9CA3AF" }}>•••</div>
              </div>
              <div style={{ marginTop: 10, color: "#374151" }}>{d.desc}</div>
            </Info>
          </DayRow>
        ))}
      </Grid>
    </div>
  );
}
