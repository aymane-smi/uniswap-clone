import NavBar from "../NavBar";
import Swaper from "../Swaper";
import "./Home.scss";

function Home() {
  return (
    <div className=" w-[100vw] h-[100vh] radial">
      <NavBar />
      <Swaper />
    </div>
  );
}

export default Home;