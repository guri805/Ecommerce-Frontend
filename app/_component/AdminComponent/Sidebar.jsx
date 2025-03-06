'use client'

import { Button } from '@mui/material';
import { useState } from 'react';
import { MdDashboard, MdCategory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Collapse } from 'react-collapse';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const pathname = usePathname();

    const isProductActive = pathname.startsWith("/product");
    const isCategoryActive = pathname.startsWith("/category");

    const toggleSubmenu = (index) => {
    if (submenuIndex === index) {
        setSubmenuIndex(null); // Close the submenu if it's already open
    } else {
        setSubmenuIndex(index); // Open the clicked submenu
    }
};

    return (
        <div className='card p-3 shadow-md bg-white rounded-md sticky top-[10px]'>
            <h2 className='text-2xl text-center text-primary font-semibold py-2'>Admin Panel</h2>
            <hr />
            <ul className='sideStripe list-none pt-2'>

                <li>
                    <Link href="/dashboard/overview">
                        <Button className={`w-full flex !capitalize !justify-start !gap-3 !rounded-none 
                            !text-[rgba(0,0,0,0.7)] !text-[16px] ${pathname === "/dashboard/overview" ? "active" : ""}`}>
                            <MdDashboard className='text-[16px]' />
                            <span>Overview</span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link href="/dashboard/users">
                        <Button className={`w-full flex !capitalize !justify-start !gap-3 !rounded-none 
                            !text-[rgba(0,0,0,0.7)] !text-[16px] ${pathname === "/dashboard/users" ? "text-primary" : ""}`}>
                            <FaUserCircle className='text-[16px]' />
                            <span>Users</span>
                        </Button>
                    </Link>
                </li>

                {/* Products Section */}
                <li className={isProductActive ? "active" : ""}>
                    <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none 
                        !text-[rgba(0,0,0,0.7)] !text-[16px]' onClick={() => toggleSubmenu(1)}>
                        <FaProductHunt className='text-[16px]' />
                        <span>Products</span>
                        <span className='ml-auto'>
                            <IoIosArrowDown className={`transition-all ${submenuIndex === 1 || isProductActive ? 'rotate-180' : ''}`} />
                        </span>
                    </Button>

                    <Collapse isOpened={submenuIndex === 1 || isProductActive}>
                        <ul className='pl-7'>
                            <li>
                                <Link href="/dashboard/product/productdata">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/product/list" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Product List
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/product/productupload">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/product/addproduct" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Product Upload
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                {/* Category Section */}
                <li className={isCategoryActive ? "active" : ""}>
                    <Button className='w-full flex !capitalize !justify-start !gap-3 !rounded-none 
                        !text-[rgba(0,0,0,0.7)] !text-[16px]' onClick={() => toggleSubmenu(2)}>
                        <MdCategory className='text-[16px]' />
                        <span>Category</span>
                        <span className='ml-auto'>
                            <IoIosArrowDown className={`transition-all ${submenuIndex === 2 || isCategoryActive ? 'rotate-180' : ''}`} />
                        </span>
                    </Button>

                    <Collapse isOpened={submenuIndex === 2 || isCategoryActive}>
                        <ul className='pl-7'>
                            <li>
                                <Link href="/dashboard/category/categorylist">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/category/list" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Category List
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/category/addcategory">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/dashboard/category/addcategory" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Add Category
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/category/subcategorylist">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/category/subcategorylist" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>SubCategory List
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/category/addsubcategory">
                                    <Button className={`w-full !capitalize !justify-start !rounded-none !text-[rgba(0,0,0,0.7)] !text-sm 
                                        ${pathname === "/category/addsubcategory" ? "active" : ""}`}>
                                        <span className='w-2 h-2 bg-gray-400 rounded-full mr-3'></span>Add SubCategory
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li>
                    <Link href="/dashboard/order">
                        <Button className={`w-full flex !capitalize !justify-start !gap-3 !rounded-none 
                            !text-[rgba(0,0,0,0.7)] !text-[16px] ${pathname === "/order" ? "active" : ""}`}>
                            <HiMiniShoppingBag className='text-[16px]' />
                            <span>Orders</span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
