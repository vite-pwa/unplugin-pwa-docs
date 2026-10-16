import { createWebp } from './create-webp.mts'

createWebp({
  folder: './avatars',
  resizeOptions: { width: 128, height: 128 },
  filter: imageName => imageName.endsWith('.png'),
  resolve: imageName => `./avatars/${imageName}`,
  map: imageName => `./public/team-avatars/${imageName.replace('.png', '.webp')}`,
})
