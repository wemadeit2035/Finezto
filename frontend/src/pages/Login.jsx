import React, { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${assets.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-md bg-opacity-90">
        {/* Decorative elements */}
        <div className="absolute -inset-4 opacity-20"></div>
        <div className="absolute inset-0"></div>

        <form
          onSubmit={onSubmitHandler}
          className="relative z-10 flex flex-col items-center p-10"
        >
          {/* Logo/Title */}
          <div className="mb-8 text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img src={assets.profile} alt="" />
            </div>
            <div className="mb-12 md:text-4xl font-bold">
              <Title text1={"WELCOME"} text2={"BACK"} className="text-2xl" />
            </div>
            <p className="text-white mt-2">Sign in to your account</p>
          </div>

          {/* Form Fields */}
          <div className="w-full space-y-5">
            {currentState === "Sign Up" && (
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:ring-opacity-50 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500"
                  placeholder="Full Name"
                  required
                />
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:ring-opacity-50 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500"
                placeholder="Email Address"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full px-5 py-4 bg-gray-5 border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:ring-opacity-50 outline-none transition-all duration-300 text-gray-700 placeholder-gray-500"
                placeholder="Password"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Action Links */}
          <div className="w-full flex justify-between text-sm mt-4 mb-6 text-purple-200">
            <button
              type="button"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              Forgot Password?
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
              }
              className="hover:text-purple-400 transition-colors duration-300"
            >
              {currentState === "Login" ? "Create Account" : "Back to Login"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 bg-gray-400 text-white hover:bg-gray-500 font-medium ${
              isSubmitting ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
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
                Processing...
              </span>
            ) : currentState === "Login" ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </button>

          {/* Divider */}
          <div className="relative w-full my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button
              type="button"
              className="p-3 transition-colors duration-300"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.218.682-.485 0-.236-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            <button
              type="button"
              className="p-3 transition-colors duration-300"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </button>
            <button
              type="button"
              className="p-3 transition-colors duration-300"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
