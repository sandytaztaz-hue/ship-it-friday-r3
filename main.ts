import * as fs from "node:fs";

// One-liner entry: the commit message an AI agent writes right before Friday production breaks.
const line = "fix: delete the debug print that turned out to be the entire payment flow";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line + "\n");
