import { NavLink } from "react-router-dom";
const Tabs = ()=>{
    return (<section className="bg-[#191b1f] text-gray-300 font-bold text-[13px] capitalize rounded-[21px] py-1 flex justify-between items-center gap-[10px] px-[3px]">
        <NavLink to="/" className={({isActive})=> isActive ? "text-white rounded-[21px] bg-gray-600 p-2" : ""}>Swap</NavLink>
        <NavLink to="/history" className={({isActive})=> isActive ? "text-white rounded-[21px] bg-gray-600 p-2" : ""}>History</NavLink>
    </section>);
};

export default Tabs;