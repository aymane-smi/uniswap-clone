import { ethers } from "ethers";
import { abi } from "../ABI";
const CONTRACT = "0x468C6eC6F86652236d56A0623c6623125c10eA11";
//actions

//connect wallet
export const Connect = ()=>(async (dispatch)=>{
        const {ethereum} = window;
        if(!ethereum){
            console.log("please install a wallet!");
            return;
        }
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        if(accounts.length !== 0){
            console.info("wallet Connected");
            console.info("wallet: ", accounts[0]);
            dispatch({type: "ADD_ACCOUNT", payload: accounts[0]});
        }  
});

export const Disconnect = ()=>(async (dispatch)=>{
    dispatch({type: "REMOVE_ACCOUNT"});
});

export const Swap = async (address, amount, sender)=>{
    try{
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT, abi.abi, signer);
        let txn = await contract.sendingETH(address, {value: ethers.utils.parseEther(`${amount}`)});
        await txn.wait();

    }catch(err){
        console.log(err);
        console.log("check your account balance or the receveier address!!");
    }
}