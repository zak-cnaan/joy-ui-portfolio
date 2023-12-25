import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <div>main layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
