import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/posts/[slug]", () => {
  test("with no existing post", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/posts/post-nao-existe",
    );
    expect(response.status).toBe(404);
    const error = await response.json();
    expect(error).toEqual({
      name: "NotFoundError",
      action: "Verifique se os dados de consulta estão corretos.",
      message: "Post não encontrado.",
      status_code: 404,
    });
  });
});
