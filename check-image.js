import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

// Load the image
loadImage('./public/ls.png').then((image) => {
  console.log(`Image dimensions: ${image.width}x${image.height}`);
  console.log(`File size: ${fs.statSync('./public/ls.png').size} bytes`);
}).catch((err) => {
  console.error('Error loading image:', err);
});