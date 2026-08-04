import { Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductCardSkeleton";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProductApi } from "../hooks/productHooks";
import Filters from "../components/filters";
const ShopPage = () => {
  let { isPending,data,error } = useProductApi()
  if (error) return <h1> {error.message} </h1> 
  return (
    <div className="min-h-screen bg-black p-8">
      <Filters/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
