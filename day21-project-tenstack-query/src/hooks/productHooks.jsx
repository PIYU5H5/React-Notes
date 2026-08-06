import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/productApi";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  useState[(filteredProducts, setFilteredProducts)] = useState(null);
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataApi,
    staleTime: 5000,
  });

 


  

  useEffect(() => {
    setFilteredProducts(data)
  },[])
  return {
    isPending,
    data,
    error,
    filterProducts,
    filteredProducts,
  };
};
