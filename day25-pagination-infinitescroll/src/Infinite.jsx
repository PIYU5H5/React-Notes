import {
  keepPreviousData,
  useQueries,
  useQuery,
  useInfiniteQuery,
} from "@Infinite/react-query";
import React, { useState } from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 10;
  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * 10;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });
  if (isPending) return "Loading";
  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full flex grid grid-cols-4 p-4 gap-2">
        {allProducts.map((val) => {
          <ProductCard key={val.id} product={val} />;
        })}
      </div>
      {hasNextPage ? (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "loading" : "Load More"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Infinite;
