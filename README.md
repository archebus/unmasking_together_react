# Unmasking Together Website

A React-based website for "Unmasking Together", a neuro-affirming counselling space dedicated to supporting neurodivergent individuals.

## Project Setup Instructions

### Prerequisites
- Node.js (v14.0.0 or higher recommended)
- npm (v6.0.0 or higher)

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd unmasking-together
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the website in development mode.

### Building for Production

To build the website for production:

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### Deployment

After building the project, you can deploy the contents of the `dist` folder to any static site hosting service like:

- GitHub Pages
- Netlify
- Vercel
- Surge
- Etc.

#### GitHub Pages Deployment

1. Create a GitHub repository
2. Build your project: `npm run build`
3. Push the project to GitHub
4. Enable GitHub Pages in your repository settings
5. Choose the `gh-pages` branch or configure a GitHub Action to deploy from the main branch

#### Netlify Deployment

1. Create a Netlify account
2. Connect your GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Deploy your site

## Project Structure

```
unmasking-together/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── layout/          # Layout components (Navbar, Footer, etc.)
│   │   ├── home/            # Homepage-specific components
│   │   └── shared/          # Shared/common components
│   ├── pages/               # Page components
│   ├── styles/              # Global styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── .gitignore
├── package.json
└── README.md
```

## Customization

- Brand colors are defined in `src/styles/variables.css`
- Component-specific styles are in their respective CSS files

## License

This project is custom-built for Unmasking Together and is not open for redistribution without permission.