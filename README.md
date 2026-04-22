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

<!-- update_june_16_6 -->

<!-- update_june_16_7 -->

<!-- update_june_16_8 -->

<!-- update_june_16_9 -->

<!-- update_june_16_10 -->

<!-- update_june_16_11 -->

<!-- update_june_16_12 -->

<!-- update_june_16_13 -->

<!-- update_june_16_14 -->

<!-- update_june_16_15 -->

<!-- update_june_16_16 -->

<!-- update_june_16_17 -->

<!-- update_june_16_18 -->

<!-- update_june_16_19 -->

<!-- update_june_16_20 -->

<!-- update_june_16_21 -->

<!-- update_june_16_22 -->

<!-- update_june_16_23 -->

<!-- update_june_16_24 -->

<!-- update_june_16_25 -->

<!-- update_june_16_26 -->

<!-- update_june_16_27 -->

<!-- update_june_16_28 -->

<!-- update_june_17_1 -->

<!-- update_june_17_2 -->

<!-- update_june_17_3 -->

<!-- update_june_17_4 -->

<!-- update_june_17_5 -->

<!-- update_june_17_6 -->

<!-- update_june_17_7 -->

<!-- update_june_17_8 -->

<!-- update_june_17_9 -->

<!-- update_june_17_10 -->

<!-- update_june_17_11 -->

<!-- update_june_17_12 -->

<!-- update_june_17_13 -->

<!-- update_june_17_14 -->

<!-- update_june_17_15 -->

<!-- update_june_17_16 -->

<!-- update_june_17_17 -->

<!-- update_june_17_18 -->

<!-- update_june_17_19 -->

<!-- update_june_17_20 -->

<!-- update_june_17_21 -->

<!-- update_june_17_22 -->

<!-- update_june_17_23 -->

<!-- update_june_17_24 -->

<!-- update_june_17_25 -->

<!-- update_june_17_26 -->

<!-- update_june_17_27 -->

<!-- update_june_17_28 -->

<!-- update_june_17_29 -->

<!-- update_june_17_30 -->

<!-- update_june_18_1 -->

<!-- update_june_18_2 -->

<!-- update_june_18_3 -->

<!-- update_june_18_4 -->

<!-- update_june_18_5 -->

<!-- update_june_18_6 -->

<!-- update_june_18_7 -->

<!-- update_june_18_8 -->

<!-- update_june_18_9 -->

<!-- update_june_18_10 -->

<!-- update_june_18_11 -->

<!-- update_june_18_12 -->

<!-- update_june_18_13 -->

<!-- update_june_18_14 -->

<!-- update_june_18_15 -->

<!-- update_june_18_16 -->

<!-- update_june_18_17 -->

<!-- update_june_18_18 -->

<!-- update_june_18_19 -->

<!-- update_june_18_20 -->

<!-- update_june_18_21 -->

<!-- update_june_18_22 -->

<!-- update_june_18_23 -->

<!-- update_june_18_24 -->

<!-- update_june_18_25 -->

<!-- update_june_18_26 -->

<!-- update_june_18_27 -->

<!-- update_june_19_1 -->

<!-- update_june_19_2 -->

<!-- update_june_19_3 -->

<!-- update_june_19_4 -->

<!-- update_june_19_5 -->

<!-- update_june_19_6 -->

<!-- update_june_19_7 -->

<!-- update_june_19_8 -->

<!-- update_june_19_9 -->

<!-- update_june_19_10 -->

<!-- update_june_19_11 -->

<!-- update_june_19_12 -->

<!-- update_june_19_13 -->

<!-- update_june_19_14 -->

<!-- update_june_19_15 -->

<!-- update_june_19_16 -->

<!-- update_june_19_17 -->

<!-- update_june_19_18 -->

<!-- update_june_19_19 -->

<!-- update_june_19_20 -->

<!-- update_june_19_21 -->

<!-- update_june_19_22 -->

<!-- update_june_19_23 -->

<!-- update_june_19_24 -->

<!-- update_june_19_25 -->

<!-- update_june_19_26 -->

<!-- update_june_19_27 -->

<!-- update_june_19_28 -->

<!-- update_june_19_29 -->

<!-- update_june_19_30 -->

<!-- update_june_19_31 -->

<!-- update_june_20_1 -->

<!-- update_june_20_2 -->

<!-- update_june_20_3 -->

<!-- update_june_20_4 -->

<!-- update_june_20_5 -->

<!-- update_june_20_6 -->

<!-- update_june_20_7 -->

<!-- update_june_20_8 -->

<!-- update_june_20_9 -->

<!-- update_june_20_10 -->

<!-- update_june_20_11 -->

<!-- update_june_20_12 -->

<!-- update_june_20_13 -->

<!-- update_june_20_14 -->

<!-- update_june_20_15 -->

<!-- update_june_20_16 -->

<!-- update_june_20_17 -->

<!-- update_june_20_18 -->

<!-- update_june_20_19 -->

<!-- update_june_20_20 -->

<!-- update_june_20_21 -->

<!-- update_june_20_22 -->

<!-- update_june_20_23 -->

<!-- update_june_20_24 -->

<!-- update_june_20_25 -->

<!-- update_june_20_26 -->

<!-- update_june_20_27 -->

<!-- update_june_20_28 -->

<!-- update_june_20_29 -->

<!-- update_june_21_1 -->

<!-- update_june_21_2 -->

<!-- update_june_21_3 -->

<!-- update_june_21_4 -->

<!-- update_june_21_5 -->

<!-- update_june_21_6 -->

<!-- update_june_21_7 -->

<!-- update_june_21_8 -->

<!-- update_june_21_9 -->

<!-- update_june_21_10 -->

<!-- update_june_21_11 -->

<!-- update_june_21_12 -->

<!-- update_june_21_13 -->

<!-- update_june_21_14 -->

<!-- update_june_21_15 -->

<!-- update_june_21_16 -->

<!-- update_june_21_17 -->

<!-- update_june_21_18 -->

<!-- update_june_21_19 -->

<!-- update_june_21_20 -->

<!-- update_june_21_21 -->

<!-- update_june_21_22 -->

<!-- update_june_21_23 -->

<!-- update_june_21_24 -->

<!-- update_june_21_25 -->

<!-- update_june_21_26 -->

<!-- update_june_22_1 -->

<!-- update_june_22_2 -->

<!-- update_june_22_3 -->

<!-- update_june_22_4 -->

<!-- update_june_22_5 -->

<!-- update_june_22_6 -->

<!-- update_june_22_7 -->

<!-- update_june_22_8 -->

<!-- update_june_22_9 -->

<!-- update_june_22_10 -->

<!-- update_june_22_11 -->

<!-- update_june_22_12 -->

<!-- update_june_22_13 -->

<!-- update_june_22_14 -->

<!-- update_june_22_15 -->

<!-- update_june_22_16 -->

<!-- update_june_22_17 -->

<!-- update_june_22_18 -->

<!-- update_june_22_19 -->

<!-- update_june_22_20 -->

<!-- update_june_22_21 -->

<!-- update_june_22_22 -->

<!-- update_june_22_23 -->

<!-- update_june_22_24 -->

<!-- update_june_22_25 -->

<!-- update_june_22_26 -->

<!-- update_june_22_27 -->

<!-- update_june_22_28 -->

<!-- update_june_22_29 -->

<!-- update_june_22_30 -->

<!-- update_june_22_31 -->

<!-- update_june_22_32 -->

<!-- update_june_23_1 -->

<!-- update_june_23_2 -->

<!-- update_june_23_3 -->

<!-- update_june_23_4 -->

<!-- update_june_23_5 -->

<!-- update_june_23_6 -->

<!-- update_june_23_7 -->

<!-- update_june_23_8 -->

<!-- update_june_23_9 -->

<!-- update_june_23_10 -->

<!-- update_june_23_11 -->

<!-- update_june_23_12 -->

<!-- update_june_23_13 -->

<!-- update_june_23_14 -->

<!-- update_june_23_15 -->

<!-- update_june_23_16 -->

<!-- update_june_23_17 -->

<!-- update_june_23_18 -->

<!-- update_june_23_19 -->

<!-- update_june_23_20 -->

<!-- update_june_23_21 -->

<!-- update_june_23_22 -->

<!-- update_june_23_23 -->

<!-- update_june_23_24 -->

<!-- update_june_23_25 -->

<!-- update_june_23_26 -->

<!-- update_june_23_27 -->

<!-- update_june_23_28 -->

<!-- update_june_23_29 -->

<!-- update_june_23_30 -->

<!-- update_june_24_1 -->

<!-- update_june_24_2 -->

<!-- update_june_24_3 -->

<!-- update_june_24_4 -->

<!-- update_june_24_5 -->

<!-- update_june_24_6 -->

<!-- update_june_24_7 -->

<!-- update_june_24_8 -->

<!-- update_june_24_9 -->

<!-- update_june_24_10 -->

<!-- update_june_24_11 -->

<!-- update_june_24_12 -->

<!-- update_june_24_13 -->

<!-- update_june_24_14 -->

<!-- update_june_24_15 -->

<!-- update_june_24_16 -->

<!-- update_june_24_17 -->

<!-- update_june_24_18 -->

<!-- update_june_24_19 -->

<!-- update_june_24_20 -->

<!-- update_june_24_21 -->

<!-- update_june_24_22 -->

<!-- update_june_24_23 -->

<!-- update_june_24_24 -->

<!-- update_june_24_25 -->

<!-- update_june_24_26 -->

<!-- update_june_24_27 -->

<!-- update_june_24_28 -->

<!-- update_june_25_1 -->

<!-- update_june_25_2 -->

<!-- update_june_25_3 -->

<!-- update_june_25_4 -->

<!-- update_june_25_5 -->

<!-- update_june_25_6 -->

<!-- update_june_25_7 -->

<!-- update_june_25_8 -->

<!-- update_june_25_9 -->

<!-- update_june_25_10 -->

<!-- update_june_25_11 -->

<!-- update_june_25_12 -->

<!-- update_june_25_13 -->

<!-- update_june_25_14 -->

<!-- update_june_25_15 -->

<!-- update_june_25_16 -->

<!-- update_june_25_17 -->

<!-- update_june_25_18 -->

<!-- update_june_25_19 -->

<!-- update_june_25_20 -->

<!-- update_june_25_21 -->

<!-- update_june_25_22 -->

<!-- update_june_25_23 -->

<!-- update_june_25_24 -->

<!-- update_june_25_25 -->

<!-- update_june_25_26 -->

<!-- update_june_25_27 -->

<!-- update_june_25_28 -->

<!-- update_june_25_29 -->

<!-- update_june_25_30 -->

<!-- update_june_25_31 -->

<!-- update_june_26_1 -->

<!-- update_june_26_2 -->

<!-- update_june_26_3 -->

<!-- update_june_26_4 -->

<!-- update_june_26_5 -->

<!-- update_june_26_6 -->

<!-- update_june_26_7 -->

<!-- update_june_26_8 -->

<!-- update_june_26_9 -->

<!-- update_june_26_10 -->

<!-- update_june_26_11 -->

<!-- update_june_26_12 -->

<!-- update_june_26_13 -->

<!-- update_june_26_14 -->

<!-- update_june_26_15 -->

<!-- update_june_26_16 -->

<!-- update_june_26_17 -->

<!-- update_june_26_18 -->

<!-- update_june_26_19 -->

<!-- update_june_26_20 -->

<!-- update_june_26_21 -->

<!-- update_june_26_22 -->

<!-- update_june_26_23 -->

<!-- update_june_26_24 -->

<!-- update_june_26_25 -->

<!-- update_june_26_26 -->

<!-- update_june_26_27 -->

<!-- update_june_27_1 -->

<!-- update_june_27_2 -->

<!-- update_june_27_3 -->

<!-- update_june_27_4 -->

<!-- update_june_27_5 -->

<!-- update_june_27_6 -->

<!-- update_june_27_7 -->

<!-- update_june_27_8 -->

<!-- update_june_27_9 -->

<!-- update_june_27_10 -->

<!-- update_june_27_11 -->

<!-- update_june_27_12 -->

<!-- update_june_27_13 -->

<!-- update_june_27_14 -->

<!-- update_june_27_15 -->

<!-- update_june_27_16 -->

<!-- update_june_27_17 -->

<!-- update_june_27_18 -->

<!-- update_june_27_19 -->

<!-- update_june_27_20 -->

<!-- update_june_27_21 -->

<!-- update_june_27_22 -->

<!-- update_june_27_23 -->

<!-- update_june_27_24 -->

<!-- update_june_27_25 -->

<!-- update_june_27_26 -->

<!-- update_june_27_27 -->

<!-- update_june_27_28 -->

<!-- update_range_2026-04-19_1 -->

<!-- update_range_2026-04-19_2 -->

<!-- update_range_2026-04-19_3 -->

<!-- update_range_2026-04-19_4 -->

<!-- update_range_2026-04-19_5 -->

<!-- update_range_2026-04-19_6 -->

<!-- update_range_2026-04-19_7 -->

<!-- update_range_2026-04-19_8 -->

<!-- update_range_2026-04-19_9 -->

<!-- update_range_2026-04-19_10 -->

<!-- update_range_2026-04-19_11 -->

<!-- update_range_2026-04-19_12 -->

<!-- update_range_2026-04-19_13 -->

<!-- update_range_2026-04-19_14 -->

<!-- update_range_2026-04-19_15 -->

<!-- update_range_2026-04-19_16 -->

<!-- update_range_2026-04-19_17 -->

<!-- update_range_2026-04-19_18 -->

<!-- update_range_2026-04-19_19 -->

<!-- update_range_2026-04-19_20 -->

<!-- update_range_2026-04-19_21 -->

<!-- update_range_2026-04-19_22 -->

<!-- update_range_2026-04-19_23 -->

<!-- update_range_2026-04-19_24 -->

<!-- update_range_2026-04-19_25 -->

<!-- update_range_2026-04-19_26 -->

<!-- update_range_2026-04-20_1 -->

<!-- update_range_2026-04-20_2 -->

<!-- update_range_2026-04-20_3 -->

<!-- update_range_2026-04-20_4 -->

<!-- update_range_2026-04-20_5 -->

<!-- update_range_2026-04-20_6 -->

<!-- update_range_2026-04-20_7 -->

<!-- update_range_2026-04-20_8 -->

<!-- update_range_2026-04-20_9 -->

<!-- update_range_2026-04-20_10 -->

<!-- update_range_2026-04-20_11 -->

<!-- update_range_2026-04-20_12 -->

<!-- update_range_2026-04-20_13 -->

<!-- update_range_2026-04-20_14 -->

<!-- update_range_2026-04-20_15 -->

<!-- update_range_2026-04-20_16 -->

<!-- update_range_2026-04-20_17 -->

<!-- update_range_2026-04-20_18 -->

<!-- update_range_2026-04-20_19 -->

<!-- update_range_2026-04-20_20 -->

<!-- update_range_2026-04-20_21 -->

<!-- update_range_2026-04-20_22 -->

<!-- update_range_2026-04-20_23 -->

<!-- update_range_2026-04-20_24 -->

<!-- update_range_2026-04-20_25 -->

<!-- update_range_2026-04-20_26 -->

<!-- update_range_2026-04-20_27 -->

<!-- update_range_2026-04-20_28 -->

<!-- update_range_2026-04-20_29 -->

<!-- update_range_2026-04-20_30 -->

<!-- update_range_2026-04-20_31 -->

<!-- update_range_2026-04-20_32 -->

<!-- update_range_2026-04-21_1 -->

<!-- update_range_2026-04-21_2 -->

<!-- update_range_2026-04-21_3 -->

<!-- update_range_2026-04-21_4 -->

<!-- update_range_2026-04-21_5 -->

<!-- update_range_2026-04-21_6 -->

<!-- update_range_2026-04-21_7 -->

<!-- update_range_2026-04-21_8 -->

<!-- update_range_2026-04-21_9 -->

<!-- update_range_2026-04-21_10 -->

<!-- update_range_2026-04-21_11 -->

<!-- update_range_2026-04-21_12 -->

<!-- update_range_2026-04-21_13 -->

<!-- update_range_2026-04-21_14 -->

<!-- update_range_2026-04-21_15 -->

<!-- update_range_2026-04-21_16 -->

<!-- update_range_2026-04-21_17 -->

<!-- update_range_2026-04-21_18 -->

<!-- update_range_2026-04-21_19 -->

<!-- update_range_2026-04-21_20 -->

<!-- update_range_2026-04-21_21 -->

<!-- update_range_2026-04-21_22 -->

<!-- update_range_2026-04-21_23 -->

<!-- update_range_2026-04-21_24 -->

<!-- update_range_2026-04-21_25 -->

<!-- update_range_2026-04-21_26 -->

<!-- update_range_2026-04-21_27 -->

<!-- update_range_2026-04-21_28 -->

<!-- update_range_2026-04-21_29 -->

<!-- update_range_2026-04-21_30 -->

<!-- update_range_2026-04-21_31 -->

<!-- update_range_2026-04-21_32 -->

<!-- update_range_2026-04-21_33 -->

<!-- update_range_2026-04-21_34 -->

<!-- update_range_2026-04-21_35 -->

<!-- update_range_2026-04-21_36 -->

<!-- update_range_2026-04-22_1 -->

<!-- update_range_2026-04-22_2 -->
