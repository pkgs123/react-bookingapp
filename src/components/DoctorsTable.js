import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Grid } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";

import {
  CustomTableContainer,
  CustomTable,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableBody,
  ColorButton,
} from "../Library/Table/Table";
import variables from "../App.scss";

import "./DoctorsTable.scss";

import { Loader } from "../Library/Loader/Loader";
import ControlledCheckbox from "../Library/Checkbox/Checkbox";
import { Tag } from "../Library/Tag/Tag";
import { CustomLabel } from "../Library/Label/Label";
import { CustomButton } from "../Library/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const DoctorsTable = (props) => {
  const { showCheckbox, showDelete, disableCheckbox } =
    props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {selectedDoctor} = useSelector(state=>state.searchDoctorsListDetails)
  const {doctId,setDoctId} = useState(null);
  const doctorsTableColumns = [
    {
      id: 1,
      colName: "Name",
    },
    { id: 2, colName: "Specialization" },
    { id: 3, colName: "Experience"},
    { id: 4, colName: "City" },
    { id: 5, colName: "Cunsultation Fees" },
    { id: 6, colName: "Contact Details"},
    { id: 7, colName: ""},

  ]
 
const handleAppointment = (item,ind)=>{
console.log("Booking Appointment...",item,ind);
}

  return (
    <div id="searchdoctorId">
      {/* <Loader isOpen={isLoading} /> */}

        <Grid container spacing={4} sx={{padding:"4px"}}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <CustomTableContainer $mxheight={400}>
              <CustomTable stickyHeader>
                <CustomTableHead
                  $bgcolor={variables.color_header_bg}
                >
                  <CustomTableRow>
                    {doctorsTableColumns.map((item) => (
                      <CustomTableCell
                        key={item.id}
                        $color={variables.color_header_bg}
                      >
                        {item?.colName}
                      </CustomTableCell>
                    ))}
                  </CustomTableRow>
                </CustomTableHead>
             {(Object.keys(selectedDoctor).length > 0 && selectedDoctor[0]!==null)  ?<CustomTableBody>
                  {selectedDoctor?.map((item,ind) => (
                    <CustomTableRow key={item?._id}>
                      <CustomTableCell>
                      <Avatar  alt="profile-Image" src={item?.imgUrl} sx={{float:"left"}}/>
                       Dr. {item?.firstName} {item?.lastName}
                      </CustomTableCell>
                      <CustomTableCell colSpan={1}>
                        {item?.specialization}
                      </CustomTableCell>
                      <CustomTableCell>
                        {item?.experience}
                      </CustomTableCell>
                      <CustomTableCell>
                        {item?.city}
                      </CustomTableCell>
                      <CustomTableCell>
                      ₹ {item?.feePerCunsultation}
                      </CustomTableCell>
                      <CustomTableCell>
                        {
                          item.phoneNumber
                        }
                        
                      </CustomTableCell>
                       <CustomTableCell>
                        <Link to={`/book-appointment/${item._id}`}>
                        <CustomButton onClick={handleAppointment(item,ind)}>Book Appointment</CustomButton>
                        </Link>
                       
                      </CustomTableCell> 
                    </CustomTableRow>
                  ))}
                </CustomTableBody>
                :
                <CustomTableBody>
                  <CustomTableRow>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell><CustomLabel label="No Data Found"/></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    <CustomTableCell></CustomTableCell>
                    
                  </CustomTableRow>
                </CustomTableBody>
                    }
              </CustomTable>
            </CustomTableContainer>
          </Grid>
        </Grid>
     
  
    </div>
  );
};
export default DoctorsTable;

DoctorsTable.propTypes = {
  bg_color: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleClearSearchText: PropTypes.func,
  onCheckedChange: PropTypes.func,
  showCheckbox: PropTypes.bool,
  showDelete: PropTypes.bool,
  disableCheckbox: PropTypes.bool,
};

DoctorsTable.defaultProps = {
  showCheckbox: false,
  showDelete: false,
  disableCheckbox: true,
};
