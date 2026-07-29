import dotenv from "dotenv";

dotenv.config();

const env = {

    PORT: Number(process.env.PORT) || 4000,

    NODE_ENV: process.env.NODE_ENV || "development",

    MIN_QUERY_LENGTH:
        Number(process.env.MIN_QUERY_LENGTH) || 4,

    MAX_SUGGESTIONS:
        Number(process.env.MAX_SUGGESTIONS) || 20

};

export default Object.freeze(env);