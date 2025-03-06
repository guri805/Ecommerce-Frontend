
import CustomTable from "@/app/_component/AdminComponent/CustomTable";
import Sidebar from "@/app/_component/AdminComponent/Sidebar";
import { Button } from "@mui/material";
import Link from "next/link";


// Define columns for the Category List
const columns = [
    { id: "category", label: "CATEGORY NAME", align: "left", maxWidth: 80 },
    { id: "categoryImage", label: "IMAGE", align: "left", maxWidth: 200 },
    { id: "action", label: "ACTION", align: "center", maxWidth: 100 },
];

// Define category data
const rows = [
    {
        id: "1",
        category: "Fashion",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
    },
    {
        id: "2",
        category: "Electronics",
        image: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
    },
];

const CategoryList = () => {
    return (
        <section className="AddCategory py-10">
            <div className="container">
                <div className="flex">
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5 ">
                            <div className="col1 my-3 flex items-center justify-between">
                                <h1 className="text-2xl">Category List</h1>
                                <Link href={"/dashboard/category/addcategory"}>
                                        <Button className="!bg-[#3872fa] !text-white !font-medium !text-[12px] !flex !items-center !justify-center max-h-8">
                                            Add Category
                                        </Button>
                                    </Link>
                            </div>
                            <div className="col2">
                                {/* Use CustomTable */}
                                <CustomTable columns={columns} rows={rows} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
