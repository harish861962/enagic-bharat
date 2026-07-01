import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";


export default function Products() {
  return (
    <section id="Product" className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center justify-center w-full">

          <span className="uppercase tracking-[5px] text-red-500 font-semibold ">
            Our Collection
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Our Products
          </h2>

          <p className="max-w-xl mx-auto mt-6 mb-5 text-gray-500 ">
            Discover premium Japanese technology designed to provide healthier water.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">

          {products.map((item) => (
            <ProductCard
              key={item.name}
              product={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
