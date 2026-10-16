import type { ResizeOptions } from 'sharp'
import { promises as fs } from 'node:fs'
import sharp from 'sharp'

interface Options {
  folder: string
  filter: (imageName: string) => boolean
  resolve: (imageName: string) => string
  map: (imageName: string) => string
  resizeOptions: ResizeOptions
}

export async function createWebp({
  folder,
  filter,
  resolve,
  map,
  resizeOptions,
}: Options) {
  for await (const image of await fs.opendir(folder)) {
    if (image.isFile() && filter(image.name)) {
      await sharp(resolve(image.name)).resize(resizeOptions).webp({ quality: 100 }).toFile(
        map(image.name),
      )
    }
  }
}
