const fs = require('fs');
const path = require('path');

// Copy OG image to dist root after build
const sourceFile = path.join(__dirname, 'src', 'images', 'gallery', 'compressed_1771141398259.webp');
const destFile = path.join(__dirname, 'dist', 'og-image.webp');

try {
  // Ensure dist directory exists
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
  }
  
  // Copy the file
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ OG image copied to dist/og-image.webp');
  } else {
    console.warn('⚠ Source OG image not found');
  }
} catch (error) {
  console.error('Error copying OG image:', error);
}
