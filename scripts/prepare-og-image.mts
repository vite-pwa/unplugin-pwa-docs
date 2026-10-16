import { createWebp } from './create-webp.mts'

createWebp({
  folder: './public',
  resizeOptions: { width: 1200, height: 630 },
  filter: imageName => imageName === 'og-image.jpeg',
  resolve: imageName => `./public/${imageName}`,
  map: imageName => `./public/${imageName.replace('.jpeg', '.webp')}`,
})
