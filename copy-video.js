import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const possibleSrcs = [
  path.join(__dirname, 'images', 'hero-video.mp4.mp4'),
  path.join(__dirname, 'images', 'hero-video.mp4'),
  path.join(__dirname, 'hero-video.mp4.mp4'),
  path.join(__dirname, 'hero-video.mp4')
];

for (const src of possibleSrcs) {
  if (fs.existsSync(src)) {
    const dest = path.join(__dirname, 'public', 'hero-video.mp4');
    const destImg = path.join(__dirname, 'images', 'hero-video.mp4');
    try { fs.copyFileSync(src, dest); } catch(e){}
    try { if (!fs.existsSync(destImg)) fs.copyFileSync(src, destImg); } catch(e){}
    console.log(`Successfully synced video to public/hero-video.mp4`);
    break;
  }
}

// Sync Visionaries gallery photos
const srcIntroCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790703005599.jpg",
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\209f3122-2536-466b-947f-01af2718af77\\.user_uploaded\\media_1790505991581.jpg"
];
const srcGithubCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790702907184.jpg",
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\209f3122-2536-466b-947f-01af2718af77\\.user_uploaded\\media_1790505991595.jpg"
];

const destIntro = path.join(__dirname, 'images', 'intro_session.jpg');
const destGithub = path.join(__dirname, 'images', 'github_session.jpg');

const foundIntro = srcIntroCandidates.find(p => fs.existsSync(p));
if (foundIntro && !fs.existsSync(destIntro)) {
  try { fs.copyFileSync(foundIntro, destIntro); console.log('[copy-video] Copied intro_session.jpg to images/'); } catch(e){}
}

const foundGithub = srcGithubCandidates.find(p => fs.existsSync(p));
if (foundGithub && !fs.existsSync(destGithub)) {
  try { fs.copyFileSync(foundGithub, destGithub); console.log('[copy-video] Copied github_session.jpg to images/'); } catch(e){}
}

// Sync Principal photo (Dr. Shrinivasa Mayya D)
const srcPrincipalCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790705790687.jpg"
];
const destPrincipal = path.join(__dirname, 'images', 'principal_srinivasa_mayya.jpg');
const foundPrincipal = srcPrincipalCandidates.find(p => fs.existsSync(p));
if (foundPrincipal && !fs.existsSync(destPrincipal)) {
  try { fs.copyFileSync(foundPrincipal, destPrincipal); console.log('[copy-video] Copied principal_srinivasa_mayya.jpg to images/'); } catch(e){}
}


