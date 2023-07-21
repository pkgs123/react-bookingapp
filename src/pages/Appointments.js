import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CustomTableContainer,
  CustomTable,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableBody,
  ColorButton,
} from "../Library/Table/Table";
import { showLoading, hideLoading } from "../redux/slices/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";

import moment from "moment";
import { Grid, Avatar } from "@mui/material";
import variables from "../App.scss";
import { CustomLabel } from "../Library/Label/Label";
import { CustomButton } from "../Library/Button/Button";
import "../components/DoctorsTable.scss";
import { Link } from "react-router-dom";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get(
        `//atulvm.eastus.cloudapp.azure.com:8000/api/user/get-appointments-by-user-id`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        setAppointments(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const appointmentColumns = [
    {
      id: 1,
      colName: "Doctor",
    },
    { id: 2, colName: "Phone" },
    { id: 3, colName: "Date" },
    { id: 4, colName: "Time" },
    { id: 5, colName: "Status/Action" },
  ];

  useEffect(() => {
    getAppointmentsData();
  }, []);

  const cancelAppointment = (item, ind) => {
    console.log("Booking Appointment...", item, ind);
  };

  function checkPastDate(appointmentDate) {
    let dateToBeCompared = moment(appointmentDate).format("DD-MMM-YYYY");
    // For past dates
    const isPastDate = moment(dateToBeCompared, "DD-MMM-YYYY").isBefore(
      moment(new Date(), "DD-MMM-YYYY"),
      "day"
    );
    // For same dates
    const isSameDate = moment(dateToBeCompared, "DD-MMM-YYYY").isSame(
      moment(new Date(), "DD-MMM-YYYY"),
      "day"
    );
    // For future dates
    const isFutureDate = moment(dateToBeCompared, "DD-MMM-YYYY").isAfter(
      moment(new Date(), "DD-MMM-YYYY"),
      "day"
    );
    console.log(
      "isPastDate",
      isPastDate,
      "isSameDate",
      isSameDate,
      "isFutureDate",
      isFutureDate
    );

    if (isSameDate || isFutureDate) {
      return true;
    }
  }

  return (
    <div id="searchdoctorId">
      {/* <Loader isOpen={isLoading} /> */}
      <div>
        <h1 className="page-title">Appointments</h1>
      </div>
      <div style={{mt:"-2%"}}>
        <Link to="/">
          <CustomButton primary={false} sx={{ml:'90%'}}>
            Back
          </CustomButton>
        </Link>
      </div>

      <Grid container spacing={4} sx={{ padding: "7px" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CustomTableContainer $mxheight={400}>
            <CustomTable stickyHeader>
              <CustomTableHead $bgcolor={variables.color_header_bg}>
                <CustomTableRow>
                  {appointmentColumns.map((item) => (
                    <CustomTableCell
                      key={item.id}
                      $color={variables.color_header_bg}
                      className={`${
                        item.colName === "Doctor" ? "txt-left" : "txt-centre"
                      }`}
                    >
                      {item?.colName}
                    </CustomTableCell>
                  ))}
                </CustomTableRow>
              </CustomTableHead>
              {Object.keys(appointments).length > 0 &&
              appointments[0] !== null ? (
                <CustomTableBody>
                  {appointments?.map((item, ind) => (
                    <CustomTableRow key={item?._id}>
                      <CustomTableCell>
                        <Avatar
                          alt="profile-Image"
                          src={item?.doctorInfo?.imgUrl}
                          sx={{ float: "left" }}
                        />
                        Dr. {item?.doctorInfo?.firstName}{" "}
                        {item?.doctorInfo?.lastName}
                      </CustomTableCell>
                      <CustomTableCell
                        colSpan={1}
                        style={{ textAlign: "center" }}
                      >
                        {item?.doctorInfo?.phoneNumber}
                      </CustomTableCell>
                      <CustomTableCell style={{ textAlign: "center" }}>
                        {moment(item?.date).format("DD-MMM-YYYY")}
                      </CustomTableCell>
                      <CustomTableCell style={{ textAlign: "center" }}>
                        {(item?.time / 2).toString().includes(".5")
                          ? moment(
                              (item?.time / 2).toString().replace(".5", ":30"),
                              ["HH:mm"]
                            ).format("LT")
                          : moment((item?.time / 2).toString(), "hh").format(
                              "LT"
                            )}
                      </CustomTableCell>

                      <CustomTableCell style={{ textAlign: "center" }}>
                        {checkPastDate(item?.date) && (
                          <CustomButton onClick={cancelAppointment(item, ind)}>
                            Cancel Appointment
                          </CustomButton>
                        )}
                      </CustomTableCell>
                    </CustomTableRow>
                  ))}
                </CustomTableBody>
              ) : (
                <CustomTableBody>
                  <CustomTableRow>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell>
                      <CustomLabel label="No Data Found" />
                    </CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                  </CustomTableRow>
                </CustomTableBody>
              )}
            </CustomTable>
          </CustomTableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Appointments;
