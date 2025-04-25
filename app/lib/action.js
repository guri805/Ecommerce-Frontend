"use server";
import axios from "axios";
import { addCategorySchema } from "./defination";

// ------------------ CATEGORY HANDLER ------------------

export const addCategoryHandler = async (_, formData) => {
  const validated = addCategorySchema.safeParse({
    categoryName: formData.get("categoryName"),
  });

  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors };
  }

  const imageFile = formData.get("categoryImages"); // 👈 updated field name
  if (!imageFile || !(imageFile instanceof File)) {
    return { error: { categoryImages: ["Image is required"] } }; // 👈 updated field name
  }

  console.log("category data ", validated.data.categoryName);
  console.log("Image File:", imageFile);

  const finalFormData = new FormData();
  finalFormData.append("categoryName", validated.data.categoryName);
  finalFormData.append("categoryImages", imageFile); // 👈 updated field name

  try {
    const res = await axios.post(
      "http://localhost:3001/api/category/create-category",
      finalFormData
    );

    if (res?.data?.success) {
      return { success: "Category added successfully!" };
    } else {
      return { error: res?.data?.message || "Something went wrong." };
    }
  } catch (err) {
    console.error("Category Add Error:", err);
    return { error: "Unexpected error occurred while adding category." };
  }
};

export async function getCategories() {
  try {
    const response = await axios.get('http://localhost:3001/api/category/categories');
    const resData = response?.data;

    // console.log("Full categories:", JSON.stringify(resData.categories, null, 2));

    if (resData?.success) {
      return resData.categories || [];
    } else {
      console.log('Server error:', resData?.message);
      return [];
    }
  } catch (error) {
    console.log('Error fetching categories:', error.message);
    return [];
  }
}
