import React from "react";
import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";

import "./Table.scss";

import FilterIcon from "../Assets/FilterIcon.js";
import ViewColumnIcon from "../Assets/ViewColumnIcon";
const MuiDataTable = ({
  data,
  columns,
  components,
  options,
}) => {
  return (
    <div className="mui-data-table">
      <MUIDataTable
        data={data}
        columns={columns}
        components={components}
        options={options}
      />
    </div>
  );
};

MuiDataTable.propTypes = {
  data: PropTypes.object,
  columns: PropTypes.object,
  components: PropTypes.object,
  options: PropTypes.object,
};

MuiDataTable.defaultProps = {
  components: {
    icons: {
      ViewColumnIcon,
      FilterIcon,
    },
  },
};
export default MuiDataTable;
