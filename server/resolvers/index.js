const resolvers = {
    Query: {
        transactions: async(_, {offset}, {db})=>{
            console.log(offset);
            const results = await db.query("SELECT * FROM transactions LIMIT 15 OFFSET $1", [offset]);
            console.log(results.rows);
            return results.rows;
        },
        count: async (_, __, {db})=>{
            const results = await db.query("SELECT COUNT(*) FROM transactions");
            return Number.parseInt(results.rows[0].count);
        },
    },
    Mutation: {
        create: async(_, Transactioninputs, {db})=>{
                console.log(Transactioninputs);
                const { sender, receiver, amount, timestamp} = Transactioninputs.input;
                const results = await db.query("INSERT INTO transactions(id, sender, receiver, amount, timestamp) VALUES(NEXTVAL('transaction_seq'), $1, $2, $3, $4)", [sender, receiver, Number.parseFloat(amount), timestamp]);
                console.log("transaction added to DB!!!!");
        }
    }
};

module.exports = resolvers;