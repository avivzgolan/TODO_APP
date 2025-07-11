import request from "supertest";
import app from "../app";
import pool from "../database";

beforeAll(async () => {
  await pool.query("TRUNCATE TABLE duties RESTART IDENTITY CASCADE");
});

afterAll(async () => {
  await pool.end();
});

describe("Duties API", () => {
  it("should return an empty list of duties initially", async () => {
    const response = await request(app).get("/duties");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should create a new duty", async () => {
    const newDuty = { name: "New Test Duty" };
    const response = await request(app)
      .post("/duties")
      .send(newDuty)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newDuty.name);
    expect(response.body).toHaveProperty("id");
  });

  it("should return the newly created duty in the list", async () => {
    const response = await request(app).get("/duties");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("New Test Duty");
  });

  it("should update the duty name", async () => {
    const duties = await request(app).get("/duties");
    const dutyId = duties.body[0].id;

    const updatedDuty = { name: "Updated Duty Name" };
    const response = await request(app)
      .put(`/duties/${dutyId}`)
      .send(updatedDuty)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Updated Duty Name");
  });

  it("should delete the duty", async () => {
    const duties = await request(app).get("/duties");
    const dutyId = duties.body[0].id;

    const response = await request(app).delete(`/duties/${dutyId}`);

    expect(response.status).toBe(204);
  });

  it("should return an empty list after deletion", async () => {
    const response = await request(app).get("/duties");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
