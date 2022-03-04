import app from "../server/index";
import fs from "fs";
import path from "path";
import supertest from "supertest";

const request = supertest(app);

describe("Server is running", function () {
  it("Should return 200 status", function (done) {
    request.get("/").expect(200);
    done();
  });
  it("should resize image succesfully", async () => {
    const res = await request.get(
      "/api/image/?name=fjord.jpg&width=200&height=300"
    );
    expect(res.status).toBe(200);
    fs.unlinkSync(path.resolve("assets/thumb/fjord.jpg_200x300.jpg"));
  });
});
