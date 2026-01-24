import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'projects.csv');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    
    // Parse CSV manually
    const lines = fileContents.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim());
    
    const projects = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) continue;
      
      const values: string[] = [];
      let currentValue = '';
      let insideQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      values.push(currentValue.trim());
      
      interface Project {
        project_name: string;
        short_description: string;
        link: string;
        name?: string;
        description?: string;
        url?: string;
      }
      const project: Project = {} as Project;
      headers.forEach((header, index) => {
        (project as Project)[header as keyof Project] = values[index] || '';
      });
      
      // Only include if project_name exists
      if (project.project_name && project.project_name.trim()) {
        projects.push(project);
      }
    }
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects CSV:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}
