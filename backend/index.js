import dotenv from "dotenv";

dotenv.config();

console.log("Servidor iniciando...");
console.log("PORT =", process.env.PORT);
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("MIN_QUERY_LENGTH =", process.env.MIN_QUERY_LENGTH);
console.log("MAX_SUGGESTIONS =", process.env.MAX_SUGGESTIONS);