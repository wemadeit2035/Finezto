import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "R";
  const delivery_fee = "50";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Add to cart function
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please Select a Size");
      return;
    }

    setCartItems((prev) => {
      const cartData = structuredClone(prev);
      if (cartData[itemId]) {
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
      } else {
        cartData[itemId] = { [size]: 1 };
      }
      return cartData;
    });
  };

  // Remove from cart (decrement quantity)
  const removeFromCart = (productId, size, quantity = 1) => {
    setCartItems((prev) => {
      const newItems = structuredClone(prev);
      if (newItems[productId]?.[size]) {
        newItems[productId][size] = Math.max(
          0,
          newItems[productId][size] - quantity
        );

        if (newItems[productId][size] === 0) {
          delete newItems[productId][size];
          if (Object.keys(newItems[productId]).length === 0) {
            delete newItems[productId];
          }
        }
      }
      return newItems;
    });
  };

  // Delete entire size variant from cart
  const deleteFromCart = (productId, size) => {
    setCartItems((prev) => {
      const newItems = structuredClone(prev);
      if (newItems[productId]?.[size]) {
        delete newItems[productId][size];
        if (Object.keys(newItems[productId]).length === 0) {
          delete newItems[productId];
        }
      }
      return newItems;
    });
  };

  // Get total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId)) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId].hasOwnProperty(size)) {
            totalCount += cartItems[itemId][size];
          }
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  // Context value
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getCartCount,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
