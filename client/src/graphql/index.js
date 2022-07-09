import { useMutation, useQuery } from "@apollo/client";
import { ADD_TRANSACTION, SHOW_TRANSACTIONS } from "./schemas";
export const addTransaction = (props, sender, receiver, amount)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mutationFunction, { error, loading, data}] = useMutation(ADD_TRANSACTION);
    const inputs = {
        sender,
        receiver,
        amount,
        timestamp: new Date(),
    }
    mutationFunction({variables: {input: inputs}});

    return { error, loading, data };
};

export const getTransactions = (offset)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { error, loading, data } = useQuery(SHOW_TRANSACTIONS, {variables: { offset: 10}});
    return { error, loading, data}
};