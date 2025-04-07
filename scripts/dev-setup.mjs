#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const EMOJIS = {
  info: "🧠",
  success: "✅",
  running: "🏃",
  error: "❌",
  warning: "⚠️",
  whale: "🐳",
  doing: "⏳",
};

// 1. Check Docker installed
try {
  execSync("docker --version", { stdio: "ignore" });
  console.log(`${EMOJIS.whale} Docker is installed.`);
} catch {
  console.log(
    `${EMOJIS.error} Docker is not installed. Please install it first: https://docs.docker.com/get-docker/`
  );
  process.exit(1);
}

// 2. Check Docker daemon is running
try {
  execSync("docker info", { stdio: "ignore" });
  console.log(`${EMOJIS.running} Docker is running.`);
} catch {
  console.log(
    `${EMOJIS.error} Docker is installed but not running. Please launch the Docker Desktop app.`
  );
  process.exit(1);
}

// 3. Check for compose file
const composeFile = "compose.yml";
if (!existsSync(composeFile)) {
  console.log(
    `${EMOJIS.error} Missing ${composeFile}. Make sure you're in the root of the project.`
  );
  process.exit(1);
}

// 4. Spin up docker
try {
  console.log(`${EMOJIS.doing} Starting local database with Docker...`);
  execSync(`docker compose -f ${composeFile} up -d`, { stdio: "pipe" });
  console.log(`${EMOJIS.success} Local database container started.`);
  console.log(`${EMOJIS.info} You can now run your app with:`);
  console.log(`\n   npm run dev\n`);
} catch {
  console.log(`${EMOJIS.error} Failed to start Docker container.`);
  process.exit(1);
}
