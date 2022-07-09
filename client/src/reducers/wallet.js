// eslint-disable-next-line import/no-anonymous-default-export
export default (wallet="", action)=>{
    switch(action.type){
        case "ADD_ACCOUNT":
            return action.payload;
        case "REMOVE_ACCOUNT":
            return "";
        default:
            return wallet;
    }
};