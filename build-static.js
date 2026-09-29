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
  'hero-video.mp4.mp4',
  'video.mp4'
];

for (const file of filesToCopy) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`[build-static] Copied: ${file}`);
  }
}

// Ensure hero-video.mp4, hero-video.mp4.mp4, and video.mp4 exist in images/
const imgDir = path.join(__dirname, 'images');
const heroMp4Double = path.join(imgDir, 'hero-video.mp4.mp4');
const heroMp4Upper = path.join(imgDir, 'hero-video.mp4.MP4');
const heroMp4Lower = path.join(imgDir, 'hero-video.mp4');
const videoMp4 = path.join(imgDir, 'video.mp4');

const sourceVideo = [heroMp4Double, heroMp4Upper, heroMp4Lower, videoMp4].find(p => fs.existsSync(p));
if (sourceVideo) {
  if (!fs.existsSync(heroMp4Double)) { try { fs.copyFileSync(sourceVideo, heroMp4Double); } catch(e){} }
  if (!fs.existsSync(heroMp4Upper)) { try { fs.copyFileSync(sourceVideo, heroMp4Upper); } catch(e){} }
  if (!fs.existsSync(heroMp4Lower)) { try { fs.copyFileSync(sourceVideo, heroMp4Lower); } catch(e){} }
  if (!fs.existsSync(videoMp4)) { try { fs.copyFileSync(sourceVideo, videoMp4); } catch(e){} }
}

// Sync new NAVATVA logo across images/ and intro/assets/
const srcLogo = "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790679439003.png";
const imgLogoPng = path.join(__dirname, 'images', 'ml_club_logo.png');
const imgLogoJpg = path.join(__dirname, 'images', 'ml_club_logo.jpg');
const introLogoPng = path.join(__dirname, 'intro', 'assets', 'ml-club-logo.png');
const introLogoJpg = path.join(__dirname, 'intro', 'assets', 'ml-club-logo.jpg');

let sourceLogo = null;
if (fs.existsSync(srcLogo)) {
  sourceLogo = srcLogo;
} else if (fs.existsSync(imgLogoPng)) {
  sourceLogo = imgLogoPng;
} else if (fs.existsSync(imgLogoJpg)) {
  sourceLogo = imgLogoJpg;
}

if (sourceLogo) {
  try {
    fs.copyFileSync(sourceLogo, imgLogoPng);
    fs.copyFileSync(sourceLogo, imgLogoJpg);
    const introAssetsDir = path.join(__dirname, 'intro', 'assets');
    if (!fs.existsSync(introAssetsDir)) {
      fs.mkdirSync(introAssetsDir, { recursive: true });
    }
    fs.copyFileSync(sourceLogo, introLogoPng);
    fs.copyFileSync(sourceLogo, introLogoJpg);
    console.log('[build-static] Synced NAVATVA logo to images/ and intro/assets/');
  } catch (err) {
    console.warn('[build-static] Could not sync logo:', err.message);
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
  try { fs.copyFileSync(foundIntro, destIntro); console.log('[build-static] Copied intro_session.jpg to images/'); } catch(e){}
}

const foundGithub = srcGithubCandidates.find(p => fs.existsSync(p));
if (foundGithub && !fs.existsSync(destGithub)) {
  try { fs.copyFileSync(foundGithub, destGithub); console.log('[build-static] Copied github_session.jpg to images/'); } catch(e){}
}

// Sync Principal photo (Dr. Shrinivasa Mayya D)
const srcPrincipalCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790705790687.jpg"
];
const destPrincipal = path.join(__dirname, 'images', 'principal_srinivasa_mayya.jpg');
const foundPrincipal = srcPrincipalCandidates.find(p => fs.existsSync(p));
if (foundPrincipal && !fs.existsSync(destPrincipal)) {
  try { fs.copyFileSync(foundPrincipal, destPrincipal); console.log('[build-static] Copied principal_srinivasa_mayya.jpg to images/'); } catch(e){}
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
