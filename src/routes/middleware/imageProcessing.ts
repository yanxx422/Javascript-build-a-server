import express from "express";
import path from "path";
import fs from "fs";
const sharp = require("sharp");

const imageProcessor = express.Router();

async function createThumb(
  width: number,
  height: number,
  infile: string,
  outfile: string
): Promise<void> {
  try {
    await sharp(infile).resize(width, height).toFile(outfile);
  } catch (err) {
    console.log(err);
  }
}

imageProcessor.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const width: string = req.query.width?.toString() || "400";
    const height: string = req.query.height?.toString() || "400";
    const imageName: string = req.query.name?.toString() || "";
    const imagePath: string = path.resolve(`assets/full/${imageName}`);
    const thumbPath = path.resolve(
      `assets/thumb/${width}x${height}-${imageName}`
    );
    const thumbDir = `assets/thumb`;
    if (fs.existsSync(thumbPath)) {
      res.sendFile(thumbPath);
    } else {
      await createThumb(
        parseInt(width),
        parseInt(height),
        imagePath,
        thumbPath
      );
      res.sendFile(thumbPath);
    }
  }
);

export default imageProcessor;
