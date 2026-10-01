function json(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return json({ error: "Method not allowed" }, 405, { allow: "GET, HEAD" });
    }

    if (url.pathname === "/health") {
      return json({ ok: true, service: "ccelia2027" });
    }

    if (url.pathname === "/") {
      return json({
        name: "Ccelia 2027",
        status: "foundation",
        health: "/health",
      });
    }

    return json({ error: "Not found" }, 404);
  },
};
