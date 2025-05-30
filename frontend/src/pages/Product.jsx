import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [showNotification, setShowNotification] = useState(false); // Added state

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Notification handler
  const handleAddToCart = () => {
    if (!size) return; // Prevent adding without size

    addToCart(productData._id, size);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 relative">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition-all animate-fadeInOut">
          Added to cart!
        </div>
      )}

      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row">
          {/* Thumbnails Column */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[120px] pb-2 sm:pb-0">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className={`w-1/4 sm:w-full aspect-square object-cover cursor-pointer border-2 transition-all
                  ${
                    image === item
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Image - Full coverage */}
          <div className="w-full sm:w-[calc(100%-136px)]">
            <img
              className="w-full h-full object-cover aspect-square"
              src={image}
              alt="Main product view"
            />
          </div>
        </div>
        {/* ----- Product Information ----- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.stardull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-green-600">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 transition-all ${
                    item === size
                      ? "border-blue-500 text-blue-500 bg-blue-100"
                      : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!size}
            className={`bg-black text-white px-8 py-3 text-sm ${
              !size ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ----- Description & Review Section ----- */}
      <div className="mt-20">
        <div className="flex border-b border-gray-200">
          <button
            className="px-6 py-3 text-sm font-semibold text-black border-b-2 border-black bg-white focus:outline-none transition-colors duration-200"
            type="button"
          >
            Description
          </button>
          <button
            className="px-6 py-3 text-sm font-semibold text-gray-500 hover:text-black border-b-2 border-transparent bg-white focus:outline-none transition-colors duration-200"
            type="button"
          >
            Reviews (122)
          </button>
        </div>
        <div className="flex flex-col gap-5 border border-t-0 rounded-b-2xl px-8 py-8 text-base text-gray-700 bg-gradient-to-br from-white to-gray-50 shadow-md">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            natus vel, quae laboriosam rerum delectus maxime et, nostrum
            laudantium ex ab eaque adipisci. Culpa veritatis, eius recusandae
            laborum quibusdam magnam.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellendus ea accusamus voluptatem, illum magni corporis quaerat
            exercitationem repudiandae alias doloribus animi mollitia esse
            repellat ad suscipit sed velit dolorem!
          </p>
        </div>
      </div>
      {/* ----- Display related Products ----- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
