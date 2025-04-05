import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CarCatalogPage = lazy(() => import('../pages/CarCatalogPage/CarCatalogPage'));
const CarDetailsPage = lazy(() => import('../pages/CarDetailsPage/CarDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

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
