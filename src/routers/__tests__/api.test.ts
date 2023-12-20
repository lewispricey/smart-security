import request from "supertest";
import app from "../../app";

const baseURL = "/api/security";

describe("/", () => {
  test("200 - responds with a security object", async () => {
    const { status, body } = await request(app).get(baseURL + "/");
    expect(status).toBe(200);

    expect(body).toHaveProperty("zones");
    expect(body.zones.length > 0).toBe(true);
    body.zones.forEach((zone: any) => {
      expect(zone).toHaveProperty("name", expect.any(String));
      expect(zone).toHaveProperty("status", expect.any(String));
    });

    expect(body).toHaveProperty("users");
    expect(body.users.length > 0).toBe(true);
    body.users.forEach((user: any) => {
      expect(user).toHaveProperty("name", expect.any(String));
      expect(user).toHaveProperty("accessCode", expect.any(String));
    });
  });
});

describe("/health-check", () => {
  test("200 - responds with ok", async () => {
    const { status, body } = await request(app).get(baseURL + "/health-check");
    expect(status).toBe(200);
    expect(body).toEqual({ msg: "OK" });
  });
});

describe("/invalid-endpoint", () => {
  test("404 - responds with not found error", async () => {
    const { status, body } = await request(app).get(baseURL + "/not-here");
    expect(status).toBe(404);
    expect(body).toEqual({ msg: "Invalid Path" });
  });
});
