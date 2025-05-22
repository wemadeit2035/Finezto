import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const placeOrder = () => {
  const [method, setMethod] = useState("cod");

  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ------Left Side ------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3"></div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Province"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Postal Code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* ----- Right Side ----- */}
      <div>
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ----- Payment Method selection ----- */}
          <div className="flex flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded transition-colors"
            >
              <div className="flex items-center mr-2">
                <p
                  className={`w-3 h-3.5 rounded-full mr-2 ${
                    method === "stripe" ? "bg-green-400" : "bg-gray-100"
                  }`}
                ></p>
                <img
                  className="h-20"
                  src={assets.stripe_logo}
                  alt="Stripe payment gateway"
                />
              </div>
            </div>
            <div
              onClick={() => setMethod("paypal")}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded transition-colors"
            >
              <div className="flex items-center mr-2">
                <p
                  className={`w-3 h-3.5 rounded-full mr-2 ${
                    method === "paypal" ? "bg-green-400" : "bg-gray-100"
                  }`}
                ></p>
                <img
                  className="h-20"
                  src={assets.paypal_logo}
                  alt="Paypal payment gateway"
                />
              </div>
            </div>
            <div
              onClick={() => setMethod("visa")}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded transition-colors"
            >
              <div className="flex items-center mr-2">
                <p
                  className={`w-3 h-3.5 rounded-full mr-2 ${
                    method === "visa" ? "bg-green-400" : "bg-gray-100"
                  }`}
                ></p>
                <img
                  className="h-20"
                  src={assets.visa_logo}
                  alt="Visa payment gateway"
                />
              </div>
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded transition-colors"
            >
              <div className="flex items-center mr-2">
                <p
                  className={`w-3 h-3.5 rounded-full mr-2 ${
                    method === "cod" ? "bg-green-400" : "bg-gray-100"
                  }`}
                ></p>
                <p className="text-green-500 border rounded-md px-4 py-4 text-sm font-medium mx-1 text-center">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE YOUR ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placeOrder;
