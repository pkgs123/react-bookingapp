import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/slices/alertsSlice";
import { getDoctorsAppointmentDetailsFetch } from "../redux/slices/doctorsAppointmentSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import moment from "moment";
import { CustomButton } from "../Library/Button/Button";
import CustomDatepicker from "../Library/Datepicker/Datepicker";

import BookAppointmentPage from "./BookAppointmentPage";
import { Grid } from "@mui/material";
import { convertDecimalToInteger } from "../CommonLogic";
import { CustomDialog } from "../Library/Modal/Modal";

function BookAppointment() {
  const [open,setOpen] = useState(false);
  const [displayMsg,setDisplayMsg] = useState({});
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);

  const [getTodaysSlotInfo, setTodaysSlotInfo] = useState();
  const [getTomorrowsSlotInfo, setTomorrowsSlotInfo] = useState();
  const [getDayAfterTomorrowsSlotInfo, setDayAfterTomorrowsSlotInfo] =
    useState();

  const params = useParams();
  const dispatch = useDispatch();
  const { appointmentDetails, isLoading } = useSelector(
    (state) => state.doctorsAppointmentDetails
  );
 function checkTime(time){
      if(time === 0){
        return 24;
      }
      else{
        return time;
      }
 }
  const getAppointmentSlotFilter = (response) => {
    const dataArray = Object.keys(response.data).map((key) => {
      return {
        date: key,
        appointments: Object.keys(response.data[key]).map((subKey) => {
          return {
            timeSlot: subKey,
            details: response.data[key][subKey],
          };
        }),
      };
    });
    console.log("array", dataArray);
    let todaysAppointmentDetails;
    let tomorrowsAppointmentDetails;
    let dayAfterTomorrowsDetails;

    todaysAppointmentDetails = dataArray.filter((d) => {
      return d.date == moment(new Date()).format("YYYY-MM-DD");
    });

    tomorrowsAppointmentDetails = dataArray.filter((d) => {
      return d.date == moment(date).add(1, "days").format("YYYY-MM-DD");
    });

    dayAfterTomorrowsDetails = dataArray.filter((d) => {
      return d.date == moment(date).add(2, "days").format("YYYY-MM-DD");
    });
    setTodaysSlotInfo(todaysAppointmentDetails);
    setTomorrowsSlotInfo(tomorrowsAppointmentDetails);
    setDayAfterTomorrowsSlotInfo(dayAfterTomorrowsDetails);

    console.log(
      "todays--resp",
      todaysAppointmentDetails,
      "tomorrows--resp",
      tomorrowsAppointmentDetails,
      "day-afer-tomor",
      dayAfterTomorrowsDetails
    );
  };
  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
        dispatch(
          getDoctorsAppointmentDetailsFetch({
            doctorId: response.data.data._id,
            getAppointmentSlotFilter,
          })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  const checkAvailability = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/check-booking-avilability",
        {
          doctorId: params.doctorId,
          date: moment(date).format('DD-MM-YYYY'),
          time: time ? convertDecimalToInteger(time.replace(":", ".") * 2) :""
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
          date: moment(date).format('DD-MM-YYYY'),
          time: checkTime(time) ? convertDecimalToInteger(time.replace(":", ".") * 2) :""
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDisplayMsg(response.data);
        setOpen(true);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);


  function handleCloseDialog(){
    setOpen(false);
    navigate("/appointments");
  }
  return (
    <>
      <CustomDialog
        isOpen={open}
        title={displayMsg?.success ? displayMsg?.message : "Appointment Confirmation"}
        handleConfirmation={() => {
          console.log("ok...");
        }}
        handleClose={handleCloseDialog}
        subtitle={displayMsg?.success? displayMsg?.emailMsg : ""}
        isConfirmationModal={true}
        confirmationLabel="Confirm"
      />

      {doctor && (
        <div>
          <h1 className="page-title">
            {doctor.firstName} {doctor.lastName} - {doctor.specialization}
            </h1>
            <Link to="/searchdoctor">
              <CustomButton primary={false} sx={{ ml: "75rem" }}>
                Back
              </CustomButton>
            </Link>
          
          <hr />
          <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img src={doctor.imgUrl} alt="" width="35%" />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <BookAppointmentPage
                getTodaysSlotInfo={getTodaysSlotInfo}
                getTomorrowsSlotInfo={getTomorrowsSlotInfo}
                getDayAfterTomorrowsSlotInfo={getDayAfterTomorrowsSlotInfo}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ ml: "33%" }}>
              <CustomDatepicker
                getDate={(val) => {
                  setDate(val)
                    // moment(val).format("DD-MM-YYYY"));
                }}
                value={date}
                placeholder="Select Date(DD-MM-YYYY)"
                minDate={new Date()}
                maxDate={
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() + 3,
                    0
                  )
                }
              />
            </Grid>
            <Grid sx={{ mt: "2.7%" }}>
              <TimePicker
                format="HH:mm"
                className="mt-3"
                hourStep={1}
                minuteStep={30}
                onChange={(value) => {
                  setIsAvailable(false);
                  setTime(moment(value).format("HH:mm"));
                }}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sm={6}
                lg={6}
                xl={6}
                sx={{ ml: "35%", mt: "3%" }}
              >
                <CustomButton size="small" onClick={checkAvailability}>
                  {" "}
                  Check Availability{" "}
                </CustomButton>
                <CustomButton
                  size="small"
                  sx={{ ml: "2%" }}
                  disabled={!isAvailable ?? true}
                  onClick={bookNow}
                >
                  {" "}
                  Book Appointment{" "}
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default BookAppointment;
