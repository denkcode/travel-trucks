# 🚐 TravelTrucks

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154)](https://tanstack.com/query/latest)

TravelTrucks is a modern web application for browsing and booking camper vans. The application allows users to explore available campers, apply server-side filters, view detailed information, browse image galleries, read customer reviews, and submit booking requests through an intuitive interface.

---

## 🔗 Live Demo

🌐 **Website**

https://travel-trucks-five-liard.vercel.app/

📂 **Source Code**

https://github.com/denkcode/travel-trucks

---

# ✨ Features

### Home Page

- Hero section
- Call-to-action button
- Navigation to the camper catalog

### Camper Catalog

- Browse available campers
- Infinite pagination using **Load More**
- Server-side filtering
- Search by location
- Filter by camper form
- Filter by engine type
- Filter by transmission
- Loading state
- Empty search state
- Error handling

### Camper Details

- Detailed camper information
- Responsive image gallery
- Customer reviews
- Five-star ratings
- Booking form
- Success notification after booking

---

# 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- React
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

### Development

- ESLint
- Prettier

---

# 🏗 Architecture

The project follows a **feature-based architecture**, making the codebase scalable, maintainable, and easy to extend.

```
src
│
├── app
│
├── features
│   ├── catalog
│   ├── camper
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

Business logic, reusable components, hooks, API services, and shared types are separated into dedicated modules.

---

# 🌐 Backend API

The application communicates with the official **TravelTrucks REST API**.

### Base URL

```
https://campers-api.goit.study
```

### Documentation

https://campers-api.goit.study/docs

The backend provides endpoints for:

- Camper catalog
- Camper details
- Reviews
- Booking requests
- Server-side filtering
- Pagination

Data fetching is implemented using **TanStack Query**, while HTTP requests are performed with **Axios**.

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/denkcode/travel-trucks.git
```

Navigate to the project

```bash
cd travel-trucks
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Starts the development server |
| npm run build | Creates a production build |
| npm run start | Starts the production server |
| npm run lint | Runs ESLint |

---

# 📖 Application Pages

## 🏠 Home

The landing page introduces the application and provides quick navigation to the camper catalog.

---

## 🚐 Catalog

Users can

- browse campers
- search by location
- filter campers
- load additional campers
- open camper details

---

## 📄 Camper Details

Users can

- browse the image gallery
- read reviews
- check camper specifications
- submit a booking request

---

# ⚡ Performance

The application includes several optimizations:

- TanStack Query caching
- Infinite queries
- Server-side filtering
- Optimized API requests
- Component-based architecture
- Client-side routing

---

# 📱 Responsive Design

The application follows the provided Figma design and is optimized for desktop devices. Additional responsive behavior has also been implemented to improve the user experience on smaller screens.

---

# 📸 Screenshots

## Home

_Add screenshot_

---

## Catalog

_Add screenshot_

---

## Camper Details

_Add screenshot_

---

# 🚀 Deployment

The application is deployed on **Vercel**.

https://travel-trucks-five-liard.vercel.app/

---

# 👨‍💻 Author

**Denys Penzin**

GitHub

https://github.com/denkcode

---

# 🙏 Acknowledgements

- GoIT
- TravelTrucks API
- Next.js
- TanStack Query
- Tailwind CSS
- Swiper

---

# 📄 License

This project was developed as the final project for the **GoIT Fullstack Developer** course and is intended for educational purposes.