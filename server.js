import { createRequestHandler } from "@remix-run/cloudflare";

export default {
  async fetch(request, env, ctx) {
    return createRequestHandler({ build: await import("./build/server.js") })(request, env, ctx);
  },
};
