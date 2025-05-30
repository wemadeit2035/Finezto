import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex justify-center md:flex-row flex-row gap-10 mb-28">
        <img
          className="w-48 md:w-72" // Smaller width for image
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            123 Main Street,
            <br /> Springfield, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0123 <br /> Email: admin@finezto.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carees At Finezto
          </p>
          <p className="text-gray-500">
            Learn more about our career opportunities and how you can join our
            team.
          </p>
          <button className="border border-black px-4 py-4 text-sm hover:bg-black hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default contact;
