import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees = [], onView, onEdit, onToggleStatus }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Employee
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Department
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Role
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Joined
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                  onView={onView}
                  onEdit={onEdit}
                  onToggleStatus={onToggleStatus}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-sm text-gray-500"
                >
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
