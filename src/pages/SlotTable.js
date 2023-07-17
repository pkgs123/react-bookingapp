import React, { useState } from "react";
import {
  CustomTableContainer,
  CustomTable,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableBody,
} from "../Library/Table/Table";
import variables from "../App.scss";

import "../components/DoctorsTable.scss";
import { Grid } from "@mui/material";
import { CustomButton } from "../Library/Button/Button";
import { useSelector } from "react-redux";
import moment from "moment";
const SlotTable = (props) => {
  const {
    selectedBtn,
    getTodaysSlotInfo,
    getTomorrowsSlotInfo,
    getDayAfterTomorrowsSlotInfo,
  } = props;
  console.log(
    "selectedBtn",
    selectedBtn,
    "getTodaysSlotInfo",
    getTodaysSlotInfo,
    "getTomorrowsSlotInfo",
    getTomorrowsSlotInfo,
    "getDayAfterTomorrowsSlotInfo",
    getDayAfterTomorrowsSlotInfo
  );
  const tableColumns = [
    {
      id: 1,
      colName: "Morning",
    },
    { id: 2, colName: "AfterNoon" },
    { id: 3, colName: "Evening" },
  ];

const selectedDoctor = useSelector(state=>state.searchDoctorsListDetails?.selectedDoctor)

const morningSlotTiming = selectedDoctor[0]?.morningSlot
const afterNoonSlotTiming = selectedDoctor[0]?.afterNoonSlot
const eveningSlotTiming =  selectedDoctor[0]?.eveningSlot

const checkSlot = (slot,slotType)=>{
  let mrngFlag; let afternoonFlag; let eveningFlag;

  const uniqueTimes = slot?.details?.map(
    (appointment) => appointment.time
  );
  // Filter the Slot wise array to keep only the values that are not present in uniqueTimes
  if(slotType === "Mrng"){
    mrngFlag=true;
    const filteredMorningSlot = morningSlotTiming?.filter(
      (slot) => !uniqueTimes.includes(String(slot))
    );
    console.log(filteredMorningSlot);
    return filteredMorningSlot?.map((detail) => (
        <li key={detail}>{(detail / 2).toString().includes(".5")
        ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
        : moment((detail/ 2).toString(),'hh').format('LT')}</li>
      ))
  }
  else if(slotType === "After"){
    afternoonFlag=true;
      const filteredAfterNoonSlot = afterNoonSlotTiming?.filter(
    (slot) => !uniqueTimes.includes(String(slot))
  );
  console.log(filteredAfterNoonSlot);
  return filteredAfterNoonSlot?.map((detail) => (
      <li key={detail}>{(detail / 2).toString().includes(".5")
      ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
      : moment((detail/ 2).toString(),'hh').format('LT')
      }</li>
    ))
  }
  else{
    eveningFlag = true
    const filteredEveningSlot = eveningSlotTiming?.filter(
      (slot) => !uniqueTimes.includes(String(slot))
    );
    console.log(filteredEveningSlot);
    return filteredEveningSlot?.map((detail) => (
        <li key={detail}>{(detail / 2).toString().includes(".5")
        ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
        : moment((detail/ 2).toString(),'hh').format('LT')
        }</li>
      ))
  }
}
const bindAllSlot = (slotTime) =>{
if(slotTime === "Mrng"){
return morningSlotTiming?.map(detail=>(
  <li key={detail}>{(detail / 2).toString().includes(".5")
  ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
  : moment((detail/ 2).toString(),'hh').format('LT')
  }</li>
))
}
else if(slotTime === "After"){
  return afterNoonSlotTiming?.map(detail=>(
    <li key={detail}>{(detail / 2).toString().includes(".5")
    ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
    : moment((detail/ 2).toString(),'hh').format('LT')
    }</li>
  ))
}


else{
  return eveningSlotTiming?.map(detail=>(
    <li key={detail}>{(detail / 2).toString().includes(".5")
    ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
    : moment((detail/ 2).toString(),'hh').format('LT')
    }</li>
  ))
}
}
const bindAllTimeSlot = (slotTime) =>{
 return  <CustomTableRow>
  <CustomTableCell>
    {
    morningSlotTiming?.map(detail=>(
  <li key={detail}>{(detail / 2).toString().includes(".5")
  ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
  : moment((detail/ 2).toString(),'hh').format('LT')
  }</li>
))
    }
  </CustomTableCell>
  <CustomTableCell>
    {afterNoonSlotTiming?.map(detail=>(
    <li key={detail}>{(detail / 2).toString().includes(".5")
    ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
    : moment((detail/ 2).toString(),'hh').format('LT')
    }</li>
  ))
    }
  </CustomTableCell>
  <CustomTableCell>
    {eveningSlotTiming?.map(detail=>(
    <li key={detail}>{(detail / 2).toString().includes(".5")
    ? moment((detail / 2).toString().replace(".5", ":30"),["HH:mm"]).format('LT')
    : moment((detail/ 2).toString(),'hh').format('LT')
    }</li>
  ))
    }
  </CustomTableCell>
</CustomTableRow>
}

let ele;
if(selectedBtn === "first"){
   ele= getTodaysSlotInfo?.length > 0 ? getTodaysSlotInfo?.map((appointment, ind) => (
    <CustomTableRow key={appointment.date}>
      <CustomTableCell>
        {
        appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng")?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
                checkSlot(slot,"Mrng")
              }
            </ul>
          ))
          :
          bindAllSlot("Mrng")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments 
          .filter((slot) => slot.timeSlot === "After").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "After")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
              checkSlot(slot,"After") 
              }
            </ul>
          ))
          :
          bindAllSlot("After")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
              checkSlot(slot,"Eve")
              }
            </ul>
          ))
          :
          bindAllSlot("Eve")
        }
      </CustomTableCell>
    </CustomTableRow>
  ))
  :
  ele = bindAllTimeSlot("All")
}
else if(selectedBtn === "second"){
  ele = getTomorrowsSlotInfo?.length > 0 ? getTomorrowsSlotInfo?.map((appointment, ind) => (
    <CustomTableRow key={appointment.date}>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
               checkSlot(slot,"Mrng") 
              }
            </ul>
          ))
          :
          bindAllSlot("Mrng")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "After").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "After")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
              checkSlot(slot,"After")
              }
            </ul>
          ))
          :
          bindAllSlot("After")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
                 checkSlot(slot,"Eve")
              }
            </ul>
          ))
          :
          bindAllSlot("Eve")
        }
      </CustomTableCell>
    </CustomTableRow>
  ))
  :
 ele = bindAllTimeSlot("All")
}
else{
  ele= getDayAfterTomorrowsSlotInfo?.length > 0 ? getDayAfterTomorrowsSlotInfo?.map((appointment, ind) => (
    <CustomTableRow key={appointment.date}>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Mrng")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
               checkSlot(slot,"Mrng")
              }
            </ul>
          ))
          :
          bindAllSlot("Mrng")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "After").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "After")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
                checkSlot(slot,"After")              
              }
            </ul>
          ))
          :
          bindAllSlot("After")
        }
      </CustomTableCell>
      <CustomTableCell>
        {appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve").length !==0 ? 
          appointment?.appointments
          .filter((slot) => slot.timeSlot === "Eve")
          ?.map((slot) => (
            <ul key={slot.timeSlot}>
              {
               checkSlot(slot,"Eve")
              }
            </ul>
          ))
          :
          bindAllSlot("Eve")
        }
      </CustomTableCell>
    </CustomTableRow>
  ))
  :
 ele = bindAllTimeSlot("All")
}

  return (
    <div id="slottabelId" style={{ width: "436px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CustomTableContainer $mxheight={400}>
            <CustomTable stickyHeader>
              <CustomTableHead $bgcolor={variables.color_header_bg}>
                <CustomTableRow>
                  {tableColumns.map((item) => (
                    <CustomTableCell
                      key={item.id}
                      $color={variables.color_header_bg}
                    >
                      {item?.colName}
                    </CustomTableCell>
                  ))}
                </CustomTableRow>
              </CustomTableHead>
              <CustomTableBody>
                {
                  ele
                }
              </CustomTableBody>
            </CustomTable>
          </CustomTableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
export default SlotTable;
