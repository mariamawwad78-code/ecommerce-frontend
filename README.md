# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ModernStore - E-Commerce Frontend

A fully responsive, feature-rich e-commerce frontend application built with React, Vite, and React Router, utilizing Context API and LocalStorage for state management and data persistence.

## Project Structure & Architecture

The project is organized into modular directories:
- `src/components`: Reusable UI components (Navbar, Footer, ProductCard, Alert, Loader, EmptyState).
- `src/pages`: Application views (Home, ProductsPage, ProductDetails, CartPage, Login, Register, Checkout, Account, AdminDashboard, NotFound).
- `src/context`: Global state management (`CartContext.jsx`).
- `src/data`: Mock datasets (`products.js`).
- `src/styles`: CSS stylesheets.

## Key Features

1. **Routing & Navigation:** Multi-page navigation implemented via React Router.
2. **Product Catalog & Search:** Browse 20+ products across 5 categories with real-time search and filtering.
3. **Shopping Cart Management:** Add, update quantities, remove items, clear cart, calculation of total price, and persistence using `LocalStorage`.
4. **Authentication & Forms:** Login and Register pages with basic form validation and error handling.
5. **Checkout & Admin Dashboard:** Checkout flow and admin dashboard to add products and manage store items.
6. **Responsive Design:** Fully responsive layout optimized for Desktop, Tablet, and Mobile screens.

## Tech Stack

- **Framework:** React (Vite)
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Persistence:** LocalStorage
- **Styling:** Inline Styles / CSS