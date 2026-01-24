import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const publicGalleryPath = join(process.cwd(), 'public', 'gallery');
    const files = await readdir(publicGalleryPath);
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    
    const images = files
      .filter(file => {
        const ext = file.toLowerCase();
        return imageExtensions.some(imgExt => ext.endsWith(imgExt));
      })
      .map(file => `/gallery/${file}`)
      .sort((a, b) => {
        // Sort by filename (numeric if possible)
        const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      });
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 });
  }
}
