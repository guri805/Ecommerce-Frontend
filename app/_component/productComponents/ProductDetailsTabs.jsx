'use client'
import { useState } from 'react';
import { TextField, Rating } from '@mui/material';

const ProductDetailsTabs = () => {
    const [active, setActive] = useState(0);
    const [ratingValue, setRatingValue] = useState(4);

    return (
        <div className="detailsection">
            <div className="tabs flex gap-4 my-5 px-3">
                <h2 className='text-xl font-medium opacity-90 cursor-pointer' onClick={() => setActive(0)}>Description</h2>
                <h2 className='text-xl font-medium opacity-90 cursor-pointer' onClick={() => setActive(1)}>Product Details</h2>
                <h2 className='text-xl font-medium opacity-90 cursor-pointer' onClick={() => setActive(2)}>Review(4)</h2>
            </div>
            <div className='detailcontent border shadow-lg rounded-lg p-6'>
                {active === 0 && (
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-lg font-medium'>Lightweight Design</h3>
                        <p className='opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 className='text-lg font-medium'>Free Shipping & Return</h3>
                        <p className='opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3 className='text-lg font-medium'>Money Back Guarantee</h3>
                        <p className='opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                )}
                {active === 1 && (
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Product name</th>
                                    <th className="px-6 py-3">Color</th>
                                    <th className="px-6 py-3">Category</th>
                                    <th className="px-6 py-3">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4">Apple MacBook Pro 17"</td>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4">Microsoft Surface Pro</td>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">$1999</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {
                    active === 2 &&
                    <div className='reviewSection overflow-y-scroll h-[400px]'>
                        <h3 className='text-xl font-medium ms-2 text-[rgba(0,0,0,0.8)]'>Customer questions & answers</h3>
                        <div className="review">
                            <div className="addReview bg-[#fafafa] rounded-lg border p-4 w-[95%] mx-auto mt-4">
                                <h3 className='text-lg font-medium py-1 text-[rgba(0,0,0,0.8)]'>Add a review</h3>
                                <form className='flex flex-col gap-3 mt-3'>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Multiline"
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                    />
                                    <Rating
                                        name="half-rating-read"
                                        value={ratingValue}
                                        onChange={(event, newValue) => {
                                            setRatingValue(newValue)
                                        }}
                                        precision={0.5} />
                                    <button className='border px-3 py-1 w-20 text-center rounded-lg'>Sumit</button>
                                </form>
                            </div>
                            <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                <div className="review__header__left flex items-center justify-between pb-2">
                                    <div className='flex items-center gap-3'>
                                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                            alt="user"
                                            className="review__header__left__img w-20" />
                                        <div className="review__header__left__info">
                                            <h4 className="review__header__left__info__name">John Doe</h4>
                                            <p className="review__header__left__info__date">2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <Rating name="half-rating-read" value={ratingValue} precision={0.5} readOnly />
                                    </div>
                                </div>
                                <div className="reviewDetail w-[89%] ps-2">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                </div>
                            </div>
                            <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                <div className="review__header__left flex items-center justify-between pb-2">
                                    <div className='flex items-center gap-3'>
                                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                            alt="user"
                                            className="review__header__left__img w-20" />
                                        <div className="review__header__left__info">
                                            <h4 className="review__header__left__info__name">John Doe</h4>
                                            <p className="review__header__left__info__date">2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <Rating name="half-rating-read" value={ratingValue} precision={0.5} readOnly />
                                    </div>
                                </div>
                                <div className="reviewDetail w-[89%] ps-2">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                </div>
                            </div>
                            <div className="review__header border-b border-[rgba(0,0,0,.1)] py-3 w-[95%] mx-auto">
                                <div className="review__header__left flex items-center justify-between pb-2">
                                    <div className='flex items-center gap-3'>
                                        <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-512.png"
                                            alt="user"
                                            className="review__header__left__img w-20" />
                                        <div className="review__header__left__info">
                                            <h4 className="review__header__left__info__name">John Doe</h4>
                                            <p className="review__header__left__info__date">2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <Rating name="half-rating-read" value={ratingValue} precision={0.5} readOnly />
                                    </div>
                                </div>
                                <div className="reviewDetail w-[89%] ps-2">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta cum ipsam consectetur sapiente repellendus doloribus hic tempore! Repudiandae, incidunt praesentium?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProductDetailsTabs;
