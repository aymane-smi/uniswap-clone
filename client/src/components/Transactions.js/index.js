import { useQuery } from "@apollo/client";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getNumberOfTransactions, getTransactions } from "../../graphql/query";

const Transactions = ()=>{
    const [offset, setOffset] = useState(0);
    let { error, loading, data } = getTransactions(offset);
    const { count } = getNumberOfTransactions();
    const { wallet : selector} = useSelector(wallet => wallet);
    const prev = ()=>{
        if(offset-15 > 0)
            setOffset((prev)=> prev-15);
    }
    const next = ()=>{
        if(offset+15 < count.count)
            setOffset((prev)=> offset+2);
    }
    return (<main className="flex justify-center h-[50%] items-center mt-[80px]">
        <section className="w-[80%] bg-[#191b1f] rounded-[15px] px-[14px] py-[9px]">
                {/*title ofthe table*/}
                <div className="flex justify-around border-b-[3px] border-gray-700 pb-[6px] mb-[6px]">
                    <p className="capitalize text-gray-500 font-bold">sender</p>
                    <p className="capitalize text-gray-500 font-bold">receiver</p>
                    <p className="capitalize text-gray-500 font-bold">amount</p>
                    <p className="capitalize text-gray-500 font-bold">data</p>
                </div>
                {/*mapping data*/}
                {!loading ? data.transactions?.map((transaction, i)=>(
                    <div className="flex justify-between items-center border-b-[1px] border-gray-700 pb-[6px] mb-[6px]" key={i}>
                        <p className={`capitalize ${selector === transaction.sender ? "text-yellow-800" : "text-gray-500"} font-bold`}>{(transaction.sender).slice(0, 6)+"..."+(transaction.sender).slice(30)}</p>
                        <p className={`capitalize ${selector === transaction.receiver ? "text-yellow-800" : "text-gray-500"} font-bold`}>{(transaction.receiver).slice(0, 6)+"..."+(transaction.receiver).slice(30)}</p>
                        <p className="capitalize text-gray-500 font-bold">{transaction.amount} ETH</p>
                        <p className="capitalize text-gray-500 font-bold items-center justify-center">{transaction.timestamp}</p>
                </div>
                )) : "please wait"}
                <div className="flex w-full justify-center items-center">
                    <AiOutlineLeft className="text-blue-400" size={25} onClick={prev}/>
                    <AiOutlineRight className="text-blue-400" size={25} onClick={next}/>
                </div>
        </section>
    </main>)
};


export default Transactions;