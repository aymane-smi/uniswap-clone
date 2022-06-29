const main = async()=>{
    const TransferContractFactory = await hre.ethers.getContractFactory("send");
    const TransferContract = await TransferContractFactory.deploy();
    await TransferContract.deployed();
    console.log(`contract deployed at: ${TransferContract.address}`);
    let txn = await TransferContract.sendingETH("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", {value: 10000});
    await txn.wait();
    console.log("eth sended with success!");
};

(async()=>{
    try{
        await main();
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
})();