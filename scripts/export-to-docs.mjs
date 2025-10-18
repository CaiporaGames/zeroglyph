import fs from "fs/promises";
import path from "path";
const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

async function main() {
  // ensure Next actually created /out
  try { await fs.stat(outDir); } 
  catch { 
    console.error("`out/` not found. Did you run `next build` with output:'export'?");
    process.exit(1);
  }

  await fs.rm(docsDir, { recursive: true, force: true });
  await fs.mkdir(docsDir, { recursive: true });
  await fs.cp(outDir, docsDir, { recursive: true });
  await fs.writeFile(path.join(docsDir, ".nojekyll"), "");
  console.log("✓ Copied out → docs and wrote .nojekyll");
}
main();
