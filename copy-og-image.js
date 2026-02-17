const fs = require('fs');
const path = require('path');

// Copy preview-image.jpg to dist/images/gallery/ to match the URL structure
const sourceFile = path.join(__dirname, 'src', 'images', 'gallery', 'preview-image.jpg');
const destDir = path.join(__dirname, 'dist', 'images', 'gallery');
const destFile = path.join(destDir, 'preview-image.jpg');

try {
  // Check if dist directory exists
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    console.log('⚠ Dist directory not found. Run build first.');
    process.exit(0);
  }
  
  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy the file
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ Preview image copied to dist/images/gallery/preview-image.jpg');
    console.log('✓ Image URL will be: https://wedding-delta-ruby.vercel.app/images/gallery/preview-image.jpg');
  } else {
    console.warn('⚠ Source preview image not found at:', sourceFile);
  }
} catch (error) {
  console.error('❌ Error copying preview image:', error.message);
  process.exit(1);
}
