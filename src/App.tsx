import { RouterProvider } from "react-router-dom";
import routers from "./routers";
import SystemProvider from "./context";

const App = () => {
  return (
    <SystemProvider>
      <RouterProvider router={routers} />
    </SystemProvider>
  );
};

export default App;
