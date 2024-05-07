import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";
const app = express();
dotenv.config();
app.use('/api', rootRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});
export const prismaClient = new PrismaClient({
    log: ['query']
});
app.listen(process.env.PORT, () => {
    console.log(`Listening at ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map