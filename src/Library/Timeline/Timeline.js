import React, { useState } from "react";
import "./Timeline.scss"
import { Collapse } from "@mui/material";

export const CustomTimeline = ({timelineData, isHistoricTimeline}) => {
  const years = Object.keys(timelineData).reverse();

  return (
    <div id="timeline">
      {years.map((year, i) => (
        <CollapsibleYears
          year={year}
          isHistoricTimeline={isHistoricTimeline}
          timelineData={timelineData}
          key={year}
          isFirst={i === 0}
        />
      ))}
    </div>
  );
};

const CollapsibleYears = ({ year, timelineData, isFirst,isHistoricTimeline }) => {
  const [isOpen, setIsOpen] = useState(isFirst);

  const returnMonth = (year) => {
    const yearData = timelineData[year];
    const months = Object.keys(yearData);

    return months.map((month) => (
      <>
        <div className="month" key={year + month}>
          {month}
        </div>
       
        {yearData[month].map((timelineData) => (
          
          <div key={year + month} className="data">

            {isHistoricTimeline ? (
              <div>{historicMonthData(timelineData)}</div>
            ):  <div>{genericMonthData(timelineData)}</div>}

           
          </div>
        ))}
       
      </>
    ));
  };


  const historicMonthData = (timelineData) => {
    const {pid, address, caseId, proposed, date, status} = timelineData;
    return (
      <>
        <div className="mothn-data-container">
          <div>PID: {pid}</div>
          <div className="caseId-container">
            <div>{address}</div>
            <div className="case-id">{caseId}</div>
          </div>
          <div className="proposed">{proposed}</div>
          <div className="date-container"><div>{date}</div>
            <div>{status}</div></div>
        
          
        </div>
      </>
    )

  }

  const genericMonthData = (timelineData) => {
    const {label, date} = timelineData;
    return (
      <>
        <div>{label}</div>
        <div>{date}</div>
      </>
    )

  }


  return (
    <>
      <div
        className={`year ${isOpen ? "active" : ""}`}
        key={year}
        data-testid="yearTestId"
        onClick={() => setIsOpen(!isOpen)}
      >
        {year}
      </div>
      <Collapse in={isOpen}>{returnMonth(year)}</Collapse>
    </>
  );
};

