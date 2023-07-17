import React, { useEffect, useState } from "react";
import { CustomButton } from "../Library/Button/Button";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import SlotTable from "./SlotTable";

const BGCOLOR = "grey";
const COLOR = "white";
const date = new Date();

function BookAppointmentPage(props) {

  const {getTodaysSlotInfo,getTomorrowsSlotInfo,getDayAfterTomorrowsSlotInfo} = props;

  const [color, setColor] = useState("first");
  const [selectedBtn,setSelectedBtn] = useState();

  const handleDate = (btnName) => {
    setSelectedBtn(btnName)
    if (btnName === "first") {
      setColor("first");
    } else if (btnName === "second") {
      setColor("second");
    } else {
      setColor("third");
    }
  };

  return (
    <>
      {/* <h1>Book Appointment Page <CustomButton onClick={handleBack}>Back</CustomButton></h1> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="small" aria-label="small button group">
          <Button
            key="today"
            sx={{
              bgcolor: color === "first" ? BGCOLOR : "",
              color: color === "first" ? COLOR : "",
            }}
            onClick={() => handleDate("first")}
          >
            {moment(date).format("ddd, DD-MMM-yyyy")}
          </Button>
          ,
          <Button
            key="today+1"
            sx={{
              bgcolor: color === "second" ? BGCOLOR : "",
              color: color === "second" ? COLOR : "",
            }}
            onClick={() => handleDate("second")}
          >
            {moment(date).add(1, "days").format("ddd, DD-MMM-yyyy")}
          </Button>
          ,
          <Button
            key="today+2"
            sx={{
              bgcolor: color === "third" ? BGCOLOR : "",
              color: color === "third" ? COLOR : "",
            }}
            onClick={() => handleDate("third")}
          >
            {moment(date).add(2, "days").format("ddd, DD-MMM-yyyy")}
          </Button>
          ,
        </ButtonGroup>
        <SlotTable
          selectedBtn={color}
          getTodaysSlotInfo={getTodaysSlotInfo}
          getTomorrowsSlotInfo={getTomorrowsSlotInfo}
          getDayAfterTomorrowsSlotInfo={getDayAfterTomorrowsSlotInfo}
        />
      </Box>
    </>
  );
}
export default BookAppointmentPage;
