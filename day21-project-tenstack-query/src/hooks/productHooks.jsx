import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/productApi";
import { Search } from "lucide-react";

export const useProductApi = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDataApi,
    staleTime: 5000,
  });

  let filterProducts = (searchParams) => {
    data.filter()
  }
  return {
    isPending,
    data,
    error,
    filterProducts,
  };
};
