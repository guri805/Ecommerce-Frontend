'use client'
import { useState } from "react";
import CustomInput from "../FormComponent/CustomInput";
import CustomBtn from "../common/CustomBtn";
import ImageUploadbox from "./ImageUploadbox";

const AddCategoryForm = () => {
    const [formData, setFormData] = useState({
        categoryname: "",
    });

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (uploadedImages) => {
        setImages(uploadedImages);
    };

    return (
        <form>
            {/* Category Name Input */}
            <div className="mb-4">
                <CustomInput
                    type="text"
                    name="categoryname"
                    value={formData.categoryname}
                    onChange={handleChange}
                    labelValue="Category Name"
                    labelClassName="block font-semibold"
                    inputClassName="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                />
            </div>

            {/* Media Upload */}
            <div className="mb-2">
                <h3 className="text-lg font-semibold">Media & Images</h3>
                <ImageUploadbox multiple={true} onImagesChange={handleImageUpload} />
            </div>

            {/* Submit Button */}
            <CustomBtn
                type="submit"
                btnName="Add Category"
                btnClassName="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            />
        </form>
    );
};

export default AddCategoryForm;
