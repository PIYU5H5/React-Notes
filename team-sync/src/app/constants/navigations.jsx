import {
    Building,
  ChartArea,
  File,
  Icon,
  LayoutDashboard,
  List,
  PersonStandingIcon,
  Presentation,
  Settings,
} from "lucide-react";
import { Profiler } from "react";

export let employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    Icon: <LayoutDashboard />,
  },
  {
    path: "/home/myTask",
    title: "My-Task",
    Icon: <List />,
  },
  {
    path: "/home/chat",
    title: "chats",
    Icon: <ChartArea />,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    Icon: <Presentation />,
  },
  {
    path: "/home/profile",
    title: "Proile",
    Icon: <PersonStandingIcon />,
  },
  {
    path: "/home/setting",
    title: "Settings",
    Icon: <Settings />,
  },
];
export let adminNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    Icon: <LayoutDashboard />,
  },
  {
    path: "/home/task",
    title: "Task",
    Icon: <List />,
  },
  {
    path: "/home/department",
    title: "Department",
    Icon: <Building />,
  },
  {
    path: "/home/chat",
    title: "Chats",
    Icon: <ChartArea />,
  },
  {
    path: "/home/employee",
    title: "Employee",
    Icon: <Presentation />,
  },
  {
    path: "/home/document",
    title: "Documents",
    Icon: <File />,
  },
  {
    path: "/home/setting",
    title: "Settings",
    Icon: <Settings />,
  },
];
