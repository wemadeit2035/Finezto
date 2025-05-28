import React from "react";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
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
            <img
              src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
              alt="Boutique interior"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              What began as a small boutique in downtown Seattle has blossomed
              into a nationwide phenomenon. Founded by fashion enthusiast Maria
              Sanchez, we've stayed true to our core belief:
              <span className="font-semibold text-purple-600">
                {" "}
                Fashion should empower, not intimidate.
              </span>
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-purple-600">12+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-purple-600">500k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="text-2xl font-bold text-purple-600">75+</div>
                <div className="text-gray-600">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sustainable Fashion",
                text: "Ethically sourced materials and eco-friendly production",
              },
              {
                icon: "🎨",
                title: "Creative Expression",
                text: "Encouraging personal style through versatile designs",
              },
              {
                icon: "💎",
                title: "Quality Craftsmanship",
                text: "Premium materials that stand the test of time",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterBox />
    </div>
  );
};

export default About;
