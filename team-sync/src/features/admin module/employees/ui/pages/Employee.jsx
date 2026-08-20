import { useMemo, useState } from "react";
import { useEmployee } from "../../hooks/useEmployee";

import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeStats from "../components/employees/EmployeeStats";
import SearchFilterBar from "../components/employees/SearchFilterBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import Pagination from "../components/employees/Pagination";

const Employee = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [department, setDepartment] = useState("all");
  const [status, setStatus] = useState("all");

  const { data, isPending, onPageChange } = useEmployee();

  const employees = useMemo(() => {
    if (Array.isArray(data?.employees)) return data.employees;
    if (Array.isArray(data?.docs)) return data.docs;
    if (Array.isArray(data?.results)) return data.results;
    if (Array.isArray(data)) return data;
    return [];
  }, [data]);

  const pagination = {
    limit: 20,
    page: data?.pagination?.page || 1,
    total: data?.pagination?.total || employees.length,
    totalPages:
      data?.pagination?.totalPages ||
      Math.max(1, Math.ceil(employees.length / 20)),
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name?.toLowerCase().includes(search.toLowerCase()) ||
        employee.email?.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        role === "all" || employee.role?.toLowerCase() === role.toLowerCase();

      const matchesDepartment =
        department === "all" ||
        employee.department?.toLowerCase() === department.toLowerCase();

      const matchesStatus =
        status === "all" ||
        employee.status?.toLowerCase() === status.toLowerCase();

      return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
    });
  }, [employees, search, role, department, status]);

  const handleAddEmployee = () => {
    console.log("Add employee");
  };

  const handleView = (employee) => {
    console.log("View:", employee);
  };

  const handleEdit = (employee) => {
    console.log("Edit:", employee);
  };

  const handleToggleStatus = (employee) => {
    console.log("Toggle status:", employee);
  };

  return (
    <section className="min-h-screen bg-[var(--color-background)] p-6 md:p-8">
      <EmployeeHeader onAddEmployee={handleAddEmployee} />

      <EmployeeStats employees={employees} />

      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
      />

      {isPending && (
        <div className="mb-4 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500">
          Loading employees...
        </div>
      )}

      <EmployeeTable
        employees={filteredEmployees}
        onView={handleView}
        onEdit={handleEdit}
        onToggleStatus={handleToggleStatus}
      />

      <Pagination
        page={pagination.page}
        totalPages={pagination.totalPages}
        total={pagination.total}
        limit={pagination.limit}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default Employee;
