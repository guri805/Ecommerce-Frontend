'use client';

import { useState } from "react";
import { useActionState } from "react";
import { addCategoryHandler } from "@/app/lib/action";
import CustomBtn from "../common/CustomBtn";
import ImageUploadbox from "./ImageUploadbox";
import { TextField } from "@mui/material";

const initialState = { error: null, success: null };

const AddCategoryForm = () => {
  const [imageFile, setImageFile] = useState(null);

  const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
    if (!imageFile) {
      return { error: { categoryImages: ["Image is required"] } };
    }

    // Append the file manually
    formData.append("categoryImages", imageFile);

    return await addCategoryHandler(prevState, formData);
  }, initialState);

  const handleImageUpload = (images) => {
    if (images.length > 0) {
      setImageFile(images[0].file);
    } else {
      setImageFile(null);
    }
  };

  return (
    <form action={formAction} >
      {/* Category Name */}
      <div className="mb-4">
        <TextField
          name="categoryName"
          label="Category Name*"
          required
          className="w-full"
        />
        {state?.error?.categoryName && (
          <p className="text-sm text-red-500">{state.error.categoryName[0]}</p>
        )}
      </div>

      {/* Image Upload */}
      <div className="mb-2">
        <h3 className="text-lg font-semibold">Upload Image*</h3>
        <ImageUploadbox multiple={false} onImagesChange={handleImageUpload} />
        {state?.error?.categoryImages && (
          <p className="text-sm text-red-500">{state.error.categoryImages[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <CustomBtn
        type="submit"
        btnName={isPending ? "Adding..." : "Add Category"}
        btnClassName="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
        disabled={isPending}
      />

      {state?.success && (
        <p className="text-green-600 text-sm text-center mt-4">{state.success}</p>
      )}
    </form>
  );
};

export default AddCategoryForm;
