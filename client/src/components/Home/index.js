import NavBar from "../NavBar";
import Swaper from "../Swaper";
import "./Home.scss";
import { toast, ToastContainer } from "react-toastify";

function Home() {
  return (
    <div className=" w-[100vw] h-[100vh] radial">
      <NavBar />
      <Swaper />
      <ToastContainer autoClose={1500} position={toast.POSITION.BOTTOM_RIGHT}/>
    </div>
  );
}

export default Home;