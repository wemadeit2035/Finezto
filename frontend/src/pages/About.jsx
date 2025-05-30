import React from "react";
import NewsletterBox from "../components/NewsletterBox";
import assets from "../assets/assets";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-4 bg-gradient-to-r from-gray-300 to-gray-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in-down">
            About Our Fashion Journey
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Crafting style narratives since 2012
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src={assets.about_image} alt="Photo by Mike Petrucci" />
          </div>
          <div className="md:w-1/2">
            <div className="text-3xl pt-10">
              <Title text1={"OUR"} text2={"STORY"} />
            </div>
            <p className="text-lg text-gray-600 mb-6">
              What began as a small boutique in downtown Seattle has blossomed
              into a nationwide phenomenon. Founded by fashion enthusiast Maria
              Sanchez, we've stayed true to our core belief:
              <span className="font-semibold text-blue-400">
                {" "}
                Fashion should empower, not intimidate.
              </span>
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-black shadow">
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-gray-400">Years in Business</div>
              </div>
              <div className="text-center p-4 bg-black shadow">
                <div className="text-2xl font-bold text-white">500k+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-black shadow">
                <div className="text-2xl font-bold text-white">75+</div>
                <div className="text-gray-400">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center text-4xl mb-10">
            <Title text1={"CORE"} text2={"VALUES"} />
          </div>
          <div className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-4 text-center py-8 text-xs sm:text-sm md:text-base text-gray-700">
            <div className="bg-gray-200 p-8 flex-1 mx-2">
              <img
                src={assets.exchange_icon}
                className="w-12 m-auto mb-5"
                alt=""
              />
              <p className="font-semibold">Easy Exchange Policy</p>
              <p className="text-gray-500">
                We offer hassle-free exchange policy
              </p>
            </div>
            <div className="bg-gray-200 p-8 flex-1 mx-2">
              <img
                src={assets.quality_icon}
                className="w-12 m-auto mb-5"
                alt=""
              />
              <p className="font-semibold">7 Days Return Policy</p>
              <p className="text-gray-500">
                We provide 7 days free return policy
              </p>
            </div>
            <div className="bg-gray-200 p-8 flex-1 mx-2">
              <img
                src={assets.support_icon}
                className="w-12 m-auto mb-5"
                alt=""
              />
              <p className="font-semibold">Great Customer Support</p>
              <p className="text-gray-500">We provide 24/7 customer support</p>
            </div>
          </div>
        </div>
      </section>
      <NewsletterBox />
    </div>
  );
};

export default About;
