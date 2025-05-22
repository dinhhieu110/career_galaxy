import AppLayout from "@/layout/AppLayout";
import { Landing } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

export default routers;
