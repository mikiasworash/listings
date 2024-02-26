import { Product } from "../types/products/Product";
import { CiLocationOn } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div key={product.id} className="group relative shadow-lg rounded-3xl">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-3xl bg-gray-200 lg:aspect-none group-hover:opacity-75 h-96">
        <img
          src={product.img_source}
          alt={product.title + " picture"}
          className="h-full w-full object-cover object-center"
        />
        <div className="h-12 w-12 absolute right-4 top-4 bg-[#B1B3B0] bg-opacity-50 rounded-full flex justify-center items-center hover:cursor-pointer">
          <FaRegHeart className="text-2xl text-white font-extrabold" />
        </div>
      </div>
      <div className="flex flex-col justify-between px-6 py-8 hover:cursor-pointer">
        <h3 className="text-xl text-black font-semibold">{product.title}</h3>

        <div className="flex flex-col sm:flex-col md:flex-row items-center gap-6 mt-2">
          <div className="flex items-center">
            <CiLocationOn className="text-gray-800 mr-2 text-md xl:text-lg" />
            <p className="text-md xl:text-lg text-gray-800">
              {product.location}
            </p>
          </div>
          <div className="flex items-center mt-1">
            <LiaShippingFastSolid className="text-gray-800 mr-2 text-md xl:text-lg" />
            <p className="text-md xl:text-lg text-gray-800">
              {product.delivery}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <p className="text-xl text-black font-bold">${product.price}</p>
          </div>
          <p className="text-md font-medium text-gray-900">
            Ends in <span className="font-bold">{product.deadline}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
