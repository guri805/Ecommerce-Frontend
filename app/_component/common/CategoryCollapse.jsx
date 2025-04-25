'use client';
import { useState } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Button } from '@mui/material';
import Link from 'next/link';

const CategoryCollapse = ({ categories }) => {
    const [openSubMenu, setOpenSubMenu] = useState({});
    const [openInnerSubMenu, setOpenInnerSubMenu] = useState({});

    const toggleSubMenu = (catId) => {
        setOpenSubMenu((prev) => ({
            ...prev,
            [catId]: !prev[catId],
        }));
    };

    const toggleInnerSubMenu = (catId) => {
        setOpenInnerSubMenu((prev) => ({
            ...prev,
            [catId]: !prev[catId],
        }));
    };

    return (
        <div className="scroll">
            <ul className="w-full">
                {categories.map((mainCat) => (
                    <li key={mainCat._id} className="list-none flex flex-col relative">
                        <div className="flex items-center relative">
                            <Link href={`/${mainCat.categoryName.toLowerCase()}`} className="w-full">
                                <Button className="w-full !link !text-left !justify-start !px-3 !text-[16px] !text-[rgba(0,0,0,0.8)]">
                                    {mainCat.categoryName}
                                </Button>
                            </Link>
                            {mainCat.children?.length > 0 && (
                                <BsPlusSquare
                                    className="absolute top-[10px] right-3 cursor-pointer"
                                    onClick={() => toggleSubMenu(mainCat._id)}
                                />
                            )}
                        </div>

                        {/* Subcategories */}
                        {openSubMenu[mainCat._id] && mainCat.children && (
                            <ul className="submenu w-full pl-3">
                                {mainCat.children.map((subCat) => (
                                    <li key={subCat._id} className="list-none relative flex flex-col">
                                        <div className="flex items-center relative">
                                            <Link href={`/${mainCat.categoryName.toLowerCase()}/${subCat.categoryName.toLowerCase()}`} className="w-full">
                                                <Button className="w-full !link !text-left !justify-start !px-3 !text-[14px] !text-[rgba(0,0,0,0.8)]">
                                                    {subCat.categoryName}
                                                </Button>
                                            </Link>
                                            {subCat.children?.length > 0 && (
                                                <BsPlusSquare
                                                    className="absolute top-[10px] right-3 !w-3 cursor-pointer"
                                                    onClick={() => toggleInnerSubMenu(subCat._id)}
                                                />
                                            )}
                                        </div>

                                        {/* Inner Subcategories */}
                                        {openInnerSubMenu[subCat._id] && subCat.children && (
                                            <ul className="inner-submenu w-full pl-3 mb-2">
                                                {subCat.children.map((innerCat) => (
                                                    <li key={innerCat._id} className="list-none relative mb-2">
                                                        <Link
                                                            href={`/${mainCat.categoryName.toLowerCase()}/${subCat.categoryName.toLowerCase()}/${innerCat.categoryName.toLowerCase()}`}
                                                            className="w-full"
                                                        >
                                                            <span className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                                {innerCat.categoryName}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryCollapse;
