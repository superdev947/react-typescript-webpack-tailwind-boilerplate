# React TypeScript Webpack Tailwind Boilerplate

A modern, highly customizable boilerplate for building React applications with TypeScript, Webpack, Tailwind CSS, and i18n support.

## Features

- ⚛️ **React 18** with functional components and hooks
- 🟦 **TypeScript** for type safety
- 💨 **Tailwind CSS** for utility-first styling
- 🛠️ **Webpack 5** for fast bundling and HMR
- 🌐 **i18n** multi-language support (with react-i18next)
- 🌗 **Dark mode** and theme context
- 🗃️ **Redux Toolkit** for state management
- 🧩 Modular, reusable component structure
- 🧪 Ready for unit and integration testing

## Folder Structure

```
react-typescript-webpack-tailwind-boilerplate/
├── docs/                  # Documentation
├── public/                # Static files (index.html, favicon, etc.)
├── src/
│   ├── components/        # Reusable UI and feature components
│   │   ├── landing/       # Landing page section components
│   │   └── ui/            # Generic UI components (Button, Card, etc.)
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Internationalization setup and locales
│   ├── layout/            # Layout components (header, footer, etc.)
│   ├── pages/             # Page components (Landing, Home, Login, etc.)
│   ├── store/             # Redux store and slices
│   ├── utils/             # Utility functions
│   ├── index.tsx          # App entry point
│   └── index.scss         # Global styles
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── webpack.config.js      # Webpack configuration
└── README.md              # Project documentation
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

- App runs at [http://localhost:3000](http://localhost:3000) by default.

### 3. Build for Production

```bash
npm run build
```

### 4. Lint and Format

```bash
npm run lint
npm run format
```

## Customization

- **Add new languages:**
  - Add a new JSON file in `src/i18n/locales/` (e.g., `it.json`).
  - Update `src/i18n/index.ts` to include the new language.
- **Add new sections or pages:**
  - Create a new component in `src/components/` or `src/pages/`.
  - Import and use it in your routes or main layout.
- **Change theme colors:**
  - Edit `tailwind.config.ts` to customize your color palette.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

**MIT License**
