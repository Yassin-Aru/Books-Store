import express  from "express";
import { PORT } from "./config";


const app = express();

app.listen(POR, () => {
    console.log(`App is listening on port: ${PORT}`);
})