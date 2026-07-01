import { useState, useEffect } from "react";

import img1 from "../assets/all-product.png";
import img2 from "../assets/platinum-3.jpg";
import img3 from "../assets/Super-501-3-1.jpg";
import img4 from "../assets/SD501_banner3.jpg";
import img5 from "../assets/k8.jpg";

const images = [img1, img2, img3, img4, img5];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="slider" className="pt-20">
      <div className="relative h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden">

        {/* Image */}
        <img
          src={images[current]}
          alt="Slider"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

            <div className="max-w-2xl !px-15">

              <h1 className="font-extrabold leading-tight text-white
              text-4xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl 
              ">

                Healthy Water
                <br />
                Healthy Life

              </h1>

              <p className="!mt-6 text-gray-200
              text-base
              sm:text-lg
              md:text-xl">

                Discover Japan's No.1 Water Ionizer Technology.
                Experience pure, healthy, and alkaline water for a
                better lifestyle.

              </p>

              <div className="!mt-8 flex flex-col sm:flex-row gap-4">

                <button className="bg-red-600 hover:bg-red-700 transition !px-8 !py-3 rounded-full font-semibold">
                  Explore Products
                </button>

                <button className="border border-white hover:bg-white hover:text-black transition !px-8 !py-3 rounded-full font-semibold">
                  Learn More
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-red-600 w-8" : "bg-white/70"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}