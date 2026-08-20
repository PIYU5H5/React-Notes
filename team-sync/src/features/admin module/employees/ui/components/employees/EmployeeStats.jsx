const EmployeeStats = ({ employees }) => {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status?.toLowerCase() === "active",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status?.toLowerCase() !== "active",
  ).length;

  const stats = [
    {
      label: "Total Employees",
      value: totalEmployees,
    },
    {
      label: "Active",
      value: activeEmployees,
    },
    {
      label: "Inactive",
      value: inactiveEmployees,
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-gray-500">{stat.label}</p>

          <p className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStats;
