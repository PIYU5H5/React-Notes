import { Star } from "lucide-react";
import { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product }) => {
  let {setCartItem} = useContext(MyShop)

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="flex items-center gap-1">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button
            onClick={() => setCartItem((prev) => [...prev,product])}
            className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
