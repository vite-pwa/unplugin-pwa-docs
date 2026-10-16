import { promises as fs } from 'node:fs'
import sharp from 'sharp'

async function createWebp() {
  for await (const image of await fs.opendir('./avatars')) {
    if (image.isFile() && image.name.endsWith('.png')) {
      await sharp(image.name).resize({ width: 128, height: 128 }).webp({ quality: 100 }).toFile(
        image.name.replace('./avatars/', './public/team-avatars/').replace('.png', '.webp'),
      )
    }
  }
}

createWebp()
