/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    server: "./server.js",
    serverBuildPath: "functions/[[path]].js",
    serverModuleFormat: "esm",
    serverPlatform: "neutral",
    serverConditions: ["worker"],
    serverDependenciesToBundle: "all",
  };
  