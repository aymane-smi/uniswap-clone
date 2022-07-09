import { FiSettings } from "react-icons/fi";
import { BsArrowDownShort }from "react-icons/bs";
import "./Swaper.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Swap } from "../../actions";
import { ADD_TRANSACTION } from "../../graphql/schemas";
import { useMutation } from "@apollo/client";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

const Swaper = ()=>{
    const [amount, setAmount] = useState(0);
    const [receiver, setReceiver] = useState("");
    const { wallet: selector} = useSelector(wallet => wallet);
    const [mutationFunction, { error, loading, data}] = useMutation(ADD_TRANSACTION);
    const handleChange = (evt) => {
        // eslint-disable-next-line default-case
        switch(evt.target.name){
            case "amount":
                if(isNaN(evt.target.value))
                    setAmount(0.0);
                else
                    setAmount(evt.target.value);
                break;
            case "address":
                setReceiver(evt.target.value);
                break;
        }
    };
    const handleSubmit = async(evt)=>{
        evt.preventDefault();
        setAmount(Number.parseFloat(amount));
        if(amount === 0){
            console.log("please enter a value greater than 0!");
            return;
        }
        await Swap(receiver, amount, selector);
        await mutationFunction({variables: {input: {
            selector,
            receiver,
            amount,
            timestamp: new Date(),
        }}});
        console.log(error, loading, data);
        setAmount(0.0);
        setReceiver(NULL_ADDRESS);
    };
    return (<main className="flex justify-center h-[50%] items-center">
        <section className="w-[28%] bg-[#191b1f] rounded-[15px] px-[14px] py-[9px]">
            <header className="flex justify-between">
                <p className="text-white font-semibold">Swap</p>
                <FiSettings color="white" size={22} className="cursor-pointer"/>
            </header>
            <form onSubmit={handleSubmit} className="mt-5 relative">
                    <input className="pl-5 font-bold text-gray-600 w-full bg-[#212429] h-[65px] mt-[3px] rounded-[15px] hover:border-[0.3px] hover:border-gray-600"
                                    type="text"
                                    name="amount"
                                    onChange={handleChange}
                                    value={amount}
                                    />
                    <BsArrowDownShort color="#747b8d" size={42} className="absolute top-[26%] font-bold left-[45%] border-[#191b1f] font-[20px] bg-[#212429] rounded-[13px] border-[5px] "/>
                    <input className="pl-5 pr-2 font-bold text-gray-600 mt-[6px] w-full bg-[#212429] h-[65px] my-2 rounded-[15px] hover:border-[0.3px] hover:border-gray-600"
                                    type="text"
                                    value={receiver}
                                    name="address"
                                    placeholder={NULL_ADDRESS.slice(0, 6)+"..."+NULL_ADDRESS.slice(7)}
                                    onChange={handleChange}
                    />
                    <button className="hover:bg-[#13366270] rounded-md bg-[#172941] w-full text-[#4680d0] px-3 py-2 text-[15px] font-bold h-[60px] capitalize rounded-[17px]"
                                    disabled={selector === "" ? true : false}
                                    >
                        {selector === "" ? "please connect to swap" : "swap"}
                    </button>
                </form>
        </section>
    </main>)
};

export default  Swaper;