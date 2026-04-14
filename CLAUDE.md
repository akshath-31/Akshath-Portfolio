# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Run dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint code: `npm run lint`

## Architecture & Setup
- React 19 with TypeScript and Vite builder
- Tailwind CSS for styling with component-driven structure
- Gemini API integration via @google/genai
- API routing handled by Express
- Key files:
  - Entry: `src/main.tsx` with BrowserRouter configuration
  - UI Components: `/components/` directory
  - Pages: `/pages/` with dynamic routing
  - Styles: `src/index.css` with global Tailwind setup
- Environment variables:
  - `GEMINI_API_KEY` required via .env.local file
- Build process: Vite 6.2.0 with isolated modules

## Key Directories
- `src/` - React components, pages, and app configuration
- `public/` - Static assets and service files
- `node_modules/` - Production dependencies
- `.cursor/rules/` - Cursor rules for code completion

## Development Workflow
1. Run `npm install` to install dependencies
2. Start development with `npm run dev`
3. Modify components/pages and reload via HMR
4. Use `npm run lint` for TypeScript validation
5. Test UI interactions with manual testing

## Production Deployment
- Build with `npm run build`
- Serve via Express in production
- Set API key securely in environment variables