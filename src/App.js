import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";

// Import your components
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import DayCards from "./components/DayCards";
import FlightSummary from "./components/FlightSummary";
import NotesScopeInclusion from "./components/NotesScopeInclusion";
import ActivityTable from "./components/ActivityTable";
import PaymentVisa from "./components/PaymentVisa";
import Footer from "./components/Footer";

const Button = styled.button`
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  margin: 30px auto;
  display: block;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;

const App = () => {
  const downloadPDF = () => {
    const element = document.getElementById("itinerary-page");
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Vigovia_Itinerary.pdf");
    });
  };

  return (
    <div>
      <div id="itinerary-page">
        <Header />
        <HeroBanner />
        <DayCards />
        <FlightSummary />
        <NotesScopeInclusion />
        <ActivityTable />
        <PaymentVisa />
        <Footer />
      </div>

      <Button onClick={downloadPDF}>Get Itinerary</Button>
    </div>
  );
};

export default App;
