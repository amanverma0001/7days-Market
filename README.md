# 🛍️ 7days Market E-Commerce

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</div>

<br />

**7days Market** is a premium, high-performance E-Commerce platform built using **React**, **TypeScript**, **Tailwind CSS**, and **Supabase**. The application features a clean and responsive user interface, full category routing, search filtering, user authentication, a complete cart state engine, and high-fidelity mock data fallbacks for instant offline development.

---

## 📸 Screenshots Showcase

Here is a visual walkthrough of the **7days Market** user experience:

### 🏠 Search & Category Product Showcase
![Search & Category Product Showcase](screenshots/Screenshot%202026-06-21%20180719.png)

---

### 🛒 Dynamic Shopping Cart
![Dynamic Shopping Cart](screenshots/Screenshot%202026-06-21%20180745.png)

---

### 📍 Checkout - Shipping Details
![Checkout - Shipping Details](screenshots/Screenshot%202026-06-21%20180752.png)

---

### 💳 Checkout - Payment Details
![Checkout - Payment Details](screenshots/Screenshot%202026-06-21%20180801.png)

---

## ✨ Features

- **⚡ Instant Fallback Loading**: Bypasses network overhead when running on placeholder databases, delivering a fully populated high-fidelity mock layout in under 10ms.
- **🏷️ Route-based Category Filtering**: Standard `/category/:slug` paths handle automatic, instant API sorting.
- **🔍 Synced Search Dropdown**: Header dropdown select stays dynamically bound to the current category URL and enables immediate redirection.
- **🌓 Light & Dark Modes**: Complete theme customization using Tailwind CSS and Zustand state stores.
- **🛒 Persistent Cart Engine**: Local state synchronization, automatic items addition, quantity adjustment, and checkout summary calculation.
- **🔐 User Auth & Account Profile**: Login and signup modals ready for live Supabase integration.
- **📂 Professional Monorepo Layout**: Clean division of front-end logic and configurations.

---

## 🛠️ Tech Stack

*   **Frontend Library**: React (v18)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS & PostCSS
*   **State Management**: Zustand
*   **Data Fetching**: React Query (TanStack Query v5)
*   **Icons**: Lucide React
*   **Database & Auth**: Supabase Client SDK

---

## 📁 Repository Layout

```text
7days-Market/
├── screenshots/          # High-resolution screenshots of the UI
├── frontend/             # Core Client Application
│   ├── public/           # Static elements & assets
│   ├── src/              # Source Files
│   │   ├── components/   # UI modules (Header, Footer, Product Cards)
│   │   ├── hooks/        # React Query custom hooks (useProducts, useAuth)
│   │   ├── lib/          # API configs & clients (Supabase client)
│   │   ├── pages/        # Route page views (Home, Deals, Search, Cart)
│   │   ├── stores/       # Global Zustand state stores (cartStore, authStore)
│   │   └── types/        # TypeScript Interfaces
│   ├── index.html        # Main HTML Entrypoint
│   ├── package.json      # Dependencies & Scripts
│   ├── tailwind.config.js# Design design tokens
│   └── vite.config.ts    # Bundler config
├── .gitignore            # Git exclusion rules
└── README.md             # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- [NPM](https://npmjs.com)

### Installation & Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/amanverma0001/7days-Market.git
    cd 7days-Market
    ```

2.  **Navigate to the frontend folder**:
    ```bash
    cd frontend
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Configure local environment**:
    Create a `.env` file in the `frontend/` folder:
    ```env
    VITE_SUPABASE_URL=https://your-real-project-id.supabase.co
    VITE_SUPABASE_ANON_KEY=your-real-anon-key-string
    ```
    *Note: Leaving this blank or with placeholder values will automatically launch the project in high-fidelity mock data mode.*

5.  **Start development server**:
    ```bash
    npm run dev
    ```
    The app will start running on [http://localhost:5173/](http://localhost:5173/).

6.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 👤 Author & Contributor

*   **Sole Developer**: Amandeep ([@amanverma0001](https://github.com/amanverma0001))
