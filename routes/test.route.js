import { Router } from "express";
import { handleFingerPrint, handleTest } from "../controllers/test.controller.js";


const testRouter = Router()

testRouter.route("/1").get(handleTest)
testRouter.route("/7").post(handleFingerPrint)


export default testRouter