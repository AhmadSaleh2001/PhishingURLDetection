import { Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
