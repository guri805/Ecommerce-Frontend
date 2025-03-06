'use client';

import { useState } from "react";
import Rating from "@mui/material/Rating";
import ImageUploadbox from "./ImageUploadbox";
import CustomInput from "../FormComponent/CustomInput";
import CustomBtn from "../common/CustomBtn";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    oldPrice: "",
    isFeatured: "",
    stock: "",
    brand: "",
    discount: "",
    ram: "",
    weight: "",
    size: "",
    rating: 2.5,
    images: [], // Store uploaded images
  });

  const categories = ["Electronics", "Fashion", "Home Appliances", "Books"];
  const subcategories = {
    Electronics: ["Mobile", "Laptop", "Tablet"],
    Fashion: ["Men", "Women", "Kids"],
    "Home Appliances": ["Refrigerator", "Washing Machine", "Microwave"],
    Books: ["Fiction", "Non-fiction", "Comics"],
  };

  const fields = [
    { label: "Category", name: "category", type: "select", options: categories },
    { label: "Subcategory", name: "subcategory", type: "select", options: formData.category ? subcategories[formData.category] || [] : [] },
    { label: "Price", name: "price", type: "number" },
    { label: "Old Price", name: "oldPrice", type: "number" },
    { label: "Stock", name: "stock", type: "number" },
    { label: "Brand", name: "brand", type: "text" },
    { label: "Discount (%)", name: "discount", type: "number" },
    { label: "RAM", name: "ram", type: "text" },
    { label: "Weight (kg)", name: "weight", type: "number" },
    { label: "Size", name: "size", type: "text" },
    { label: "Is Featured?", name: "isFeatured", type: "select", options: ["Yes", "No"] },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, rating: newValue });
  };

  const handleImageUpload = (uploadedImages) => {
    setFormData({ ...formData, images: uploadedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border-2">
      {/* Product Name */}
      <CustomInput
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        placeholder="Enter product name"
        labelValue="Product Name"
        labelClassName="block font-semibold mb-1"
        inputClassName="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          required
        />
      </div>

      {/* 4 Column Grid Fields */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block font-semibold">{field.label}</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                disabled={field.name === "subcategory" && !formData.category}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <CustomInput
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                inputClassName="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* Rating Component */}
      <div className="mt-4 flex items-center py-2">
        <label className="font-semibold mr-2">Rating:</label>
        <Rating name="rating" value={formData.rating} precision={0.5} onChange={handleRatingChange} />
      </div>

      {/* Media and Images */}
      <div className="mb-2">
        <h3 className="font-semibold pb-2">Media & Images</h3>
        <ImageUploadbox multiple={true} onImagesChange={handleImageUpload} />
      </div>

      {/* Submit Button */}
      <CustomBtn
        type="submit"
        btnName="Upload Product"
        btnClassName="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      />
    </form>
  );
};

export default ProductForm;
