import AppLayout from "@/layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        // element: <Landing/>
      },
    ],
  },
]);

export default routers;
