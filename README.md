# 🚗 RentalCar App

![RentalCar Preview](./preview.jpg)

## 📋 Project Overview

**RentalCar** is a modern and responsive car rental web app that allows users to browse, filter, and book cars easily. It is built with React and includes smooth animations, form validation, and a clean design.

## 🔧 Key Features

- 📚 Car catalog with pagination
- 🔍 Filtering by brand, price, mileage
- 🔽 Custom **MUI Select** dropdowns styled to match the design
- 🔄 Animated loader styled as a spinning wheel
- ℹ️ Detailed car pages with specifications
- 📆 Booking form with custom **MUI Date Picker**
- 🌐 Routing via React Router
- ⚙️ State management using Redux Toolkit
- ✅ Form validation with Formik & Yup
- 🎨 Modular styles with SCSS (CSS Modules)
- 📦 Deployment-ready (Vercel)

## 🛠 Tech Stack

- React + Vite
- Redux Toolkit
- React Router
- MUI (Date Picker, Select)
- Formik + Yup
- SCSS Modules
- Notistack (Toast notifications)
- Vercel

## ⚙️ Installation Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/Valentyn-M/RentalCar-App.git
   cd RentalCar-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```bash
src/
├── components/        # Reusable components (UI, Layout, Features)
├── images/            # Main background images
├── pages/             # Application pages (Home, Catalog, Car Details)
├── store/             # Redux slices, async operations, selectors
├── styles/            # Global SCSS variables and base styles
├── App.jsx            # Root component with routing
├── App.scss           # Root styles
├── DocumentTitle.jsx  # Utility for setting document titles
├── Layout.jsx         # Page layout wrapper
├── main.jsx           # Entry point
public/
├── favicon.svg        # App favicon
├── sprite.svg         # Sprite icons (used by SvgArrowIcon, etc.)
```

## 👨‍💻 Author

**Valentyn Mostovyi**  
[GitHub → Valentyn-M](https://github.com/Valentyn-M)
