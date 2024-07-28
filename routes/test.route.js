import { Router } from "express";
import { handleTest } from "../controllers/test.controller.js";


const testRouter = Router()

testRouter.route("/1").get(handleTest)


export default testRouter