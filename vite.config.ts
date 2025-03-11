import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  cacheDir: './.vite-cache',
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  optimizeDeps: {
    include: ["@remix-run/react", "@remix-run/node", "@remix-run/dev"],
    exclude: ["@remix-run/react"],
  },
  esbuild: {
    target: "esnext",
    minify: true,
  },
});
