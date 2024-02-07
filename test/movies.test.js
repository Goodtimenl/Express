const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  test("retourne un statut 200", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.status).toBe(200);
  });
});

describe("GET /api/movies/:id", () => {
  test("pour l'id 1, retourne un statut 200", async () => {
    const response = await request(app).get("/api/movies/1");
    expect(response.status).toBe(200);
  });

  test("pour l'id 1, retourne une réponse JSON", async () => {
    const response2 = await request(app).get("/api/movies/1");
    expect(response2.headers["content-type"]).toMatch(/json/);
  });

  test("pour l'id 0, retourne un statut 404", async () => {
    const response3 = await request(app).get("/api/movies/0");
    expect(response3.status).toBe(404);
  });
});
