const SearchFilterBar = ({
  search,
  setSearch,
  role,
  setRole,
  department,
  setDepartment,
  status,
  setStatus,
  handleSearchFilter,
  filters,
}) => {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employees by name or email..."
            className="
              w-full rounded-lg
              border border-gray-200
              bg-gray-50
              py-2.5 pl-10 pr-4
              text-sm text-gray-700
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-indigo-500
              focus:bg-white
              focus:ring-2
              focus:ring-indigo-100
            "
          />
        </div>

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="
            rounded-lg
            border border-gray-200
            bg-gray-50
            px-4 py-2.5
            text-sm text-gray-700
            outline-none
            transition
            focus:border-indigo-500
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-100
            lg:w-44
          "
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        {/* Department */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="
            rounded-lg
            border border-gray-200
            bg-gray-50
            px-4 py-2.5
            text-sm text-gray-700
            outline-none
            transition
            focus:border-indigo-500
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-100
            lg:w-48
          "
        >
          <option value="all">All Departments</option>
          <option value="developer">Developer</option>
          <option value="administrative">Administrative</option>
          <option value="security">Security</option>
          <option value="management">Management</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            rounded-lg
            border border-gray-200
            bg-gray-50
            px-4 py-2.5
            text-sm text-gray-700
            outline-none
            transition
            focus:border-indigo-500
            focus:bg-white
            focus:ring-2
            focus:ring-indigo-100
            lg:w-40
          "
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterBar;
