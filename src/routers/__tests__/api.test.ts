import request from "supertest";
import app from "../../app";

const baseURL = "/api/security";

describe("/health-check", () => {
  test("200 - responds with ok", async () => {
    const { status, body } = await request(app).get(baseURL + "/health-check");
    expect(status).toBe(200);
    expect(body).toEqual({ msg: "OK" });
  });
});
