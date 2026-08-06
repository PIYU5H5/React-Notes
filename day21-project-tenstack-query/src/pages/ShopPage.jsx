import { Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductCardSkeleton";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProductApi } from "../hooks/productHooks";
import Filters from "../components/filters";
import { getProductDataApi } from "../api/productApi";
import { useEffect } from "react";
const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let getProducts = async () => {
    let data = await getProductDataApi();
    setProductsData(data);
    setIsLoading(false);
    setFilteredProducts(data);
  };

  let filterProducts = (searchParams) => {
    let filteredData = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase()),
    );

    if (filteredProducts) {
      setFilteredProducts(filteredProducts);
    }
  };

  useEffect(() => {
    getProductDataApi();
  }, []);

  if (error) return <h1> {error.message} </h1>;
  return (
    <div className="min-h-screen bg-black p-8">
      <Filters filterProducts={filterProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
