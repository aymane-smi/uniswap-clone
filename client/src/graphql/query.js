import { useQuery } from "@apollo/client";
import { COUNT, SHOW_TRANSACTIONS } from "./schemas";

export const getTransactions = (offset)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    const { error, loading, data} = useQuery(SHOW_TRANSACTIONS, {
        variables: {offset,},
    });
    return {
        error,
        loading,
        data,
    };
}


export const getNumberOfTransactions = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { error, loading, data } = useQuery(COUNT);
    return { 
        error,
        loading,
        count: data,
    }
};