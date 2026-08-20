import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "../api/employeeApis";
import { useState } from "react";

export let useEmployee = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: "",
  });
  let { data, isPending, isFetching } = useQuery({
    queryKey: ["employees", page],
    queryFn: () =>
      getAllEmployees({
        page,
        limit: 20,
        role: filters.role,
        status: filters.status,
        department: filters.department,
      }),
    staleTime: 10000,
    keepPreviousData: true,
  });

  const onPageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination.totalPages) return;
    setPage(newPage);
  };
  const handleSearchFilter = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };
  return {
    isPending,
    data,
    isFetching,
    onPageChange,
    handleSearchFilter,
  };
};
