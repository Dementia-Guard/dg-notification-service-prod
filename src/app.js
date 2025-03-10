import Express from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config();

import db from "./config/DbCon.js";

const SERVER_PORT = process.env.SERVER_PORT || 9879

app.use(Express.json());

// import routes
import NotiRoute from "./routes/NotiRoute.js"
import response from "./utils/ResponseHandler/ResponseHandler.js"

// routes definition starts here
app.get("/", (req, res) => {
    return response(res,200,"Server Online")
})
app.use('/api/v1/notification',NotiRoute)

//db connction
db();

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on ${SERVER_PORT}`);
})