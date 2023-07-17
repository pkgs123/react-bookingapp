import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {styled} from "@mui/material/styles";
import { IconButton, TableContainer } from "@mui/material";

export const CustomTableContainer = styled(TableContainer)((props)=>({
  maxHeight: props.$mxheight
}))

export const CustomTable = styled(Table)((props)=>({
  width:props.$width || "100%",
  size:props.$size || "small"
}))

export const CustomTableHead = styled(TableHead)((props)=>({
  backgroundColor:props.$bgcolor
}))

export const CustomTableRow = styled(TableRow)((props)=>({
  padding:props.$padding
}))

export const CustomTableCell = styled(TableCell)((props)=>({
  background:props.$color
}))

export const CustomTableBody = styled(TableBody)(()=>({
}))

export const ColorButton = styled(IconButton)((props)=>({
  color:props.$color
}))

