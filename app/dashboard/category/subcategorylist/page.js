
import Sidebar from '@/app/_component/AdminComponent/Sidebar';
import SubCategoryListTable from '@/app/_component/AdminComponent/SubCategoryListTable';
import { Button } from '@mui/material';
import Link from 'next/link';



const columns = [
    { id: "categoryimage", label: "CATEGORY IMAGE", minWidth: 150 },
    { id: "categoryname", label: "CATEGORY NAME", minWidth: 150 },
    { id: "subcategoryname", label: "SUB CATEGORY NAME", minWidth: 150 },
    { id: "action", label: "ACTION", minWidth: 150 },
];

const rows = [
    {
        id: 1,
        categoryimage: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        categoryname: "Fashion",
        subcategories: ["Men", "Women", "Kids"],
    },
    {
        id: 2,
        categoryimage: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
        categoryname: "Electronics",
        subcategories: ["Mobiles", "Laptops", "Accessories"],
    }
];

const SubCategoryList = () => {
    
    return (
        <section className="AddSubCategory py-10">
            <div className="container">
                <div className='flex'>
                    <div className="leftside basis-1/4">
                        <Sidebar />
                    </div>
                    <div className="rightside px-4 basis-3/4">
                        <div className="card bg-white shadow-md rounded-md p-5">
                            {/* Header Section */}
                            <div className="col1 flex justify-between items-center">
                                <h1 className='font-semibold text-2xl text-gray-800'>Products</h1>
                                <div className="buttons flex gap-2">
                                    <Button className='!bg-green-600 !text-white !font-medium !text-[12px] max-h-8'>Export</Button>
                                    <Link href={"dashboard/category/addsubcategory"}>
                                        <Button className='!bg-[#3872fa] !text-white !font-medium !text-[12px] max-h-8'>
                                            Add Product
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            

                            <SubCategoryListTable columns={columns} rows={rows} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubCategoryList;
