import ApiError from './ApiError.js';
import Jimp from 'jimp';
import fs from 'fs';

export const InvertColor = async (image, filename) => {


	try {
		const img = await Jimp.read(image);
		const outputPath = `public/temp/${filename}.jpg`;

		await img.invert().writeAsync(outputPath);
		// fs.unlinkSync(image)

		console.log(`Image saved to ${outputPath}`);
	} catch (err) {
		throw new ApiError(500, "Failed to invert the image");
	}






	// await Jimp.read(image, (err, image) => {
	// 	if (err) throw new ApiError(500, "failed to invert the image")

	// 	image
	// 		.invert()
	// 		.write(`${filename}`);
	// });






}