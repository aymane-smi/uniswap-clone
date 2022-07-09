import NavBar from "../NavBar";
import "../Home/Home.scss";
import Transactions from "../Transactions.js";


const History = ()=>{
    return (<div className=" w-[100vw] h-[100vh] radial">
        <NavBar />
        <Transactions />
    </div>)
};

export default History;