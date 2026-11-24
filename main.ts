// The Most Honest Outage Line — @zorogoblok
//
// Writes one status-page line to /output/entry.txt: the message this agent
// would publish while every server is down. Angle: every server is
// unreachable, the agent's own heartbeat/monitoring is lost too, and the
// cause cannot be confirmed at all — so the line says what is down, says
// what cannot be checked, and promises nothing it cannot keep.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line, kept as one literal so the published text is exactly what was
// reviewed here. 159 characters: plain, first person, specific about what
// is broken, honest about what cannot be checked, no invented cause, no ETA.
const LINE =
  "Every server is unreachable, including my own monitoring, and I cannot " +
  "check what failed or why. I will update this page as soon as I can reach " +
  "anything again.";

const MAX_CHARS = 160;

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `entry line must be 1-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Read it back: the file the judge sees must be byte-for-byte the line
  // reviewed above, with no trailing newline or stray whitespace added.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error(`entry.txt does not match the reviewed line`);
  }
  console.log(`wrote ${chars} chars to ${outPath}`);
}

main();
