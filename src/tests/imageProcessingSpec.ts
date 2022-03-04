import app from "../server/index";
import fs from "fs";
import path from "path";
import supertest from "supertest";
import imageProcessor from "../routes/middleware/imageProcessing";

const request = supertest(app);

describe("test imageProcessing functionality", () => {
  it("Should create a re-sized image file in the thumb directory", async () => {
    const width = "200";
    const height = "300";
    const imageName = "fjord.jpg";
    const thumbPath = path.resolve(
      `assets/thumb/${width}x${height}-${imageName}`
    );
    const url = "/api/image/?name=fjord.jpg&width=200&height=300";
    const res = await request.get(url);

    expect(fs.existsSync(thumbPath)).toBeTrue();
    fs.unlinkSync(thumbPath);
  });
});
