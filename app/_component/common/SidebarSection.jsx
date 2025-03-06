'use client'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Collapse } from 'react-collapse';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function valuetext(value) {
    return `₹${value}`;
}

const SidebarSection = () => {
    const [isOpenSizeFilter, setisOpenSizeFilter] = useState(false);
    const [priceRange, setPriceRange] = useState([20, 5000]);
    const [value, setValue] = useState(2);
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };
    return (
        <>
            <aside className='bg-[#cbd5e1] px-2 rounded-md '>
                <div className="box px-2 ">
                    <div className="heading">
                        <h3 className="text-xl font-medium pt-2 pb-3">Shop By Category</h3>
                    </div>
                    <div className="categories px-2 max-h-[150px] overflow-x-hidden overflow-y-scroll relative left-[-10px]">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Label" className="w-full" />
                        </FormGroup>
                    </div>
                </div>
                <div className="boxtwo px-2 py-2">
                    <div className="heading flex items-center justify-between pr-4">
                        <h3 className="text-xl font-medium pt-2 pb-3">Size</h3>
                        <button onClick={() => setisOpenSizeFilter(!isOpenSizeFilter)}>
                            {isOpenSizeFilter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </button>
                    </div>
                    <Collapse isOpened={!isOpenSizeFilter}>
                        <div className="categories px-2 max-h-[150px] overflow-x-hidden overflow-y-scroll relative left-[-10px]">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={<span className="text-sm">Small</span>}
                                    className="w-full"
                                />
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={<span className="text-sm">Medium</span>}
                                    className="w-full"
                                />
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={<span className="text-sm">Large</span>}
                                    className="w-full"
                                />
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={<span className="text-sm">XL</span>}
                                    className="w-full"
                                />
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label={<span className="text-sm">XXL</span>}
                                    className="w-full"
                                />
                            </FormGroup>
                        </div>
                    </Collapse>
                </div>
                <div className="boxthree px-2 py-2">
                    <div className="rangeheading flex items-center justify-between pr-4">
                        <h3 className="text-xl font-medium pt-2 pb-3">Filter By Range</h3>
                    </div>
                    {/* Price range slider */}
                    <Box sx={{ width: 200 }}>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            valueLabelFormat={valuetext}
                            min={0}
                            max={5000}
                            className="custom-slider"
                        />
                    </Box>
                    <div className="price-range flex items-center justify-between pr-5 text-[13px] mt-[-5px]">
                        <div>From: <span className='font-semibold'>Rs: {priceRange[0]}</span></div>
                        <div>To: <span className='font-semibold'>Rs: {priceRange[1]}</span></div>
                    </div>
                </div>
                <div className="boxfour px-2 py-2">
                    <div className="rangeheading flex items-center justify-between pr-4">
                        <h3 className="text-xl font-medium pt-2 pb-3">Filter By Rating</h3>
                    </div>
                    <Stack>
                        <Rating name="half-rating" value={value}
                            onChange={(event, newValue) => {
                                console.log(newValue);
                                setValue(newValue)
                            }}
                            precision={0.5}
                        />
                    </Stack>
                </div>
                
            </aside>
        </>
    );
};

export default SidebarSection;
