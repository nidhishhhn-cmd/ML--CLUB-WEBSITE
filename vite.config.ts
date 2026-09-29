import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcIntroCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790703005599.jpg",
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\209f3122-2536-466b-947f-01af2718af77\\.user_uploaded\\media_1790505991581.jpg"
]
const srcGithubCandidates = [
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\52e51adf-fcd9-4d67-b5a9-2d78a9366505\\.user_uploaded\\media_1790702907184.jpg",
  "C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\209f3122-2536-466b-947f-01af2718af77\\.user_uploaded\\media_1790505991595.jpg"
]

const srcIntro = srcIntroCandidates.find(p => fs.existsSync(p))
const srcGithub = srcGithubCandidates.find(p => fs.existsSync(p))

function syncPhotos() {
  const imagesDir = path.resolve(__dirname, 'images')
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true })

  const publicImagesDir = path.resolve(__dirname, 'public', 'images')
  if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true })

  if (srcIntro) {
    try {
      fs.copyFileSync(srcIntro, path.join(imagesDir, 'intro_session.jpg'))
      fs.copyFileSync(srcIntro, path.join(publicImagesDir, 'intro_session.jpg'))
      console.log('[vite] Synced intro_session.jpg')
    } catch (e) {
      console.error(e)
    }
  }

  if (srcGithub) {
    try {
      fs.copyFileSync(srcGithub, path.join(imagesDir, 'github_session.jpg'))
      fs.copyFileSync(srcGithub, path.join(publicImagesDir, 'github_session.jpg'))
      console.log('[vite] Synced github_session.jpg')
    } catch (e) {
      console.error(e)
    }
  }
}

syncPhotos()

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-visionaries-photos',
      configureServer(server) {
        syncPhotos()
        server.middlewares.use((req, res, next) => {
          const url = req.url || ''
          if (url.includes('intro_session.jpg') && srcIntro && fs.existsSync(srcIntro)) {
            res.setHeader('Content-Type', 'image/jpeg')
            return fs.createReadStream(srcIntro).pipe(res)
          }
          if (url.includes('github_session.jpg') && srcGithub && fs.existsSync(srcGithub)) {
            res.setHeader('Content-Type', 'image/jpeg')
            return fs.createReadStream(srcGithub).pipe(res)
          }
          next()
        })
      }
    }
  ],
})
