# Devyn's Portfolio

A modern, responsive portfolio website showcasing my web development projects and skills. Built with React, Tailwind CSS, and featuring a Java backend for dynamic functionality.

**Live Site:** [webdevyn.github.io]([[https://webdevyn.github.io](https://webdevyn-github-io.vercel.app/)](https://webdevyn-portfolio.vercel.app/))

## Overview

This is a full-stack portfolio application that demonstrates modern web development practices. The frontend features an interactive, component-based React interface with Tailwind CSS styling, while the backend provides Java services for handling quotes and other dynamic content.

## Tech Stack

### Frontend
- **React** (v19.2.3) - Modern UI library with hooks and functional components
- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework for responsive design
- **PostCSS** - CSS processing and autoprefixing
- **React Testing Library** - Unit and integration testing

### Backend
- **Java** - Backend services and API development
- **Maven** - Dependency management and build automation
- **Docker** - Containerization for deployment

## Project Structure

```
webdevyn.github.io/
├── src/                           # React frontend source
│   ├── components/                # Reusable React components
│   ├── data/                      # Static data and content files
│   ├── App.js                     # Main application component
│   ├── App.css                    # Application styles
│   ├── index.js                   # React entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── backend/                       # Java backend services
│   ├── src/                       # Java source code
│   ├── pom.xml                    # Maven configuration
│   ├── Dockerfile                 # Docker configuration
│   └── portfolio-quote-app.iml    # IntelliJ project file
├── package.json                   # Node.js dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── README.md                      # This file
```

## Getting Started

### Prerequisites
- Node.js and npm
- Java 11+ (for backend development)
- Docker (for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/webdevyn/webdevyn.github.io.git
   cd webdevyn.github.io
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

### Available Scripts

#### Frontend Development
- `npm start` - Start the development server at [http://localhost:3000](http://localhost:3000)
- `npm test` - Launch the test runner in interactive watch mode
- `npm run build` - Create an optimized production build
- `npm run deploy` - Build and deploy to GitHub Pages

#### Backend Development
- `mvn clean install` - Build the Java backend
- `docker build -t portfolio-backend .` - Build Docker image
- `docker run -p 8080:8080 portfolio-backend` - Run containerized backend

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component-Based Architecture** - Modular, reusable React components
- **Dynamic Content** - Backend integration for quotes and dynamic data
- **Optimized Performance** - Production builds with code splitting and minification
- **Containerized Deployment** - Docker support for easy scaling

## Deployment

The frontend is automatically deployed to GitHub Pages using the `gh-pages` package. Push to the main branch to trigger a new deployment:

```bash
npm run deploy
```

The backend can be deployed as a Docker container to any platform supporting containers.

## Testing

Run the test suite with:
```bash
npm test
```

## Development Notes

- **Environment Variables**: Configure via `.env` file (see `.env` for example)
- **Styling**: All CSS is generated from Tailwind utilities. Custom CSS should be added to component files.
- **Component Organization**: Place new components in `src/components/` directory

## License

This project is open source and available under the MIT License.

## Contact

For inquiries, visit [webdevyn.github.io](https://webdevyn.github.io) or check out my GitHub profile [@webdevyn](https://github.com/webdevyn).
