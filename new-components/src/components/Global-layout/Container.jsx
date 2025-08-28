import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white min-h-[90vh] flex items-center">
      {/* Overlay for subtle professionalism */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Transforming <span className="text-accent">Medical Care</span> <br />
            with Smart Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Your health is our priority. Access top-notch care, track your health data, 
            and connect with doctors anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="px-6 py-3 rounded-lg font-semibold bg-accent hover:scale-105 transform transition duration-300 shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg font-semibold border border-white hover:bg-white hover:text-primary transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="https://img.freepik.com/free-vector/medical-team-concept-illustration_114360-5529.jpg"
            alt="Medical Care Illustration"
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
