import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/productCard";
import ProductFilter from "../components/ProductFilter";

const ProductPage = () => {
  let { data, isLoading, error, search, setSearch } = useAllProduct();
  let {
    data: productsByCategory,
    category,
    setCategory,
  } = useProductByCategory();
  console.log(data);
  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      <ProductFilter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsByCategory?.products.length
          ? productsByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
