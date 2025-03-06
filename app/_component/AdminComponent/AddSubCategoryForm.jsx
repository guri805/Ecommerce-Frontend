'use client'
import { useState } from "react";
import CustomInput from "../FormComponent/CustomInput";

const AddSubCategoryForm = () => {
    const [formData, setFormData] = useState({
        categoryname: "",
        subcategoryname: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form className='flex flex-col gap-2'>
            <CustomInput
                type="text"
                name="categoryname"
                value={formData.categoryname}
                onChange={handleChange}
                labelValue="Category Name"
                labelClassName="block font-medium"
                inputClassName="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
            />
            <CustomInput
                type="text"
                name="subcategoryname"
                value={formData.subcategoryname}
                onChange={handleChange}
                labelValue="SubCategory Name"
                labelClassName="block font-medium"
                inputClassName="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
            />
            <button type="submit" className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                Add SubCategory
            </button>
        </form>
    )
}

export default AddSubCategoryForm
