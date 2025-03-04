'use client'
import { Button } from '@mui/material';
import { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import CategoryPanel from './CategoryPanel';
import Link from 'next/link';

const QuickLinks = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const [hoveredFashion, setHoveredFashion] = useState(false);
    const [hoveredMen, setHoveredMen] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };

    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center">
                    {/* Left Navigation: Shop by Categories */}
                    <div className="nav-col-one w-[22%] border-r border-gray-300 pe-3">
                        <Button
                            className="!text-black w-full gap-2"
                            onClick={openCategoryPanel}
                        >
                            <RiMenu2Fill />
                            <span className="text-[15px] ms-1">Shop by Categories</span>
                            <IoIosArrowDown className="ms-auto" />
                        </Button>
                    </div>

                    {/* Center Navigation: Main Links */}
                    <div className="nav-col-two w-[65%] text-[15px] font-medium ms-11">
                        <ul className="flex items-center gap-7">
                            {/* Fashion Link with Submenu */}
                            <li
                                className="list-none transition relative"
                                onMouseEnter={() => setHoveredFashion(true)}
                                onMouseLeave={() => setHoveredFashion(false)}
                            >
                                <Link
                                    href="/productlist"
                                    className="transition text-[rgba(0,0,0)] hover:text-[#ff5252]"
                                >
                                    Fashion
                                </Link>
                                {/* Submenu (for Fashion) */}
                                <div
                                    className={`submenu absolute top-full left-0 min-w-[200px] bg-white shadow-md ${hoveredFashion ? 'block' : 'hidden'} z-[1000]`}
                                >
                                    <ul>
                                        {/* Men Link with Subgroup */}
                                        <li
                                            className="list-none relative"
                                            onMouseEnter={() => setHoveredMen(true)}
                                            onMouseLeave={() => setHoveredMen(false)}
                                        >
                                            <Link
                                                href="/fashion/men"
                                                className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                                            >
                                                Men
                                            </Link>
                                            {/* Subgroup (for Men) */}
                                            <div
                                                className={`absolute top-0 left-full min-w-[200px] bg-white shadow-md ${hoveredMen ? 'block z-[1000]' : 'hidden'}`}
                                            >
                                                <ul>
                                                    <li className="list-none">
                                                        <Link
                                                            href="/fashion/men/shirts"
                                                            className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                                                        >
                                                            Shirts
                                                        </Link>
                                                    </li>
                                                    <li className="list-none">
                                                        <Link
                                                            href="/fashion/men/pants"
                                                            className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                                                        >
                                                            Pants
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        {/* Women Link */}
                                        <li className="list-none">
                                            <Link
                                                href="/fashion/women"
                                                className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                                            >
                                                Women
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Other Links */}
                            <li className="link transition">
                                <Link href="/electronics">Electronics</Link>
                            </li>
                            <li className="link transition">
                                <Link href="/bags">Bags</Link>
                            </li>
                            <li className="link transition">
                                <Link href="/footwear">Footwear</Link>
                            </li>
                            <li className="link transition">
                                <Link href="/groceries">Groceries</Link>
                            </li>
                            <li className="link transition">
                                <Link href="/beauty">Beauty</Link>
                            </li>
                            <li className="link transition">
                                <Link href="/wellness">Wellness</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Category Panel */}
            <CategoryPanel
                openCategoryPanel={setIsOpenCatPanel}
                isOpenCatPanel={isOpenCatPanel}
            />
        </>
    );
};

export default QuickLinks;
