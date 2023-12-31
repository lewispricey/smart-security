import request from "supertest";
import app from "../app";

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

describe("/zone", () => {
  describe("POST", () => {
    test("201 - responds with the new zone", async () => {
      const { status, body } = await request(app)
        .post(baseURL + "/zone")
        .send({ name: "New-Zone" });
      expect(status).toBe(201);
      expect(body).toEqual({ name: "New-Zone", status: "disarmed" });
    });

    test("400 - responds with error when name is missing", async () => {
      const { status, body } = await request(app)
        .post(baseURL + "/zone")
        .send({});
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Name is required" });
    });
  });
  describe("PATCH", () => {
    test("200 - responds with the updated zone", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/zone/New-Zone")
        .send({ status: "armed" });
      expect(status).toBe(200);
      expect(body).toEqual({ name: "New-Zone", status: "armed" });
    });
    test("404 - responds with not found error", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/zone/Not-a-Zone")
        .send({ status: "armed" });
      expect(status).toBe(404);
      expect(body).toEqual({ msg: "Zone not found" });
    });

    test("400 - responds with error when status is missing", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/zone/New-Zone")
        .send({});
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Status is required" });
    });

    test("400 - responds with error when status is not armed or disarmed", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/zone/New-Zone")
        .send({ status: "not-a-status" });
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Status is required" });
    });
  });
  describe("DELETE", () => {
    test("204 - responds with no content", async () => {
      const { status } = await request(app).delete(baseURL + "/zone/New-Zone");
      expect(status).toBe(204);
    });

    test("404 - responds with not found error", async () => {
      const { status, body } = await request(app).delete(
        baseURL + "/zone/Not-a-Zone"
      );
      expect(status).toBe(404);
      expect(body).toEqual({ msg: "Zone not found" });
    });
  });
});

describe("/users", () => {
  describe("POST", () => {
    test("201 - responds with the new user", async () => {
      const { status, body } = await request(app)
        .post(baseURL + "/user")
        .send({ name: "New-User", accessCode: "1234" });
      expect(status).toBe(201);
      expect(body).toEqual({ name: "New-User", accessCode: "1234" });
    });

    test("400 - responds with error when name is missing", async () => {
      const { status, body } = await request(app)
        .post(baseURL + "/user")
        .send({ accessCode: "1234" });
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Name and access code are required" });
    });

    test("400 - responds with error when accessCode is missing", async () => {
      const { status, body } = await request(app)
        .post(baseURL + "/user")
        .send({ name: "New-User" });
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Name and access code are required" });
    });
  });

  describe("PATCH", () => {
    test("200 - responds with the updated user", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/user/New-User")
        .send({ accessCode: "9823" });
      expect(status).toBe(200);
      expect(body).toEqual({ name: "New-User", accessCode: "9823" });
    });

    test("404 - responds with not found error", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/user/Not-a-User")
        .send({ accessCode: "9823" });
      expect(status).toBe(404);
      expect(body).toEqual({ msg: "User not found" });
    });

    test("400 - responds with error when accessCode is missing", async () => {
      const { status, body } = await request(app)
        .patch(baseURL + "/user/New-User")
        .send({});
      expect(status).toBe(400);
      expect(body).toEqual({ msg: "Access code is required" });
    });
  });

  describe("DELETE", () => {
    test("204 - responds with no content", async () => {
      const { status } = await request(app).delete(baseURL + "/user/New-User");
      expect(status).toBe(204);
    });

    test("404 - responds with not found error", async () => {
      const { status, body } = await request(app).delete(
        baseURL + "/user/Not-a-User"
      );
      expect(status).toBe(404);
      expect(body).toEqual({ msg: "User not found" });
    });
  });
});
