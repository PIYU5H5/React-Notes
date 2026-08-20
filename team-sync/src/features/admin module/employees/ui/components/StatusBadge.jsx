const StatusBadge = ({ status }) => {
  const isActive = status?.toLowerCase() === "active";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
        isActive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      />

      {status}
    </span>
  );
};

export default StatusBadge;
