import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const index = () => {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
   
    </div>
    </div>
  )
}

export default index