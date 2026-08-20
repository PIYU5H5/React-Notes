const EmployeeHeader = ({ onAddEmployee }) => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Employees</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and view all employees in your organization.
        </p>
      </div>

      <button
        onClick={onAddEmployee}
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
      >
        + Add Employee
      </button>
    </div>
  );
};

export default EmployeeHeader;
