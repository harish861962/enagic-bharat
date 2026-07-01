import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const description = product.subtitle || product.description;
  const features = product.features || [];

  return (
    <div
      className="
        group
        relative
        w-full
        max-w-[290px]
        bg-white
        rounded-[28px]
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        overflow-hidden
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="px-2 pb-4 flex flex-col flex-1">

        <h2 className="py-3 text-xl font-bold text-center">
          {product.name}
        </h2>

        <p className="text-center text-gray-500 mt-2 min-h-[50px]">
          {description}
        </p>

        {/* Features */}

        {features.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-2">

            {features.map((item, index) => (

              <div
                key={index}
                className="text-center"
              >


                <p className="text-sm mt-1 text-gray-500">
                  {item}
                </p>

              </div>

            ))}

          </div>
        )}

        {/* Price */}

        <h3 className="text-2xl font-bold text-red-600 text-center mt-5">
          {product.price}
        </h3>

        {/* Button */}
        <Link
          to={`/product/${product.id}`}
          className="mt-6 block w-full text-center bg-red-600 text-white py-3 rounded-full hover:bg-black duration-300"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}
