#!/usr/bin/env node
import { execSync } from "node:child_process";

const PROJECT = "website";
const BRANCH = "main";

function run(command, { allowFailure = false } = {}) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    if (!allowFailure) {
      throw error;
    }
  }
}

// Pages project must exist before `pages deploy` — create once, ignore if already there.
run(
  `npx wrangler pages project create ${PROJECT} --production-branch=${BRANCH}`,
  { allowFailure: true },
);

run(`npx wrangler pages deploy out --project-name=${PROJECT}`);
