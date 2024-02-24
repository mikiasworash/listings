import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrNext } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";

interface Product {
  id: number;
  img_source: string;
  title: string;
  location: string;
  delivery: string;
  price: string;
  deadline: string;
}

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

    fetchListings();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="flex flex-col py-4 mt-8 mx-16  min-h-screen">
      <div className="flex justify-between">
        <div>
          <h1 className="text-md text-gray-800 font-semibold">
            FEATURED LISTINGS
          </h1>
          <h1 className="text-3xl font-bold ">Recommended just for you</h1>
        </div>
        <div className="flex items-center font-bold">
          <p className="text-lg">See All</p>
          <GrNext className="ml-1 text-black" />
        </div>
      </div>
      <div className="bg-white">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listings?.map((product) => (
            <div
              key={product.id}
              className="group relative hover:cursor-pointer  shadow-xl rounded-3xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                <img
                  src={product.img_source}
                  alt={product.title + " picture"}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="h-10 w-10 absolute right-4 top-4 bg-[#B1B3B0] bg-opacity-50 rounded-full flex justify-center items-center">
                  <CiHeart className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-md text-gray-900 font-bold">
                  {product.title}
                </h3>

                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <CiLocationOn className="text-gray-600 mr-1" />
                    <p className="text-md text-gray-600">{product.location}</p>
                  </div>
                  <div className="flex items-center mt-1">
                    <LiaShippingFastSolid className="text-gray-600 mr-1" />
                    <p className="text-md text-gray-600">{product.delivery}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="mt-1 text-md text-black font-bold">
                      ${product.price}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Ends in{" "}
                    <span className="font-bold">{product.deadline}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
