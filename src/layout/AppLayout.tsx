import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const AppLayout = () => {
  return (
    <Fragment>
      <main>
        {/* Header */}
        <Outlet />
      </main>
      {/* Footer */}
    </Fragment>
  );
};

export default AppLayout;
