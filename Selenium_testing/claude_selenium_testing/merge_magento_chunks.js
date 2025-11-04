import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function mergeMagentoChunks() {
  const chunk1Path = path.join(__dirname, 'e2e_tests', 'magento_chunk1.test.js');
  const chunk2Path = path.join(__dirname, 'e2e_tests', 'magento_chunk2.test.js');
  const outputPath = path.join(__dirname, 'e2e_tests', 'magento.test.js');

  let chunk1 = await fs.readFile(chunk1Path, 'utf-8');
  let chunk2 = await fs.readFile(chunk2Path, 'utf-8');

  // Remove duplicate imports and setup code from chunk2
  chunk2 = chunk2
    .replace(/^import\s.+$/gm, '')
    // ... other removals as needed
    .replace(/main\(\).catch\(console\.error\);/g, '');

  const combined = `${chunk1}\n\n// --- chunk2 tests ---\n\n${chunk2}`;

  await fs.writeFile(outputPath, combined, 'utf-8');
  console.log(`Merged chunks into single test file at ${outputPath}`);
}

mergeMagentoChunks().catch(console.error);
