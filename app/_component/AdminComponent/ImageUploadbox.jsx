import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageUploadbox = ({ multiple = false, onImagesChange }) => {
    const [images, setImages] = useState([]);

    // Handle Image Upload
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            const imageUrls = files.map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...imageUrls]); // Append new images
            onImagesChange([...images, ...imageUrls]); // Pass images to parent
        }
    };

    // Remove Image
    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
        onImagesChange(updatedImages);
    };

    return (
        <div>
            {/* Image Upload Box */}
            <label className="uploadbox p-3 rounded-md overflow-hidden border-2 border-dashed border-gray-300 h-[150px] w-[170px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                <FaRegImages className="text-[40px] opacity-35 pointer-events-none" />
                <h4 className="text-sm opacity-35 pointer-events-none">Upload Images</h4>
                <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
                    multiple={multiple}
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </label>

            {/* Display Selected Images with Remove Button */}
            <div className="grid grid-cols-6 gap-3 mt-3">
                {images.map((src, index) => (
                    <div key={index} className="relative h-[150px] w-full rounded-md overflow-hidden">
                        {/* Lazy Load Image */}
                        <LazyLoadImage
                            src={src}
                            alt={`Upload Preview ${index}`}
                            className="w-full h-full object-cover"
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "1s" },
                            }}
                        />

                        {/* Remove Button */}
                        <button
                            className="absolute top-0.5 right-0.5 bg-red-500 rounded-full p-1 text-lg"
                            onClick={() => removeImage(index)}
                        >
                            <RxCross2 className="text-white text-sm"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploadbox;
