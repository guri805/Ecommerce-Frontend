'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import CategoryPanel from './CategoryPanel';
import Link from 'next/link';

const QuickLinks = ({ categories }) => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [hoveredMainCat, setHoveredMainCat] = useState(null);
  const [hoveredSubCat, setHoveredSubCat] = useState(null);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="flex items-center">
          {/* Left Navigation: Shop by Categories */}
          <div className="nav-col-one w-[22%] border-r border-gray-300 pe-3">
            <Button className="!text-black w-full gap-2" onClick={openCategoryPanel}>
              <RiMenu2Fill />
              <span className="text-[15px] ms-1">Shop by Categories</span>
              <IoIosArrowDown className="ms-auto" />
            </Button>
          </div>

          {/* Center Navigation: Main Links */}
          <div className="nav-col-two w-[65%] text-[15px] font-medium ms-11">
            <ul className="flex items-center gap-7">
              {categories.map((cat) => (
                <li
                  key={cat._id}
                  className="relative list-none"
                  onMouseEnter={() => setHoveredMainCat(cat._id)}
                  onMouseLeave={() => setHoveredMainCat(null)}
                >
                  <Link
                    href={`/category/${cat.categoryName.toLowerCase()}`}
                    className="transition text-black hover:text-[#ff5252]"
                  >
                    {cat.categoryName.toUpperCase() }
                  </Link>

                  {/* 1st Level Dropdown */}
                  {cat.children?.length > 0 && hoveredMainCat === cat._id && (
                    <div className="absolute top-full left-0 min-w-[200px] bg-white shadow-md z-[1000]">
                      <ul>
                        {cat.children.map((subCat) => (
                          <li
                            key={subCat._id}
                            className="relative"
                            onMouseEnter={() => setHoveredSubCat(subCat._id)}
                            onMouseLeave={() => setHoveredSubCat(null)}
                          >
                            <Link
                              href={`/category/${cat.categoryName.toLowerCase()}/${subCat.categoryName.toLowerCase()}`}
                              className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                            >
                              {subCat.categoryName.toUpperCase()}
                            </Link>

                            {/* 2nd Level Dropdown */}
                            {subCat.children?.length > 0 && hoveredSubCat === subCat._id && (
                              <div className="absolute top-0 left-full min-w-[200px] bg-white shadow-md z-[1000]">
                                <ul>
                                  {subCat.children.map((innerCat) => (
                                    <li key={innerCat._id}>
                                      <Link
                                        href={`/category/${cat.categoryName.toLowerCase()}/${subCat.categoryName.toLowerCase()}/${innerCat.categoryName.toLowerCase()}`}
                                        className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                                      >
                                        {innerCat.categoryName.toUpperCase()}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Category Panel */}
      <CategoryPanel
        openCategoryPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
        categories = {categories}
      />
    </>
  );
};

export default QuickLinks;
