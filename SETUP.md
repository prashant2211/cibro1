# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Images to Public Folder**
   The images from `website data/` folder need to be accessible. They should be in `public/website data/` folder.
   
   If not already copied, run:
   ```bash
   cp -r "website data" public/
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The website will open at `http://localhost:3000`

## Important Notes

- All images should be in `public/website data/` folder
- The website supports both Hindi and English - toggle using the globe icon in the header
- All pages are fully responsive and work on mobile, tablet, and desktop
- Forms are set up but you'll need to connect them to a backend API for actual submission

## Customization

- Update content in `src/data/translations.js`
- Modify colors in `tailwind.config.js`
- Add/remove pages in `src/App.jsx` and create corresponding components in `src/pages/`

## Production Build

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

