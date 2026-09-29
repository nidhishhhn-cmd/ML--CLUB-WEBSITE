import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

console.log('[build-static] Preparing production output directory: dist/');

// Reset dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy individual core files to dist root
const filesToCopy = [
  'index.html',
  'members.html',
  'team.html',
  'index.css',
  '.nojekyll',
  'hero-video.mp4',
  'hero-video.mp4.mp4'
];

for (const file of filesToCopy) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`[build-static] Copied: ${file}`);
  }
}

// Copy directories recursively
const dirsToCopy = ['images', 'intro', 'assets', 'public'];

function copyDirRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const dir of dirsToCopy) {
  const src = path.join(__dirname, dir);
  if (fs.existsSync(src)) {
    const dest = path.join(distDir, dir);
    copyDirRecursive(src, dest);
    console.log(`[build-static] Copied directory: ${dir}/ -> dist/${dir}/`);
  }
}

console.log('[build-static] Build complete! Ready for Vercel / GitHub Pages deployment.');
