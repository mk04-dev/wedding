const fs = require('fs');
const path = require('path');

// Copy preview-image.jpg to both root and gallery folder for reliability
const sourceFile = path.join(__dirname, 'src', 'images', 'gallery', 'preview-image.jpg');
const destGalleryDir = path.join(__dirname, 'dist', 'images', 'gallery');
const destGalleryFile = path.join(destGalleryDir, 'preview-image.jpg');
const destRootFile = path.join(__dirname, 'dist', 'preview-image.jpg');

try {
  // Check if dist directory exists
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    console.log('⚠ Dist directory not found. Run build first.');
    process.exit(0);
  }
  
  if (!fs.existsSync(sourceFile)) {
    console.warn('⚠ Source preview image not found at:', sourceFile);
    process.exit(1);
  }
  
  // Copy to gallery folder
  if (!fs.existsSync(destGalleryDir)) {
    fs.mkdirSync(destGalleryDir, { recursive: true });
  }
  fs.copyFileSync(sourceFile, destGalleryFile);
  console.log('✓ Preview image copied to dist/images/gallery/preview-image.jpg');
  
  // Copy to root for simpler URL
  fs.copyFileSync(sourceFile, destRootFile);
  console.log('✓ Preview image copied to dist/preview-image.jpg');
  console.log('✓ OG Image URLs:');
  console.log('  - https://wedding-delta-ruby.vercel.app/preview-image.jpg');
  console.log('  - https://wedding-delta-ruby.vercel.app/images/gallery/preview-image.jpg');
} catch (error) {
  console.error('❌ Error copying preview image:', error.message);
  process.exit(1);
}
