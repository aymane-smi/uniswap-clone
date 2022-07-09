import { BsThreeDots, BsMoon }from "react-icons/bs";
import { img } from "./ether-logo";
import { IoIosArrowDown, IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Connect, Disconnect } from "../../../actions";
const Settings = ()=>{
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const {wallet : selector} = useSelector((wallet)=>wallet);
    return (
        <>
        <section className="flex gap-[20px] items-center">
            <div className="rounded-[17px] bg-[#191b1f] text-white px-3 text-[15px] font-bold h-fit capitalize flex gap-3 py-2 items-center">
                <img className="w-6 h-6" alt="ether" src={img} />
                Ethereum
                <IoIosArrowDown />
            </div>
            <button className="rounded-md bg-[#172941] text-[#4680d0] px-3 py-2 text-[15px] font-bold h-fit capitalize rounded-[17px] border-[1px] border-black"
                        onClick={()=>{
                            selector === "" ? dispatch(Connect()) : dispatch(Disconnect());
                        }}>
                { selector === "" ? "connect wallet" : selector.slice(0, 12)+"..."}
            </button>
            <ul onClick={()=>setShow(!show)}>
                <li className="font-bold text-[15px] py-2 rounded-[17px] bg-[#191b1f] px-3 relative hover:border-white hover:border-[1px] cursor-pointer">
                    <BsThreeDots color="white" size={24}/>
                </li>
                {show && (
                    <ul className="absolute top-[70px] bg-[#191b1f] text-gray-500 px-3 py-2 translate-x-[-80px] rounded-[14px] flex flex-col w-[150px]">
                        <li className="flex justify-between">
                            <span>about</span>
                            <AiOutlineInfoCircle size={16} color="gray" className="translate-y-[7px]"/>
                        </li>
                        <li className="flex justify-between">
                            <span>Help Center</span>
                            <IoIosHelpCircleOutline size={16} color="gray" className="translate-y-[7px]"/>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Light Theme</span>
                            <BsMoon size={12} color="gray" className="translate-y-[2px]"/>
                        </li>
                    </ul>
                )}
            </ul>
        </section>
        </>
    )
};

export default Settings;