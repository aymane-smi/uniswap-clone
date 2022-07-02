const resolvers = {
    Query: {
        transactions: async(_, {offset}, {db})=>{
            console.log(offset);
            const results = await db.query("SELECT * FROM transactions LIMIT 15 OFFSET $1", [offset]);
            console.log(results.rows);
            return results.rows;
        }
    },
    Mutation: {
        create: async(_, Transactioninputs, {db})=>{
                const { sender, receiver, amount, timestamp} = Transactioninputs.input;
                const results = await db.query("INSERT INTO transactions(id, sender, receiver, amount, timestamp) VALUES(NEXTVAL('transaction_seq'), $1, $2, $3, $4)", [sender, receiver, amount, timestamp]);
                console.log("transaction added to DB!!!!");
        }
    }
};

module.exports = resolvers;