import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "./Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <>
    <Navbar/>
    
    <section className="bg-gray-50 min-h-screen py-16 !my-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Product Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-12 items-center p-10">

            {/* Left Image */}

            <div className="flex justify-center">

              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md object-contain hover:scale-105 transition duration-500"
              />

            </div>

            {/* Right Content */}

            <div>

              <span className="uppercase tracking-[4px] text-red-600 font-semibold">
                Premium Japanese Technology
              </span>

              <h1 className="text-5xl font-bold mt-4">
                {product.name}
              </h1>

              <h3 className="text-xl text-gray-500 mt-3">
                {product.description}
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Experience clean, healthy and alkaline water with Enagic's
                premium water ionizer. Designed using advanced Japanese
                technology for your family's wellness.
              </p>

              <h2 className="text-4xl font-bold text-red-600 mt-8">
                {product.price}
              </h2>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition">
                  Buy Now
                </button>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                  {showDetails ? "Hide Details ▲" : "More Details ▼"}
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Specifications */}

        {showDetails && (

          <div className="bg-white mt-10 rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Product Specifications
            </h2>

           <div className="flex justify-center">
  <table className="table-auto border border-gray-200 rounded-xl shadow-md">
<tbody>

  {product.specifications.map((item, index) => (

    <tr
      key={index}
      className="border-b hover:bg-gray-50 transition"
    >

      <td className="bg-gray-100 font-semibold px-5 py-3 whitespace-nowrap">
        {item.title}
      </td>

      <td className="px-5 py-3">
        {item.value}
      </td>

    </tr>

  ))}

</tbody>
              
</table>
</div>
</div>
        )}
  </div>
  </section>
    </>
  );
}