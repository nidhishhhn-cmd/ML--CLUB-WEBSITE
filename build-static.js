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
  'hero-video.mp4.mp4',
];

for (const file of filesToCopy) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`[build-static] Copied ${file} -> dist/`);
  }
}

// Copy essential folders recursively
const foldersToCopy = ['images', 'intro', 'public'];

for (const folder of foldersToCopy) {
  const src = path.join(__dirname, folder);
  if (fs.existsSync(src)) {
    fs.cpSync(src, path.join(distDir, folder), { recursive: true });
    console.log(`[build-static] Copied directory ${folder}/ -> dist/${folder}/`);
  }
}

// Copy public assets directly to dist root so they are accessible from /favicon.svg, /hero-video.mp4, etc.
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicEntries = fs.readdirSync(publicDir);
  for (const entry of publicEntries) {
    const src = path.join(publicDir, entry);
    const dest = path.join(distDir, entry);
    if (!fs.existsSync(dest)) {
      if (fs.statSync(src).isDirectory()) {
        fs.cpSync(src, dest, { recursive: true });
      } else {
        fs.copyFileSync(src, dest);
      }
    }
  }
}

// Ensure hero-video.mp4 is available at both images/ and root/public if found
const videoCandidate = path.join(__dirname, 'images', 'hero-video.mp4.MP4');
const publicHeroVideo = path.join(distDir, 'hero-video.mp4');
if (fs.existsSync(videoCandidate) && !fs.existsSync(publicHeroVideo)) {
  fs.copyFileSync(videoCandidate, publicHeroVideo);
}

console.log('✅ [build-static] Static site built successfully in dist/ for Vercel!');
