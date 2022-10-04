import React, { FC } from "react";
import { TableRow, TableCell } from "@mui/material";
import { IDocReq } from "../../Types";

interface RowTableProps {
  doc: IDocReq;
}

const RowTable: FC<RowTableProps> = ({ doc }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component='th'
        scope='row'>
        {doc.name}
      </TableCell>
      <TableCell align='right'>{doc.constructorsId.length}</TableCell>
    </TableRow>
  );
};

export default RowTable;
