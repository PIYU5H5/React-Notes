import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Department from "../../features/admin module/tasks/ui/pages/Tasks";
import Task from "../../features/admin module/tasks/ui/pages/Tasks";
import Document from "../../features/admin module/documents/ui/pages/Document";

export let adminRoutes = [
  {
    path: "/home/employee",
    element: <Employee />,
  },
  {
    path: "/home/department",
    element: <Department />,
  },
  {
    path: "/home/task",
    element: <Task />,
  },
  {
    path: "/home/dcoument",
    element: <Document />,
  },
];
