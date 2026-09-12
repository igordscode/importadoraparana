import { readFile, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import path from 'node:path';

const root = process.cwd();
const parts = [];

for (let index = 0; index < 7; index += 1) {
  const part = await readFile(
    path.join(root, 'public', 'proposal-final', `part-${index}.txt`),
    'utf8',
  );
  parts.push(part.trim());
}

const compressed = Buffer.from(parts.join(''), 'base64');
const pdf = gunzipSync(compressed);

if (pdf.length !== 67872 || !pdf.subarray(0, 5).equals(Buffer.from('%PDF-'))) {
  throw new Error(`Proposal payload invalid: ${pdf.length} bytes`);
}

await writeFile(path.join(root, 'public', 'proposta-final.pdf'), pdf);

console.log(`Prepared proposta-final.pdf (${pdf.length} bytes)`);
