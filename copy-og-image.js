const fs = require('fs');
const path = require('path');

// Copy preview image to dist root after build with a fixed name (no hash)
const sourceFile = path.join(__dirname, 'src', 'images', 'gallery', 'preview-image.jpg');
const destFile = path.join(__dirname, 'dist', 'preview-image.jpg');

try {
  // Check if dist directory exists
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    console.log('⚠ Dist directory not found. Run build first.');
    process.exit(0);
  }
  
  // Copy the file with fixed name
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ Preview image copied to dist/preview-image.jpg');
    console.log('✓ Image URL will be: https://wedding-delta-ruby.vercel.app/preview-image.jpg');
  } else {
    console.warn('⚠ Source preview image not found at:', sourceFile);
  }
} catch (error) {
  console.error('❌ Error copying preview image:', error.message);
  process.exit(1);
}
