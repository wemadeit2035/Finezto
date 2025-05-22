import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Trash2, Plus, Minus } from "lucide-react";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, addToCart, removeFromCart, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let total = 0;
    const tempData = [];

    // Process cart items into display format
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          const product = products.find((p) => p._id === productId);
          if (product) {
            const itemTotal = product.price * quantity;
            total += itemTotal;
            tempData.push({
              id: productId,
              size,
              quantity,
              unitPrice: product.price,
              total: itemTotal,
            });
          }
        }
      }
    }

    setCartData(tempData);
    setSubtotal(total);
  }, [cartItems, products]);

  const handleQuantityChange = (item, newQuantity) => {
    const difference = newQuantity - item.quantity;
    if (difference > 0) {
      addToCart(item.id, item.size, difference);
    } else if (difference < 0) {
      removeFromCart(item.id, item.size, Math.abs(difference));
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item.id, item.size, item.quantity);
  };

  return (
    <div className="border-t pt-14 max-w-4xl mx-auto">
      <div className="text-2xl mb-8 px-4">
        <Title text1={"MY"} text2={"CART"} />
      </div>

      <div className="px-4">
        {!cartData.length ? (
          <p className="py-8 text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cartData.map((item) => {
              const product = products.find((p) => p._id === item.id);

              return (
                <div
                  key={`${item.id}-${item.size}-${Math.random()}`}
                  className="py-4 border-b flex justify-between items-center"
                >
                  {/* Product Info */}
                  <div className="flex gap-4 w-2/5">
                    <img
                      className="w-20 h-20 object-cover"
                      src={product?.image?.[0]}
                      alt={product?.name}
                      onError={(e) => {
                        e.target.src = "/fallback-image.jpg";
                        e.target.onerror = null;
                      }}
                    />
                    <div>
                      <p className="font-medium mb-1">{product?.name}</p>
                      <div className="flex gap-2 items-center">
                        <span className="text-sm">
                          {currency}
                          {item.unitPrice?.toFixed(2)}
                        </span>
                        {item.size && item.size !== "undefined" && (
                          <span className="text-sm text-blue-500 border border-blue-500 bg-blue-100 rounded px-2 py-0.5 font-semibold bg-gray">
                            {item.size.toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="w-1/5 flex justify-center">
                    <div className="flex items-center border rounded bg-white">
                      <button
                        onClick={() =>
                          handleQuantityChange(item, item.quantity - 1)
                        }
                        className="px-2 py-1 border-r hover:bg-gray-50 disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} className="text-red-500" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={item.quantity}
                        onChange={(e) => {
                          const value = Math.max(
                            1,
                            Math.min(10, Number(e.target.value))
                          );
                          handleQuantityChange(item, value);
                        }}
                        className="w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() =>
                          handleQuantityChange(item, item.quantity + 1)
                        }
                        className="px-2 py-1 border-l hover:bg-gray-50 disabled:opacity-30"
                        disabled={item.quantity >= 10}
                      >
                        <Plus size={14} className="text-green-500" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Actions */}
                  <div className="flex items-center gap-4 w-2/5 justify-end">
                    <p className="font-medium">
                      {currency}
                      {item.total?.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-red-500 hover:text-red-800 cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
