import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  
  
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full flex grid grid-cols-4 p-4 gap-2">
        {products?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          Prev
        </button>
        <p>
          {page + 1}/{totalPages}
        </p>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
