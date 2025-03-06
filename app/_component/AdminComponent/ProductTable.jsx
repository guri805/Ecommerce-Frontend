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


const columns = [
    { id: "id", label: "ID", minWidth: 80 },
    { id: "product", label: "PRODUCT", minWidth: 200 },
    { id: "category", label: "CATEGORY", minWidth: 150 },
    { id: "subcategory", label: "SUB CATEGORY", minWidth: 150 },
    { id: "price", label: "PRICE", minWidth: 150 },
    { id: "action", label: "ACTION", minWidth: 150 },
];

const rows = [
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
    {
        id: "fdjsklfsk32434k5k5",
        name: "A-Line Kurti with Sharara",
        image: "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
        category: "Women's Wear",
        subcategory: "Suit",
        price: 1300,
        action: "Edit/Delete",
    },
];

const ProductTable = () => {
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
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.id === "product" ? (
                                                <div className="flex items-center gap-3">

                                                    <LazyLoadImage
                                                        src={row.image}
                                                        alt="Category"
                                                        effect="blur"
                                                        className="rounded-md w-[60px] h-[60px] object-contain"
                                                    />

                                                    <span>{row.name}</span>
                                                </div>
                                            ) : column.id === "id" ? (
                                                <span className="text-primary">{value}</span>
                                            ) : (
                                                value
                                            )}
                                        </TableCell>
                                    );
                                })}
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

export default ProductTable;
