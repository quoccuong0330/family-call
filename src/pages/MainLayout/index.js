import { Outlet } from "react-router-dom";
import SideBarComponent from "../../components/SideBarComponent";

export default function MainLayout() {
  return (
    <div class="wrapper">
      <SideBarComponent />
      <div className="">
      <Outlet />
      </div>
    </div>
  );
}
