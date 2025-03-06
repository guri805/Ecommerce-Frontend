'use client'
import { useState } from "react";
import { Button } from "@mui/material";
import Sidebar from "../../../_component/AdminComponent/Sidebar";
import Link from "next/link";
import InputDropdown from "../../../_component/AdminComponent/InputDropdown";
import SearchBox from "../../../_component/AdminComponent/SearchBox";
import CustomTable from "../../../_component/AdminComponent/CustomTable";



// Sample Product Data
const productData = [
    {
        id: "67b38407e067fec9c4d5ed9e",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        name: " doloribus voluptates corporis.",
        category: "Electronics",
        subcategory: "Mobile Phones",
        price: "$699",
    },
    {
        id: "67b38407e067fec9c4d5ed9e",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia adipisci reiciendis, doloribus voluptates corporis.",
        category: "Electronics",
        subcategory: "Computers",
        price: "$999",
    },
];

// Column Structure for Products
const productColumns = [
    { id: "id", label: "ID", align: "left" },
    { id: "product", label: "Product", align: "left" },
    { id: "category", label: "Category", align: "left" },
    { id: "subcategory", label: "Subcategory", align: "left" },
    { id: "price", label: "Price", align: "left" },
    { id: "action", label: "Action", align: "center" },
];

const ProductList = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleSearch = (query) => {
        console.log("Search Query:", query);
    };

    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            {/* Header Section */}
                            <div className="col1 flex justify-between items-center py-2">
                                <h1 className="font-semibold text-2xl text-gray-800">Products</h1>
                                <div className="buttons flex gap-2">
                                    <Button className="!bg-green-600 !text-white !font-medium !text-[12px] max-h-8">
                                        Export
                                    </Button>
                                    <Link href={"/product/addproduct"}>
                                        <Button className="!bg-[#3872fa] !text-white !font-medium !text-[12px] !flex !items-center !justify-center max-h-8">
                                            Add Product
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Filter & Search Section */}
                            <div className="col2 bg-white flex items-center justify-between py-2">
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

                            {/* Table Section */}
                            <div className="col3 shadow-md">
                                <CustomTable columns={productColumns} rows={productData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
