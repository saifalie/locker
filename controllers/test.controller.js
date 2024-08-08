import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { InvertColor } from "../utils/invertColor.js";
import Jimp from "jimp";



export const handleTest = asyncHandler(async (req, res) => {


    return res.status(200).json(new ApiResponse(200, { data: "nothing" }, "check"))

})



export const handleFingerPrint = asyncHandler(async (req, res) => {


    const body = req.body;
    const file = req.file;
    console.log(file);

    const filename = Date.now()
    console.log(body);
    await InvertColor(file.path, filename).then(() => {
        console.log("successfully inverted the image");

        return res.status(200).json(new ApiResponse(200, { body }, "finger print"));
    })
        .catch((error) => {
            console.log("failed to inver the image", error);
            throw new ApiError(500, "failed to take the image", error)

        })





})


