// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner (<= 200 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can heal any wound instantly, but only paper cuts, and only other people's, and only on Tuesdays.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Fail loudly rather than ever writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
