"use client";

import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,

} from "@mui/material";

import Badge from "./Badge";

const columns = [

  { id: "orderId", label: "Order ID", minWidth: 150 },
  { id: "paymentId", label: "Payment ID", minWidth: 150 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "phone", label: "Phone", minWidth: 120 },
  { id: "address", label: "Address", minWidth: 280 },
  { id: "pincode", label: "Pincode", minWidth: 80 },
  { id: "totalAmount", label: "Total Amount", minWidth: 130 },
  { id: "email", label: "Email", minWidth: 150 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 120 },
];

const OrderTable = ({ orders }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="Orders Table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth }} className="text-primary">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
              <React.Fragment key={order.id}>
                <TableRow>
                  <TableCell className="text-primary">{order.orderId}</TableCell>
                  <TableCell className="text-primary">{order.paymentId}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.phone}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.pincode}</TableCell>
                  <TableCell>${order.totalAmount}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>
                    <Badge status={order.status} />
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
                
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default OrderTable;
