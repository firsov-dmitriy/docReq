import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetDocReqQuery } from "../../app/service/docApi";
import RowTable from "./Row";
import { Box } from "@mui/material";
import { IDocReq } from "../../Types";
interface DocsTableProps {
  docs: IDocReq[];
}

export default function DocsTable({ docs }: DocsTableProps) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      m={3}>
      <TableContainer
        sx={{ maxWidth: 400 }}
        component={Paper}>
        <Table
          sx={{ maxWidth: 400 }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Наименование документа</TableCell>
              <TableCell align='right'>Количество заявок</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs.map((doc) => (
              <RowTable
                key={doc.id}
                doc={doc}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
