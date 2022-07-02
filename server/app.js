const { ApolloServer } = require("apollo-server");
const Void  = require("./typeDefs/costumScalar");
const db = require("./db");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

//i prefer to work like this thank using
//an anonymous function like (()=>{})();
//it's hard to follow espacially for code reader!!!


const start = async ()=>{
    const server = new ApolloServer({
        resolvers: {
            Void,
            ...resolvers,
        },
        typeDefs,
        context: {db},
    });
    await server.listen(3000, ()=>{
        console.log("server started listing at PORT: 3000...");
    });
};

start();