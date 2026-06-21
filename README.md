# 7days Market E-Commerce

**Author & Sole Contributor**: Amandeep

A professional E-Commerce marketplace structured as a standard monorepo project.

## Repository Tree

```
project-root/
├── frontend/             # Frontend React + TypeScript application
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   │   ├── components/   # UI & Shared Layout components
│   │   ├── hooks/        # React Query hooks for fetching data
│   │   ├── lib/          # Utilities and database clients (Supabase)
│   │   ├── pages/        # Route page views (Home, Search, Details, etc.)
│   │   ├── stores/       # State management (Zustand)
│   │   └── types/        # TypeScript declarations
│   ├── index.html        # Main HTML entry
│   ├── package.json      # NPM dependencies
│   ├── tailwind.config.js# Styling configurations
│   ├── tsconfig.json     # TypeScript settings
│   └── vite.config.ts    # Bundler configurations
└── README.md             # This documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [NPM](https://npmjs.com)

### Setup Instructions

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the `frontend` folder with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the Development Server:
   ```bash
   npm run dev
   ```

5. Build for Production:
   ```bash
   npm run build
   ```
