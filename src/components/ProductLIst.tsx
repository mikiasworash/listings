import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types/products/Product";
import { GrNext } from "react-icons/gr";
import { FaSpinner } from "react-icons/fa";

const ProductList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState<Product[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:5000/listings");
        const data = await response.json();
        setListings(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    setTimeout(fetchListings, 500);
  }, []);

  return (
    <div className="flex flex-col py-4 mt-8 mx-16  min-h-screen">
      <div className="flex justify-between">
        <div className="py-6">
          <h1 className="text-lg md:text-xl text-gray-800 font-semibold tracking-widest">
            FEATURED LISTINGS
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold">
            Recommended just for you
          </h1>
        </div>
        <button className="flex items-center font-bold">
          <p className="text-lg md:text-2xl">See All</p>
          <GrNext className="ml-3 text-black text-2xl font-bold" />
        </button>
      </div>

      {loading ? (
        <div className="mt-32 flex justify-center items-center">
          <FaSpinner className="animate-spin h-8 w-8" />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listings?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
