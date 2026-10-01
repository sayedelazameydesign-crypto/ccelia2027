import { describe, expect, it } from "vitest";
import worker from "../src/index.js";

describe("Worker foundation", () => {
  it("returns a no-store health response", async () => {
    const response = await worker.fetch(
      new Request("https://example.test/health"),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(await response.json()).toEqual({ ok: true, service: "ccelia2027" });
  });

  it("describes the foundation at the root", async () => {
    const response = await worker.fetch(new Request("https://example.test/"));

    expect(await response.json()).toEqual({
      name: "Ccelia 2027",
      status: "foundation",
      health: "/health",
    });
  });

  it("returns 404 for unknown paths", async () => {
    const response = await worker.fetch(
      new Request("https://example.test/missing"),
    );

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "Not found" });
  });

  it("rejects unsupported methods", async () => {
    const response = await worker.fetch(
      new Request("https://example.test/health", { method: "POST" }),
    );

    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET, HEAD");
  });
});
