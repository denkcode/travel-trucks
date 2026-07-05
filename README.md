# 🚐 TravelTrucks

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=reactquery)](https://tanstack.com/query/latest)
[![Swiper](https://img.shields.io/badge/Swiper-11-6332F6?logo=swiper)](https://swiperjs.com/)

A modern web application for browsing, filtering, and booking camper vans. TravelTrucks allows users to explore available campers, apply advanced filters, view detailed camper information, browse photo galleries, read customer reviews, and submit booking requests through an intuitive interface.

## 🌐 Live Demo

**Application:** https://travel-trucks-five-liard.vercel.app/

**Repository:** https://github.com/denkcode/travel-trucks

---

# ✨ Features

### 🏠 Home Page

- Hero banner
- Modern landing page
- Call-to-action button
- Navigation to the camper catalog

### 🚐 Camper Catalog

- Display all available campers
- Backend filtering
- Infinite pagination (Load More)
- Search by location
- Filter by camper form
- Filter by engine type
- Filter by transmission
- Responsive camper cards
- Loading states
- Empty search state
- Error handling

### 📄 Camper Details

- Complete camper information
- Image gallery
- Customer reviews
- Five-star rating display
- Booking form
- Successful booking notification

---

# 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- React 19
- TypeScript

### Styling

- Tailwind CSS

### Data Fetching

- TanStack Query
- Axios

### Forms

- React Hook Form

### UI Libraries

- Swiper
- React Icons

### Development Tools

- ESLint
- Prettier

---

# 📂 Project Structure

```text
src
│
├── app
│   ├── catalog
│   ├── catalog/[camperId]
│   ├── api
│   ├── layout.tsx
│   └── page.tsx
│
├── features
│   ├── catalog
│   │   ├── hooks
│   │   └── components
│   │
│   ├── camper
│   │   ├── hooks
│   │   └── components
│   │
│   ├── home
│   └── components
│
├── services
│
├── hooks
│
├── constants
│
├── types
│
├── public
│
└── styles
```

The project follows a feature-based architecture that separates business logic, reusable UI components, services, hooks, and types into dedicated modules, improving scalability and maintainability.

---

# 🚀 Getting Started

## Clone repository

```bash
git clone https://github.com/denkcode/travel-trucks.git
```

## Go to project folder

```bash
cd travel-trucks
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

The application will be available at

```
http://localhost:3000
```

---

# 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

---

### Production Build

```bash
npm run build
```

Creates an optimized production build.

---

### Start Production

```bash
npm run start
```

Runs the production version.

---

### Lint

```bash
npm run lint
```

Runs ESLint.

---

# 🌐 API

The project communicates with the official GoIT backend.

Base URL

```
https://campers-api.goit.study
```

### Main API functionality

- Get camper catalog
- Infinite pagination
- Backend filtering
- Camper details
- Camper reviews
- Booking requests

Filtering is performed on the server using query parameters.

---

# 📖 Application Pages

## 🏠 Home

The landing page introduces the application and provides quick navigation to the camper catalog.

---

## 🚐 Catalog

The catalog page allows users to

- browse campers
- filter campers
- search by location
- load additional campers
- open camper details

---

## 📄 Camper Details

The details page contains

- camper gallery
- specifications
- reviews
- booking form

---

# ⚡ Performance

The application includes several performance optimizations:

- TanStack Query caching
- Infinite Query pagination
- Optimized API requests
- Component-based architecture
- Client-side routing
- Lazy loading of additional camper pages

---

# 📱 Responsive Design

The project follows the provided Figma design and includes responsive layouts for different screen sizes.

---

# 🎨 UI Features

- Modern interface
- Clean component architecture
- Loading indicators
- Error handling
- Empty state
- Interactive filters
- Image slider
- Booking form validation

---

# 📸 Screenshots

## Home

> Add screenshot here

---

## Camper Catalog

> Add screenshot here

---

## Camper Details

> Add screenshot here

---

# 🚀 Deployment

The application is deployed on **Vercel**.

Production URL

https://travel-trucks-five-liard.vercel.app/

---

# 🔮 Future Improvements

Possible future enhancements:

- Favorites functionality
- Authentication
- User profile
- Booking history
- Dark mode
- Camper comparison
- Interactive map integration
- Advanced sorting options

---

# 👨‍💻 Author

**Denys Penzin**

GitHub

https://github.com/denkcode

LinkedIn

_Add your LinkedIn profile_

---

# 📄 License

This project was developed as a final project for the **GoIT Fullstack Developer** course.

It is intended for educational purposes.

---

## ⭐ If you like this project, don't forget to leave a star on GitHub!