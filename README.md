<div align="center">
  <h1>🎨 Portfolio</h1>
  <p><strong>A modern, interactive portfolio website with a unique Discord-inspired UI</strong></p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

---

## ✨ Features

- 🎮 **Discord-Inspired Interface** - Familiar, engaging UI with server navigation and channel system
- 🌐 **Multiple View Modes** - Switch between Discord mode, Site mode, and CV mode
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Dark Mode Support** - Eye-friendly dark theme with smooth transitions
- 🖼️ **Interactive Gallery** - Masonry-style photo gallery with lightbox
- 🏆 **Team Showcase** - Dedicated sections for Team Cicada and collaborators
- 📊 **Projects & Certifications** - Dynamic content loaded from CSV files
- ⚡ **Optimized Performance** - Built with Next.js 14 and optimized images
- 🎯 **SEO Ready** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Image Optimization:** Next/Image

### Backend & Data
- **API Routes:** Next.js API Routes
- **Data Storage:** CSV files (projects, certifications)
- **File System:** Node.js fs/promises

### Developer Tools
- **Linting:** ESLint
- **Type Checking:** TypeScript
- **Version Control:** Git & GitHub
- **Package Manager:** npm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/defzeke/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
folio/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── certifications/   # Certifications API
│   │   ├── gallery-images/   # Gallery images API
│   │   ├── projects/         # Projects API
│   │   └── us-media/         # Media API
│   ├── portfolio/            # Main portfolio page
│   ├── site-mode/            # Site mode pages
│   │   ├── certifications/   # All certifications
│   │   ├── projects/         # All projects
│   │   └── tech-stack/       # Tech stack page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── sections/             # Page sections
│   │   ├── site/             # Site mode components
│   │   └── ...               # Discord mode components
│   └── ui/                   # Reusable UI components
├── data/                     # Data files
│   ├── certs and badges.csv  # Certifications data
│   └── projects.csv          # Projects data
├── public/                   # Static assets
│   ├── gallery/              # Gallery images
│   ├── gifs/                 # Animated GIFs
│   ├── her-orgs/             # Organization logos
│   ├── us/                   # Personal photos
│   └── videos/               # Video files
└── ...config files
```

## 🎨 Key Features Explained

### Discord Mode
Navigate through different "servers" to explore various sections:
- **My Portfolio** - Personal information and achievements
- **<3** - Personal memories and moments
- **Team Cicada** - Team showcase and accomplishments

### Site Mode
A traditional portfolio website view with:
- About section
- Tech stack overview
- Featured projects
- Certifications & badges
- Experience timeline
- Social links
- Photo gallery

### Dynamic Content
Projects and certifications are loaded from CSV files, making it easy to update content without touching code.

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/defzeke/my-portfolio)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Platforms
This project can also be deployed to:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Any platform supporting Next.js

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ezekiel Bustamante**

- GitHub: [@defzeke](https://github.com/defzeke)
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/defzeke/my-portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">
  <p>Built with ❤️ using Next.js and TypeScript</p>
</div>
