import StatusBadge from "../StatusBadge";
import Button from "../Button";

const EmployeeRow = ({
  employee,
  onView,
  onEdit,
  onToggleStatus,
}) => {
  const isActive = employee.status?.toLowerCase() === "active";

  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold uppercase text-indigo-600">
            {employee.name?.charAt(0)}
          </div>

          <div>
            <p className="font-medium capitalize text-gray-900">
              {employee.name}
            </p>

            <p className="text-sm text-gray-500">
              {employee.email}
            </p>
          </div>
        </div>
      </td>

      {/* Department */}
      <td className="px-6 py-4">
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-700">
          {employee.department}
        </span>
      </td>

      {/* Role */}
      <td className="px-6 py-4 text-sm capitalize text-gray-700">
        {employee.role}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <StatusBadge status={employee.status} />
      </td>

      {/* Created */}
      <td className="px-6 py-4 text-sm text-gray-500">
        {employee.createdAt
          ? new Date(employee.createdAt).toLocaleDateString()
          : "-"}
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {/* View */}
          <Button
            variant="secondary"
            onClick={() => onView(employee)}
            className="px-3 py-1.5 text-xs"
          >
            View
          </Button>

          {/* Edit */}
          <Button
            variant="dark"
            onClick={() => onEdit(employee)}
            className="px-3 py-1.5 text-xs"
          >
            Edit
          </Button>

          {/* Toggle Status */}
          <Button
            variant={isActive ? "danger" : "primary"}
            onClick={() => onToggleStatus(employee)}
            className="px-3 py-1.5 text-xs"
          >
            {isActive ? "Mark Inactive" : "Mark Active"}
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;