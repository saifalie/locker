import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";



export const handleTest = asyncHandler(async (req, res) => {


    return res.status(200).json(new ApiResponse(200, { data: "nothing" }, "check"))

})



export const handleFingerPrint = asyncHandler(async (req, res) => {


    const body = req.body;
    console.log(body);
    return res.status(200).json(new ApiResponse(200, { body }, "data sent"));


})