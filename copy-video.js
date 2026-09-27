import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const possibleNames = ['hero-video.mp4.mp4', 'hero-video.mp4'];

for (const name of possibleNames) {
  const src = path.join(__dirname, name);
  if (fs.existsSync(src)) {
    const dest = path.join(__dirname, 'public', 'hero-video.mp4');
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${name} to public/hero-video.mp4`);
    break;
  }
}
