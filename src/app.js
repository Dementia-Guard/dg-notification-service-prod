import Express from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config();

import db from "./config/DbCon.js";

const NOTI_SERVER_PORT = process.env.NOTI_SERVER_PORT

app.use(Express.json());

// import routes
import NotiRoute from "./routes/NotiRoute.js"
import response from "./utils/ResponseHandler/ResponseHandler.js"

// routes definition starts here
app.get("/", (req, res) => {
    return response(res,200,"Server Online")
})
app.use('/route',NotiRoute)

//db connction
db();

app.listen(NOTI_SERVER_PORT, () => {
    console.log(`Server is listening on ${NOTI_SERVER_PORT}`);
})