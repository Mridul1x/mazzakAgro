import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Ingredients = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[70vh] flex overflow-hidden">
      <Parallax
        bgImage="https://images.pexels.com/photos/5529604/pexels-photo-5529604.jpeg"
        strength={500}
        className="w-1/2 h-full basis-10/12"
      >
        {/* Empty content for the parallax image */}
      </Parallax>
      <div className="w-1/2 h-full flex items-center  justify-center bg-black text-white">
        <div className="p-5">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Discover Our Products
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            className="mt-4"
          >
            Explore a wide range of sustainable and eco-friendly products
            designed to meet your needs.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="600"
            to="/"
            className="mt-5 inline-block bg-transparent border border-white text-white py-2 px-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
