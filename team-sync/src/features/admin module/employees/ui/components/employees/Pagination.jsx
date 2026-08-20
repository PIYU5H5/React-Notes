import Button from "../Button";

const Pagination = ({
  page,
  totalPages,
  total,
  limit,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Results info */}
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-medium text-gray-700">
          {(page - 1) * limit + 1}
        </span>{" "}
        to{" "}
        <span className="font-medium text-gray-700">
          {Math.min(page * limit, total)}
        </span>{" "}
        of{" "}
        <span className="font-medium text-gray-700">
          {total}
        </span>{" "}
        employees
      </p>

      {/* Pagination buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-2"
        >
          ← Previous
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                pageNumber === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <Button
          variant="secondary"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-2"
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default Pagination;