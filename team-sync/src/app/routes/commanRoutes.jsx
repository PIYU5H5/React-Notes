import Home from "../../features/dashboard/ui/pages/Home";
import Setting from "../../features/settings/ui/pages/Setting";
import Chat from "../../features/chats/ui/pages/Chat";

export let commanRoutes = [
  {
    path: "",
    element: <Home />,
  },

  {
    path: "setting",
    element: <Setting />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
];
