import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import "./Default.css"
export default function Default(){
  return(
    <div className="layout">
    <SideBar/>
    <div className="content">
      <Outlet/>
    </div>
   </div>
  )
}