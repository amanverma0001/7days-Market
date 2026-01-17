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

<!-- update_july30_1 -->

<!-- update_july30_2 -->

<!-- update_july30_3 -->

<!-- update_july30_4 -->

<!-- update_july30_5 -->

<!-- update_july30_6 -->

<!-- update_july30_7 -->

<!-- update_july30_8 -->

<!-- update_july30_9 -->

<!-- update_july30_10 -->

<!-- update_july30_11 -->

<!-- update_july30_12 -->

<!-- update_july30_13 -->

<!-- update_july30_14 -->

<!-- update_july30_15 -->

<!-- update_july30_16 -->

<!-- update_july30_17 -->

<!-- update_july30_18 -->

<!-- update_july30_19 -->

<!-- update_july30_20 -->

<!-- update_july30_21 -->

<!-- update_july30_22 -->

<!-- update_july30_23 -->

<!-- update_july30_24 -->

<!-- update_july30_25 -->

<!-- update_july30_26 -->

<!-- update_july30_27 -->

<!-- update_july30_28 -->

<!-- update_july30_29 -->

<!-- update_july30_30 -->

<!-- update_july30_31 -->

<!-- update_july30_32 -->

<!-- update_july30_33 -->

<!-- update_july30_34 -->

<!-- fill_empty_2026-01-02_1 -->

<!-- fill_empty_2026-01-02_2 -->

<!-- fill_empty_2026-01-02_3 -->

<!-- fill_empty_2026-01-02_4 -->

<!-- fill_empty_2026-01-02_5 -->

<!-- fill_empty_2026-01-02_6 -->

<!-- fill_empty_2026-01-02_7 -->

<!-- fill_empty_2026-01-02_8 -->

<!-- fill_empty_2026-01-02_9 -->

<!-- fill_empty_2026-01-02_10 -->

<!-- fill_empty_2026-01-02_11 -->

<!-- fill_empty_2026-01-02_12 -->

<!-- fill_empty_2026-01-02_13 -->

<!-- fill_empty_2026-01-02_14 -->

<!-- fill_empty_2026-01-02_15 -->

<!-- fill_empty_2026-01-02_16 -->

<!-- fill_empty_2026-01-02_17 -->

<!-- fill_empty_2026-01-02_18 -->

<!-- fill_empty_2026-01-03_1 -->

<!-- fill_empty_2026-01-03_2 -->

<!-- fill_empty_2026-01-03_3 -->

<!-- fill_empty_2026-01-03_4 -->

<!-- fill_empty_2026-01-03_5 -->

<!-- fill_empty_2026-01-03_6 -->

<!-- fill_empty_2026-01-03_7 -->

<!-- fill_empty_2026-01-03_8 -->

<!-- fill_empty_2026-01-03_9 -->

<!-- fill_empty_2026-01-03_10 -->

<!-- fill_empty_2026-01-03_11 -->

<!-- fill_empty_2026-01-03_12 -->

<!-- fill_empty_2026-01-03_13 -->

<!-- fill_empty_2026-01-03_14 -->

<!-- fill_empty_2026-01-03_15 -->

<!-- fill_empty_2026-01-03_16 -->

<!-- fill_empty_2026-01-03_17 -->

<!-- fill_empty_2026-01-03_18 -->

<!-- fill_empty_2026-01-05_1 -->

<!-- fill_empty_2026-01-05_2 -->

<!-- fill_empty_2026-01-05_3 -->

<!-- fill_empty_2026-01-05_4 -->

<!-- fill_empty_2026-01-05_5 -->

<!-- fill_empty_2026-01-05_6 -->

<!-- fill_empty_2026-01-05_7 -->

<!-- fill_empty_2026-01-05_8 -->

<!-- fill_empty_2026-01-05_9 -->

<!-- fill_empty_2026-01-05_10 -->

<!-- fill_empty_2026-01-05_11 -->

<!-- fill_empty_2026-01-05_12 -->

<!-- fill_empty_2026-01-05_13 -->

<!-- fill_empty_2026-01-05_14 -->

<!-- fill_empty_2026-01-05_15 -->

<!-- fill_empty_2026-01-05_16 -->

<!-- fill_empty_2026-01-05_17 -->

<!-- fill_empty_2026-01-07_1 -->

<!-- fill_empty_2026-01-07_2 -->

<!-- fill_empty_2026-01-07_3 -->

<!-- fill_empty_2026-01-07_4 -->

<!-- fill_empty_2026-01-07_5 -->

<!-- fill_empty_2026-01-07_6 -->

<!-- fill_empty_2026-01-07_7 -->

<!-- fill_empty_2026-01-07_8 -->

<!-- fill_empty_2026-01-07_9 -->

<!-- fill_empty_2026-01-07_10 -->

<!-- fill_empty_2026-01-07_11 -->

<!-- fill_empty_2026-01-07_12 -->

<!-- fill_empty_2026-01-07_13 -->

<!-- fill_empty_2026-01-08_1 -->

<!-- fill_empty_2026-01-08_2 -->

<!-- fill_empty_2026-01-08_3 -->

<!-- fill_empty_2026-01-08_4 -->

<!-- fill_empty_2026-01-08_5 -->

<!-- fill_empty_2026-01-08_6 -->

<!-- fill_empty_2026-01-08_7 -->

<!-- fill_empty_2026-01-08_8 -->

<!-- fill_empty_2026-01-08_9 -->

<!-- fill_empty_2026-01-08_10 -->

<!-- fill_empty_2026-01-08_11 -->

<!-- fill_empty_2026-01-08_12 -->

<!-- fill_empty_2026-01-08_13 -->

<!-- fill_empty_2026-01-08_14 -->

<!-- fill_empty_2026-01-08_15 -->

<!-- fill_empty_2026-01-08_16 -->

<!-- fill_empty_2026-01-08_17 -->

<!-- fill_empty_2026-01-08_18 -->

<!-- fill_empty_2026-01-08_19 -->

<!-- fill_empty_2026-01-10_1 -->

<!-- fill_empty_2026-01-10_2 -->

<!-- fill_empty_2026-01-10_3 -->

<!-- fill_empty_2026-01-10_4 -->

<!-- fill_empty_2026-01-10_5 -->

<!-- fill_empty_2026-01-10_6 -->

<!-- fill_empty_2026-01-10_7 -->

<!-- fill_empty_2026-01-10_8 -->

<!-- fill_empty_2026-01-10_9 -->

<!-- fill_empty_2026-01-10_10 -->

<!-- fill_empty_2026-01-10_11 -->

<!-- fill_empty_2026-01-10_12 -->

<!-- fill_empty_2026-01-10_13 -->

<!-- fill_empty_2026-01-10_14 -->

<!-- fill_empty_2026-01-12_1 -->

<!-- fill_empty_2026-01-12_2 -->

<!-- fill_empty_2026-01-12_3 -->

<!-- fill_empty_2026-01-12_4 -->

<!-- fill_empty_2026-01-12_5 -->

<!-- fill_empty_2026-01-12_6 -->

<!-- fill_empty_2026-01-12_7 -->

<!-- fill_empty_2026-01-12_8 -->

<!-- fill_empty_2026-01-12_9 -->

<!-- fill_empty_2026-01-12_10 -->

<!-- fill_empty_2026-01-14_1 -->

<!-- fill_empty_2026-01-14_2 -->

<!-- fill_empty_2026-01-14_3 -->

<!-- fill_empty_2026-01-14_4 -->

<!-- fill_empty_2026-01-14_5 -->

<!-- fill_empty_2026-01-14_6 -->

<!-- fill_empty_2026-01-14_7 -->

<!-- fill_empty_2026-01-14_8 -->

<!-- fill_empty_2026-01-14_9 -->

<!-- fill_empty_2026-01-14_10 -->

<!-- fill_empty_2026-01-14_11 -->

<!-- fill_empty_2026-01-14_12 -->

<!-- fill_empty_2026-01-14_13 -->

<!-- fill_empty_2026-01-14_14 -->

<!-- fill_empty_2026-01-15_1 -->

<!-- fill_empty_2026-01-15_2 -->

<!-- fill_empty_2026-01-15_3 -->

<!-- fill_empty_2026-01-15_4 -->

<!-- fill_empty_2026-01-15_5 -->

<!-- fill_empty_2026-01-15_6 -->

<!-- fill_empty_2026-01-15_7 -->

<!-- fill_empty_2026-01-15_8 -->

<!-- fill_empty_2026-01-15_9 -->

<!-- fill_empty_2026-01-15_10 -->

<!-- fill_empty_2026-01-15_11 -->

<!-- fill_empty_2026-01-15_12 -->

<!-- fill_empty_2026-01-15_13 -->

<!-- fill_empty_2026-01-15_14 -->

<!-- fill_empty_2026-01-15_15 -->

<!-- fill_empty_2026-01-15_16 -->

<!-- fill_empty_2026-01-17_1 -->

<!-- fill_empty_2026-01-17_2 -->

<!-- fill_empty_2026-01-17_3 -->

<!-- fill_empty_2026-01-17_4 -->

<!-- fill_empty_2026-01-17_5 -->

<!-- fill_empty_2026-01-17_6 -->

<!-- fill_empty_2026-01-17_7 -->

<!-- fill_empty_2026-01-17_8 -->
