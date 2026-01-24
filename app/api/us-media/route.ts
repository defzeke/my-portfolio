import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const publicUsPath = join(process.cwd(), 'public', 'us');
    const files = await readdir(publicUsPath);
    
    // Filter for image and video files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const videoExtensions = ['.mov', '.mp4', '.webm', '.avi'];
    
    const media = files
      .filter(file => {
        const ext = file.toLowerCase();
        return imageExtensions.some(imgExt => ext.endsWith(imgExt)) ||
               videoExtensions.some(vidExt => ext.endsWith(vidExt));
      })
      .map(file => {
        const ext = file.toLowerCase();
        const isVideo = videoExtensions.some(vidExt => ext.endsWith(vidExt));
        
        return {
          src: `/us/${file}`,
          type: isVideo ? 'video' : 'image'
        };
      })
      .sort((a, b) => {
        // Sort by filename (numeric if possible)
        const aNum = parseInt(a.src.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.src.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      });
    
    return NextResponse.json(media);
  } catch (error) {
    console.error('Error reading media directory:', error);
    return NextResponse.json({ error: 'Failed to load media' }, { status: 500 });
  }
}
