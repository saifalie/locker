import { Router } from "express";
import { handleFingerPrint, handleTest } from "../controllers/test.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const testRouter = Router()

testRouter.route("/1").get(handleTest)
testRouter.route("/7").post(upload.single("fingerprint"), handleFingerPrint)


export default testRouter