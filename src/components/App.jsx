import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const CarCatalogPage = lazy(() => import('../pages/CarCatalogPage/CarCatalogPage'));
const CarDetailsPage = lazy(() => import('../pages/CarDetailsPage/CarDetailsPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-cars" element={<CarCatalogPage />} />
        <Route path="/cars/:carId" element={<CarDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
