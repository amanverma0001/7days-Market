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

<!-- update_7days 1 -->

<!-- update_7days 2 -->

<!-- update_7days 3 -->

<!-- update_7days 4 -->

<!-- update_7days 5 -->

<!-- update_7days 6 -->

<!-- update_7days 7 -->

<!-- update_7days 8 -->

<!-- update_7days 9 -->

<!-- update_7days 10 -->

<!-- update_7days 11 -->

<!-- update_7days 12 -->

<!-- update_7days 13 -->

<!-- update_7days 14 -->

<!-- update_7days 15 -->

<!-- update_7days 16 -->

<!-- update_7days 17 -->

<!-- update_7days 18 -->

<!-- update_7days 19 -->

<!-- update_7days 20 -->

<!-- update_7days 21 -->

<!-- update_7days 22 -->

<!-- update_7days 23 -->

<!-- update_7days 24 -->

<!-- update_7days 25 -->

<!-- update_jul13 1 -->

<!-- update_jul13_batch 1 -->

<!-- update_jul13_batch 2 -->

<!-- update_jul13_batch 3 -->

<!-- update_jul13_batch 4 -->

<!-- update_jul13_batch 5 -->

<!-- update_jul13_batch 6 -->

<!-- update_jul13_batch 7 -->

<!-- update_jul13_batch 8 -->

<!-- update_jul13_batch 9 -->

<!-- update_jul13_batch 10 -->

<!-- update_jul13_batch 11 -->

<!-- update_jul13_batch 12 -->

<!-- update_jul13_batch 13 -->

<!-- update_jul13_batch 14 -->

<!-- update_jul13_batch 15 -->

<!-- update_jul13_batch 16 -->

<!-- update_jul13_batch 17 -->

<!-- update_jul13_batch 18 -->

<!-- update_jul13_batch 19 -->

<!-- update_jul13_batch 20 -->

<!-- update_jul13_batch 21 -->

<!-- update_jul13_batch 22 -->

<!-- update_jul13_batch 23 -->

<!-- update_jul13_batch 24 -->

<!-- update_jul13_batch 25 -->

<!-- update_jul13_batch 26 -->

<!-- update_jul13_batch 27 -->

<!-- update_jul13_batch 28 -->

<!-- update_jul13_batch 29 -->

<!-- update_jul13_batch 30 -->

<!-- update_jul12_batch 1 -->

<!-- update_jul12_batch 2 -->

<!-- update_jul12_batch 3 -->

<!-- update_jul12_batch 4 -->

<!-- update_jul12_batch 5 -->

<!-- update_jul12_batch 6 -->

<!-- update_jul12_batch 7 -->

<!-- update_jul12_batch 8 -->

<!-- update_jul12_batch 9 -->

<!-- update_jul12_batch 10 -->

<!-- update_jul12_batch 11 -->

<!-- update_jul12_batch 12 -->

<!-- update_jul12_batch 13 -->

<!-- update_jul12_batch 14 -->

<!-- update_jul12_batch 15 -->

<!-- update_jul12_batch 16 -->

<!-- update_jul12_batch 17 -->

<!-- update_jul12_batch 18 -->

<!-- update_jul12_batch 19 -->

<!-- update_jul12_batch 20 -->

<!-- update_jul12_batch 21 -->

<!-- update_jul12_batch 22 -->

<!-- update_jul12_batch 23 -->

<!-- update_jul12_batch 24 -->

<!-- update_jul12_batch 25 -->

<!-- update_jul12_batch 26 -->

<!-- update_jul12_batch 27 -->

<!-- update_jul12_batch 28 -->

<!-- update_jul12_batch 29 -->

<!-- update_jul12_batch 30 -->

<!-- update_jul12_batch 31 -->

<!-- update_jul12_batch 32 -->

<!-- update_jul12_batch 33 -->

<!-- update_jul12_batch 34 -->

<!-- update_jul16_batch 1 -->

<!-- update_jul16_batch 2 -->

<!-- update_jul16_batch 3 -->

<!-- update_jul16_batch 4 -->

<!-- update_jul16_batch 5 -->

<!-- update_jul16_batch 6 -->

<!-- update_jul16_batch 7 -->

<!-- update_jul16_batch 8 -->

<!-- update_jul16_batch 9 -->

<!-- update_jul16_batch 10 -->

<!-- update_jul16_batch 11 -->

<!-- update_jul16_batch 12 -->

<!-- update_jul16_batch 13 -->

<!-- update_jul16_batch 14 -->

<!-- update_jul16_batch 15 -->

<!-- update_jul16_batch 16 -->

<!-- update_jul16_batch 17 -->

<!-- update_jul16_batch 18 -->

<!-- update_jul16_batch 19 -->

<!-- update_jul16_batch 20 -->

<!-- update_jul16_batch 21 -->

<!-- update_jul16_batch 22 -->

<!-- update_jul16_batch 23 -->

<!-- update_jul16_batch 24 -->

<!-- update_jul16_batch 25 -->

<!-- update_jul16_batch 26 -->

<!-- update_jul16_batch 27 -->

<!-- update_jul16_batch 28 -->

<!-- update_jul16_batch 29 -->

<!-- update_jul16_batch 30 -->

<!-- update_jul22_batch 1 -->

<!-- update_jul22_batch 2 -->

<!-- update_jul22_batch 3 -->

<!-- update_jul22_batch 4 -->

<!-- update_jul22_batch 5 -->

<!-- update_jul22_batch 6 -->

<!-- update_jul22_batch 7 -->

<!-- update_jul22_batch 8 -->

<!-- update_jul22_batch 9 -->

<!-- update_jul22_batch 10 -->

<!-- update_jul22_batch 11 -->

<!-- update_jul22_batch 12 -->

<!-- update_jul22_batch 13 -->

<!-- update_jul22_batch 14 -->

<!-- update_jul22_batch 15 -->

<!-- update_jul22_batch 16 -->

<!-- update_jul22_batch 17 -->

<!-- update_jul22_batch 18 -->

<!-- update_jul22_batch 19 -->

<!-- update_jul22_batch 20 -->

<!-- update_jul22_batch 21 -->

<!-- update_jul22_batch 22 -->

<!-- update_jul22_batch 23 -->

<!-- update_jul22_batch 24 -->

<!-- update_jul22_batch 25 -->

<!-- update_jul22_batch 26 -->

<!-- update_jul22_batch 27 -->

<!-- update_jul25_batch 1 -->

<!-- update_jul25_batch 2 -->

<!-- update_jul25_batch 3 -->

<!-- update_jul25_batch 4 -->

<!-- update_jul25_batch 5 -->

<!-- update_jul25_batch 6 -->

<!-- update_jul25_batch 7 -->

<!-- update_jul25_batch 8 -->

<!-- update_jul25_batch 9 -->

<!-- update_jul25_batch 10 -->

<!-- update_jul25_batch 11 -->

<!-- update_jul25_batch 12 -->

<!-- update_jul25_batch 13 -->

<!-- update_jul25_batch 14 -->

<!-- update_jul25_batch 15 -->

<!-- update_jul25_batch 16 -->

<!-- update_jul25_batch 17 -->

<!-- update_jul25_batch 18 -->

<!-- update_jul25_batch 19 -->

<!-- update_jul25_batch 20 -->

<!-- update_jul25_batch 21 -->

<!-- update_jul25_batch 22 -->

<!-- update_jun29_batch 1 -->

<!-- update_jun29_batch 2 -->

<!-- update_jun29_batch 3 -->

<!-- update_jun29_batch 4 -->

<!-- update_jun29_batch 5 -->

<!-- update_jun29_batch 6 -->

<!-- update_jun29_batch 7 -->

<!-- update_jun29_batch 8 -->

<!-- update_jun29_batch 9 -->

<!-- update_jun29_batch 10 -->

<!-- update_jun29_batch 11 -->

<!-- update_jun29_batch 12 -->

<!-- update_jun29_batch 13 -->

<!-- update_jun29_batch 14 -->

<!-- update_jun29_batch 15 -->

<!-- update_jun29_batch 16 -->

<!-- update_jun29_batch 17 -->

<!-- update_jun29_batch 18 -->

<!-- update_jun29_batch 19 -->

<!-- update_jun29_batch 20 -->

<!-- update_jun29_batch 21 -->

<!-- update_jun29_batch 22 -->

<!-- update_jun29_batch 23 -->

<!-- update_jun29_batch 24 -->

<!-- update_jun29_batch 25 -->

<!-- update_jun29_batch 26 -->

<!-- update_jun29_batch 27 -->

<!-- update_jun29_batch 28 -->

<!-- update_jun29_batch 29 -->

<!-- update_jun29_batch 30 -->

<!-- update_june_7_1 -->

<!-- update_june_7_2 -->

<!-- update_june_7_3 -->

<!-- update_june_7_4 -->

<!-- update_june_7_5 -->

<!-- update_june_7_6 -->

<!-- update_june_7_7 -->

<!-- update_june_7_8 -->

<!-- update_june_7_9 -->

<!-- update_june_7_10 -->

<!-- update_june_7_11 -->

<!-- update_june_7_12 -->

<!-- update_june_7_13 -->

<!-- update_june_7_14 -->

<!-- update_june_7_15 -->

<!-- update_june_7_16 -->

<!-- update_june_7_17 -->

<!-- update_june_7_18 -->

<!-- update_june_7_19 -->

<!-- update_june_7_20 -->

<!-- update_june_7_21 -->

<!-- update_june_7_22 -->

<!-- update_june_7_23 -->

<!-- update_june_7_24 -->

<!-- update_june_7_25 -->

<!-- update_june_7_26 -->

<!-- update_june_7_27 -->

<!-- update_june_7_28 -->

<!-- update_june_08_1 -->

<!-- update_june_08_2 -->

<!-- update_june_08_3 -->

<!-- update_june_08_4 -->

<!-- update_june_08_5 -->

<!-- update_june_08_6 -->

<!-- update_june_08_7 -->

<!-- update_june_08_8 -->

<!-- update_june_08_9 -->

<!-- update_june_08_10 -->

<!-- update_june_08_11 -->

<!-- update_june_08_12 -->

<!-- update_june_08_13 -->

<!-- update_june_08_14 -->

<!-- update_june_08_15 -->

<!-- update_june_08_16 -->

<!-- update_june_08_17 -->

<!-- update_june_08_18 -->

<!-- update_june_08_19 -->

<!-- update_june_08_20 -->

<!-- update_june_08_21 -->

<!-- update_june_08_22 -->

<!-- update_june_08_23 -->

<!-- update_june_08_24 -->

<!-- update_june_08_25 -->

<!-- update_june_08_26 -->

<!-- update_june_08_27 -->

<!-- update_june_08_28 -->

<!-- update_june_08_29 -->

<!-- update_june_08_30 -->

<!-- update_june_08_31 -->

<!-- update_june_09_1 -->

<!-- update_june_09_2 -->

<!-- update_june_09_3 -->

<!-- update_june_09_4 -->

<!-- update_june_09_5 -->

<!-- update_june_09_6 -->

<!-- update_june_09_7 -->

<!-- update_june_09_8 -->

<!-- update_june_09_9 -->

<!-- update_june_09_10 -->

<!-- update_june_09_11 -->

<!-- update_june_09_12 -->

<!-- update_june_09_13 -->

<!-- update_june_09_14 -->

<!-- update_june_09_15 -->

<!-- update_june_09_16 -->

<!-- update_june_09_17 -->

<!-- update_june_09_18 -->

<!-- update_june_09_19 -->

<!-- update_june_09_20 -->

<!-- update_june_09_21 -->

<!-- update_june_09_22 -->

<!-- update_june_09_23 -->

<!-- update_june_09_24 -->

<!-- update_june_09_25 -->

<!-- update_june_09_26 -->

<!-- update_june_10_1 -->

<!-- update_june_10_2 -->

<!-- update_june_10_3 -->

<!-- update_june_10_4 -->

<!-- update_june_10_5 -->

<!-- update_june_10_6 -->

<!-- update_june_10_7 -->

<!-- update_june_10_8 -->

<!-- update_june_10_9 -->

<!-- update_june_10_10 -->

<!-- update_june_10_11 -->

<!-- update_june_10_12 -->

<!-- update_june_10_13 -->

<!-- update_june_10_14 -->

<!-- update_june_10_15 -->

<!-- update_june_10_16 -->

<!-- update_june_10_17 -->

<!-- update_june_10_18 -->

<!-- update_june_10_19 -->

<!-- update_june_10_20 -->

<!-- update_june_10_21 -->

<!-- update_june_10_22 -->

<!-- update_june_10_23 -->

<!-- update_june_10_24 -->

<!-- update_june_10_25 -->

<!-- update_june_10_26 -->

<!-- update_june_10_27 -->

<!-- update_june_10_28 -->

<!-- update_june_10_29 -->

<!-- update_june_10_30 -->

<!-- update_june_11_1 -->

<!-- update_june_11_2 -->

<!-- update_june_11_3 -->

<!-- update_june_11_4 -->

<!-- update_june_11_5 -->

<!-- update_june_11_6 -->

<!-- update_june_11_7 -->

<!-- update_june_11_8 -->

<!-- update_june_11_9 -->

<!-- update_june_11_10 -->

<!-- update_june_11_11 -->

<!-- update_june_11_12 -->

<!-- update_june_11_13 -->

<!-- update_june_11_14 -->

<!-- update_june_11_15 -->

<!-- update_june_11_16 -->

<!-- update_june_11_17 -->

<!-- update_june_11_18 -->

<!-- update_june_11_19 -->

<!-- update_june_11_20 -->

<!-- update_june_11_21 -->

<!-- update_june_11_22 -->

<!-- update_june_11_23 -->

<!-- update_june_11_24 -->

<!-- update_june_11_25 -->

<!-- update_june_11_26 -->

<!-- update_june_11_27 -->

<!-- update_june_12_1 -->

<!-- update_june_12_2 -->

<!-- update_june_12_3 -->

<!-- update_june_12_4 -->

<!-- update_june_12_5 -->

<!-- update_june_12_6 -->

<!-- update_june_12_7 -->

<!-- update_june_12_8 -->

<!-- update_june_12_9 -->

<!-- update_june_12_10 -->

<!-- update_june_12_11 -->

<!-- update_june_12_12 -->

<!-- update_june_12_13 -->

<!-- update_june_12_14 -->

<!-- update_june_12_15 -->

<!-- update_june_12_16 -->

<!-- update_june_12_17 -->

<!-- update_june_12_18 -->

<!-- update_june_12_19 -->

<!-- update_june_12_20 -->

<!-- update_june_12_21 -->

<!-- update_june_12_22 -->

<!-- update_june_12_23 -->

<!-- update_june_12_24 -->

<!-- update_june_12_25 -->

<!-- update_june_12_26 -->

<!-- update_june_12_27 -->

<!-- update_june_12_28 -->

<!-- update_june_12_29 -->

<!-- update_june_13_1 -->

<!-- update_june_13_2 -->

<!-- update_june_13_3 -->

<!-- update_june_13_4 -->

<!-- update_june_13_5 -->

<!-- update_june_13_6 -->

<!-- update_june_13_7 -->

<!-- update_june_13_8 -->

<!-- update_june_13_9 -->

<!-- update_june_13_10 -->

<!-- update_june_13_11 -->

<!-- update_june_13_12 -->

<!-- update_june_13_13 -->

<!-- update_june_13_14 -->

<!-- update_june_13_15 -->

<!-- update_june_13_16 -->

<!-- update_june_13_17 -->

<!-- update_june_13_18 -->

<!-- update_june_13_19 -->

<!-- update_june_13_20 -->

<!-- update_june_13_21 -->

<!-- update_june_13_22 -->

<!-- update_june_13_23 -->

<!-- update_june_13_24 -->

<!-- update_june_13_25 -->

<!-- update_june_13_26 -->

<!-- update_june_13_27 -->

<!-- update_june_13_28 -->

<!-- update_june_13_29 -->

<!-- update_june_13_30 -->

<!-- update_june_13_31 -->

<!-- update_june_13_32 -->

<!-- update_june_14_1 -->

<!-- update_june_14_2 -->

<!-- update_june_14_3 -->

<!-- update_june_14_4 -->

<!-- update_june_14_5 -->

<!-- update_june_14_6 -->

<!-- update_june_14_7 -->

<!-- update_june_14_8 -->

<!-- update_june_14_9 -->

<!-- update_june_14_10 -->

<!-- update_june_14_11 -->

<!-- update_june_14_12 -->

<!-- update_june_14_13 -->

<!-- update_june_14_14 -->

<!-- update_june_14_15 -->

<!-- update_june_14_16 -->

<!-- update_june_14_17 -->

<!-- update_june_14_18 -->

<!-- update_june_14_19 -->

<!-- update_june_14_20 -->

<!-- update_june_14_21 -->

<!-- update_june_14_22 -->

<!-- update_june_14_23 -->

<!-- update_june_14_24 -->

<!-- update_june_14_25 -->

<!-- update_june_15_1 -->

<!-- update_june_15_2 -->

<!-- update_june_15_3 -->

<!-- update_june_15_4 -->

<!-- update_june_15_5 -->

<!-- update_june_15_6 -->

<!-- update_june_15_7 -->

<!-- update_june_15_8 -->

<!-- update_june_15_9 -->

<!-- update_june_15_10 -->

<!-- update_june_15_11 -->

<!-- update_june_15_12 -->

<!-- update_june_15_13 -->

<!-- update_june_15_14 -->

<!-- update_june_15_15 -->

<!-- update_june_15_16 -->

<!-- update_june_15_17 -->

<!-- update_june_15_18 -->

<!-- update_june_15_19 -->

<!-- update_june_15_20 -->

<!-- update_june_15_21 -->

<!-- update_june_15_22 -->

<!-- update_june_15_23 -->

<!-- update_june_15_24 -->

<!-- update_june_15_25 -->

<!-- update_june_15_26 -->

<!-- update_june_15_27 -->

<!-- update_june_15_28 -->

<!-- update_june_15_29 -->

<!-- update_june_15_30 -->

<!-- update_june_15_31 -->

<!-- update_june_15_32 -->

<!-- update_june_15_33 -->

<!-- update_june_16_1 -->

<!-- update_june_16_2 -->

<!-- update_june_16_3 -->

<!-- update_june_16_4 -->

<!-- update_june_16_5 -->
