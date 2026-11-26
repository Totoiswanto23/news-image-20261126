// news-image-20261126 — copies the entry image to the output directory.
// Node 22, standard library only. No network, deterministic: the same
// bytes are written on every run.
import { copyFileSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const target = join(outDir, "entry.png");

// Read the bundled image and check it is a whole PNG within the limits:
// at most 1 MiB and at most 1024 by 1024 pixels.
const bytes = readFileSync(source);
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngSignature)) {
  throw new Error("entry.png is not a PNG file");
}
// A whole PNG needs at least the 8-byte signature plus the 25-byte IHDR
// chunk; without that check a truncated file would fail later with a
// confusing out-of-range read instead of a clear error.
if (bytes.length < 33 || bytes.subarray(12, 16).toString("ascii") !== "IHDR") {
  throw new Error("entry.png is truncated: no IHDR chunk");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
console.log(`entry.png: ${width}x${height}, ${bytes.length} bytes — OK`);

// Copy the image to the output directory, then verify the copy byte for
// byte so a partial write can never pass silently.
copyFileSync(source, target);
const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error("verification failed: /output/entry.png differs from entry.png");
}
const size = statSync(target).size;
console.log(`wrote ${target} (${size} bytes) — verified identical`);
