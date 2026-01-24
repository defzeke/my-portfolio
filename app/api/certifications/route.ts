import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'certs and badges.csv');
    const fileContent = await readFile(filePath, 'utf-8');
    
    // Parse CSV
    const lines = fileContent.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim());
    
    const certifications = lines.slice(1).map(line => {
      // Handle commas within quotes
      const values: string[] = [];
      let currentValue = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      values.push(currentValue.trim());
      
      // Create object from headers and values
      interface Certification {
        cert_name: string;
        org: string;
        credentials: string;
        title?: string;
        Title?: string;
        name?: string;
        Name?: string;
        Organization?: string;
        organization?: string;
        link?: string;
        Link?: string;
      }
      const cert: Certification = {} as Certification;
      headers.forEach((header, index) => {
        (cert as Certification)[header as keyof Certification] = values[index] || '';
      });
      return cert;
    }).filter(cert => cert.cert_name || cert.title || cert.Title); // Filter out empty rows
    
    return NextResponse.json(certifications);
  } catch (error) {
    console.error('Error reading certifications:', error);
    return NextResponse.json({ error: 'Failed to load certifications' }, { status: 500 });
  }
}
