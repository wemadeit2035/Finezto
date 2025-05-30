import React, { useContext, useState, useRef } from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import {
  CreditCard,
  Package,
  Truck,
  Wallet,
  MapPin,
  User,
  Mail,
  Home,
  Landmark,
  Smartphone,
} from "lucide-react";

const PlaceOrder = () => {
  const [method, setMethod] = useState("stripe");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { navigate } = useContext(ShopContext);
  const formRef = useRef(); // Add this line

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.street.trim())
      newErrors.street = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.province.trim()) newErrors.province = "Province is required";
    if (!formData.postalCode.trim())
      newErrors.postalCode = "Postal code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);

        navigate("/orders");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-15 lg:mb-20"
        >
          <div className="mb-12 text-4xl md:text-5xl font-bold">
            <Title text1={"PLACE"} text2={"ORDER"} className="text-3xl" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Securely finalize your order with our premium checkout experience
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-8">
          {/* Left Column - Delivery Information & Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[58%]"
          >
            {/* Delivery Information Card */}
            <div className="bg-white shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="border-b border-gray-100 p-5 sm:p-6 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <MapPin size={18} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-medium">
                    Delivery Information
                  </h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div
                    className={`border p-3 ${
                      errors.firstName ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <User size={14} /> First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="text"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div
                    className={`border p-3 ${
                      errors.lastName ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <User size={14} /> Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="text"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div
                    className={`border p-3 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <Mail size={14} /> Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="email"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div
                    className={`border p-3 ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <Smartphone size={14} /> Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="tel"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div
                    className={`border p-3 ${
                      errors.street ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      <Home size={14} /> Street Address
                    </label>
                    <input
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="text"
                      placeholder="123 Main Street"
                    />
                    {errors.street && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.street}
                      </p>
                    )}
                  </div>

                  <div
                    className={`border p-3 ${
                      errors.street ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                      {" "}
                      <Landmark size={14} /> Country{" "}
                    </label>
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                      type="text"
                      placeholder="South Africa"
                    />
                    {errors.street && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.street}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    <div
                      className={`border p-3 ${
                        errors.city ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <label className="text-xs text-gray-500 mb-1">City</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                        type="text"
                        placeholder="New York"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div
                      className={`border p-3 ${
                        errors.province ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <label className="text-xs text-gray-500 mb-1">
                        Province/State
                      </label>
                      <input
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                        type="text"
                        placeholder="NY"
                      />
                      {errors.province && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.province}
                        </p>
                      )}
                    </div>

                    <div
                      className={`border p-3 ${
                        errors.postalCode ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <label className="text-xs text-gray-500 mb-1">
                        Postal Code
                      </label>
                      <input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full focus:outline-none text-gray-900 placeholder-gray-300"
                        type="text"
                        placeholder="10001"
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.postalCode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary Card - Now below Delivery Information */}
            <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="border-b border-gray-100 p-5 sm:p-6 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <Package size={18} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-medium">
                    Order Summary
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <CartTotal />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Payment Only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-[42%] lg:sticky lg:top-4 lg:self-start"
          >
            <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="border-b border-gray-100 p-5 sm:p-6 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900 text-white p-2 rounded-full">
                    <CreditCard size={18} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-medium">
                    Payment Method
                  </h2>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-2 p-3 cursor-pointer transition-all ${
                      method === "stripe"
                        ? "border-green-500 bg-gray-50 shadow-sm"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setMethod("stripe")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          method === "stripe"
                            ? "bg-green-500"
                            : "border border-gray-300"
                        }`}
                      >
                        {method === "stripe" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <img
                        className="h-20"
                        src={assets.stripe_logo}
                        alt="Stripe payment gateway"
                      />
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Secure credit card payment
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-2 p-3 cursor-pointer transition-all ${
                      method === "paypal"
                        ? "border-green-500 bg-gray-50 shadow-sm"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setMethod("paypal")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          method === "paypal"
                            ? "bg-green-500"
                            : "border border-gray-300"
                        }`}
                      >
                        {method === "paypal" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <img
                        className="h-20"
                        src={assets.paypal_logo}
                        alt="Paypal payment gateway"
                      />
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Pay with PayPal account
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-2 p-3 cursor-pointer transition-all ${
                      method === "visa"
                        ? "border-green-500 bg-gray-50 shadow-sm"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setMethod("visa")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          method === "visa"
                            ? "bg-green-500"
                            : "border border-gray-300"
                        }`}
                      >
                        {method === "visa" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <img
                        className="h-20"
                        src={assets.visa_logo}
                        alt="Visa payment gateway"
                      />
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Direct Visa card payment
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`border-2 p-3 cursor-pointer transition-all ${
                      method === "cod"
                        ? "border-green-500 bg-gray-50 shadow-sm"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    onClick={() => setMethod("cod")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          method === "cod"
                            ? "bg-green-500"
                            : "border border-gray-300"
                        }`}
                      >
                        {method === "cod" && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Wallet size={50} className="text-gray-500 mr-2 mt-4" />
                        <span className="font-medium text-green-500 text-sm mt-4">
                          Cash on Delivery
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Pay when you receive
                    </p>
                  </motion.div>
                </div>

                <div className="bg-gray-50 p-3 border border-gray-100 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">
                      Delivery Method
                    </span>
                    <span className="font-medium text-sm">
                      Standard Shipping
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">
                      Estimated Delivery
                    </span>
                    <span className="font-medium text-sm">
                      3-5 business days
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-3.5 font-medium transition-all ${
                    isSubmitting
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white"
                  } flex items-center justify-center text-sm md:text-base`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing Order...
                    </>
                  ) : (
                    "PLACE YOUR ORDER"
                  )}
                </button>

                <p className="text-gray-500 text-xs mt-3 text-center">
                  By placing your order, you agree to our{" "}
                  <a href="#" className="text-gray-900 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gray-900 underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
