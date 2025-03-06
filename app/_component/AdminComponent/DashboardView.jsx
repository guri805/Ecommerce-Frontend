'use client'

import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import InputDropdown from "./InputDropdown";
import SearchBox from "./SearchBox";
import CustomTable from "./CustomTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
    { id: "name", label: "Product Name", minWidth: 150 },
    { id: "color", label: "Color", minWidth: 100 },
    { id: "category", label: "Category", minWidth: 150 },
    { id: "price", label: "Price", minWidth: 100 },
    { id: "action", label: "Action", minWidth: 100 },
];

const rows = [
    { id: 1, name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { id: 2, name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { id: 3, name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
    { id: 4, name: "Google Pixel Phone", color: "Gray", category: "Phone", price: "$799" },
    { id: 5, name: "Apple Watch 5", color: "Red", category: "Wearables", price: "$999" },
];

const DashboardView = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleSearch = (query) => {
        console.log("Search Query:", query);
    };
    return (
        <>
            <div className="col1 w-full p-5 py-10 shadow-md border-[rgba(0,0,0,0.8)] flex items-center justify-between gap-8 mb-5 capitalize bg-white rounded-md">
                <div className="">
                    <h1 className='text-[30px] font-bold leading-9 mb-3'>Good Morning,<br />Cameron</h1>
                    <p>Here's what happening on your store today. see the statistics at once.</p>
                    <Link href={"/product/addproduct"}>
                        <Button className='!bg-[#3872fa] !text-white !font-medium !text-sm !mt-5'> Add Product</Button>
                    </Link>
                </div>
                <img src="shop.webp" alt="" className='w-[350px] rounded-lg' />
            </div>
            <div className="col2 card my-3 bg-white p-4 rounded-md">
                <div className='flex items-center justify-between py-2'>
                    <h3 className='text-[20px] font-semibold'>Recent Order</h3>

                </div>

                <div className="col1 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <TableContainer sx={{ width: "100%", overflow: "hidden" }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.color}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                        <TableCell>
                                            <Button variant="text" color="primary">Edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>

            </div>
            <div className="col4 bg-white p-4 rounded-md">
                <h2 className='text-xl font-semibold pb-3'>Product List</h2>
                <div className="col1 bg-white flex items-center justify-between py-2">
                    <div className="w-[200px] max-w-[200px] overflow-hidden">
                        <InputDropdown
                            label="Category By"
                            options={["Electronics", "Clothing", "Books", "Furniture"]}
                            selected={selectedOption}
                            onChange={setSelectedOption}
                            className="px-6 py-1 w-full"
                        />
                    </div>
                    <div className="w-[260px] flex justify-center">
                        <SearchBox placeholder="Search products..." onSearch={handleSearch} />
                    </div>
                </div>
                <div className="col2 shadow-md">
                    <CustomTable columns={columns} rows={rows} />
                </div>
            </div>
        </>
    )
}

export default DashboardView
