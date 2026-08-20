import {
  Building2,
  ClipboardList,
  ChartArea,
  File,
  LayoutDashboard,
  Users,
  PersonStandingIcon,
  Presentation,
  Settings,
  MessageCircle,
} from "lucide-react";

export const employeeNavigation = [
  {
    title: "Dashboard",
    path: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "My-Task",
    path: "/home/myTask",
    icon: ClipboardList,
  },
  {
    title: "Chats",
    path: "/home/chat",
    icon: MessageCircle,
  },
  {
    title: "Attendance",
    path: "/home/attendance",
    icon: Presentation,
  },
  {
    title: "Profile",
    path: "/home/profile",
    icon: PersonStandingIcon,
  },
  {
    title: "Settings",
    path: "/home/setting",
    icon: Settings,
  },
];

export const adminNavigation = [
  {
    title: "Dashboard",
    path: "/home",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    path: "/home/employee",
    icon: Users,
  },
  {
    title: "Departments",
    path: "/home/department",
    icon: Building2,
  },
  {
    title: "Tasks",
    path: "/home/task",
    icon: ClipboardList,
  },
  {
    title: "Chats",
    path: "/home/chat",
    icon: MessageCircle,
  },
  {
    title: "Documents",
    path: "/home/document",
    icon: File,
  },
  {
    title: "Settings",
    path: "/home/setting",
    icon: Settings,
  },
];
