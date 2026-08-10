import { useQuery } from "@tanstack/react-query";
import { getAllProductApi, getProductByCategory, getProductsCategories } from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductApi(debounceSearch),
  });

  return { data, isLoading, error, search, setSearch };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductsCategories,
  });
};

export const useProductByCategory = () => {
  const [category, setCategory] = useState(null);
  let { data } = useQuery({
    queryKey: ["productsByCategory",category],
    queryFn: () => getProductByCategory(category),
  });
  return { category, setCategory, data };
};
