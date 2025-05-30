import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-white bg-black cursor-poiter" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className=" px-4 text-sm">{name}</p>
      <p className="text-sm px-4 font-medium text-green-400">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
