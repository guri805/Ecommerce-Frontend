"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const UserMyList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sangria",
      description: "A-Line Kurti With Sharara & Dupatta",
      oldPrice: 45.0,
      newPrice: 30.0,
      discount: "50% OFF",
      image:
        "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
    },
    {
      id: 2,
      name: "Sangria",
      description: "A-Line Kurti With Sharara & Dupatta",
      oldPrice: 45.0,
      newPrice: 30.0,
      discount: "50% OFF",
      image:
        "https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg",
    },
  ]);

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="card ">
      <div className="cartHeader border-b-2">
        <h2 className="font-medium">My List</h2>
        <p className="capitalize">
          There are{" "}
          <span className="font-bold text-primary">{products.length}</span>{" "}
          products in your my list
        </p>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="cartItem w-full p-3 flex items-center gap-4 relative border-b-2 my-2"
        >
          {/* Product Image */}
          <div className="image rounded-md overflow-hidden flex flex-col gap-1 w-[15%]">
            <Link href={`/product/${product.id}`} className="group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          {/* Product Details */}
          <div className="info w-[85%]">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <span className="line-through font-medium">${product.oldPrice}</span>
              <span className="ms-3 text-primary font-medium">${product.newPrice}</span>
              <span className="ms-3 text-primary font-medium">{product.discount}</span>
            </p>

            <Button className="!bg-primary !text-white">Add To Cart</Button>
          </div>

          {/* Remove Button */}
          <div className="remove absolute top-1 right-2 p-2 cursor-pointer">
            <button
              className="text-red-500"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserMyList;
