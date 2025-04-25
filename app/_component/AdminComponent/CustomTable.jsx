'use client'
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const CustomTable = ({ columns, rows }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
   
    return (
        <>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader aria-label="custom table">
                    <TableHead>
                        <TableRow sx={{ "& th": { color: "black", fontWeight: "bold", backgroundColor: "#d8ccd1" } }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{ padding: "8px 10px" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                <TableCell className="font-semibold capitalize" align="left" sx={{ padding: "8px 10px" }}>
                                    {row.categoryName}
                                </TableCell>

                                <TableCell align="left" sx={{ padding: "8px 10px" }}>
                                    <LazyLoadImage
                                        src={row.categoryImages}
                                        alt="Category"
                                        effect="blur"
                                        className="w-[50px] h-[50px] rounded-md object-contain"
                                    />
                                </TableCell>

                                <TableCell align="center" sx={{ padding: "8px 10px" }}>
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FaEye size={18} />
                                        </button>
                                        <button className="text-yellow-500 hover:text-yellow-700">
                                            <FaEdit size={18} />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <FaTrash size={18} />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>



                </Table>
            </TableContainer>


            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
};

export default CustomTable;
