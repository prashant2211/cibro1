# Jaagat Janni Mahila Vikash Foundation Website

A modern, responsive, bilingual (Hindi/English) website for the Jaagat Janni Mahila Vikash Foundation - a non-profit organization working for women's health, safety, development and empowerment in Patna, Bihar.

## Features

- 🌐 **Bilingual Support**: Full Hindi and English language support with easy language toggle
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🎨 **Modern Design**: Beautiful, professional UI with smooth animations
- 🔍 **SEO Optimized**: Complete SEO setup with meta tags, structured data, and sitemap
- 📄 **Multiple Pages**: 
  - Home
  - About Us
  - Programs (Health, Safety, Development, Empowerment)
  - Gallery
  - Contact
  - Group Registration Form

## Technology Stack

- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **React Icons** - Icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
cibro1/
├── public/
│   ├── website data/          # Foundation images and assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Footer.jsx         # Footer component
│   │   └── SEO.jsx            # SEO component
│   ├── context/
│   │   └── LanguageContext.jsx # Bilingual language context
│   ├── data/
│   │   └── translations.js    # Hindi/English translations
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Health.jsx
│   │   ├── Safety.jsx
│   │   ├── Development.jsx
│   │   ├── Empowerment.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── GroupForm.jsx
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Foundation Information

- **Name**: जागत जननी महिला विकास फाउंडेशन (Jaagat Janni Mahila Vikash Foundation)
- **Subtitle**: Pragati Mahila Vikash Kendra
- **Address**: Ghurdaur Road, Digha Ashiana, Near SSB Camp, Patna-800011

## Customization

### Updating Content

All text content is stored in `src/data/translations.js`. You can update both Hindi and English translations there.

### Adding Images

Place images in the `public/website data/` folder and reference them in your components using the path `/website%20data/filename.ext`.

### Styling

The project uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

## SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD) for better search engine understanding
- Sitemap.xml for search engine indexing
- Robots.txt for crawler instructions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Jaagat Janni Mahila Vikash Foundation.

## Contact

For any questions or support, please contact the foundation.

