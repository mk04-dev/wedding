const fs = require('fs');
const path = require('path');

// Copy OG image to dist root after build with a fixed name (no hash)
const sourceFile = path.join(__dirname, 'src', 'images', 'gallery', 'compressed_1771141398259.webp');
const destFile = path.join(__dirname, 'dist', 'og-image.webp');

try {
  // Check if dist directory exists
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    console.log('⚠ Dist directory not found. Run build first.');
    process.exit(0);
  }
  
  // Copy the file with fixed name
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ OG image copied to dist/og-image.webp');
    console.log('✓ Image URL will be: https://wedding-delta-ruby.vercel.app/og-image.webp');
  } else {
    console.warn('⚠ Source OG image not found at:', sourceFile);
  }
} catch (error) {
  console.error('❌ Error copying OG image:', error.message);
  process.exit(1);
}
