const fs = require("node:fs");

const files = ["viewport-frames.css", "demo.css"].filter((file) => fs.existsSync(file));

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  let depth = 0;
  let line = 1;
  let column = 0;

  for (const char of source) {
    column += 1;

    if (char === "\n") {
      line += 1;
      column = 0;
      continue;
    }

    if (char === "{") {
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;
    }

    if (depth < 0) {
      throw new Error(`${file}:${line}:${column} has an unmatched closing brace`);
    }
  }

  if (depth !== 0) {
    throw new Error(`${file} has ${depth} unmatched opening brace(s)`);
  }

  console.log(`${file} ok`);
}
