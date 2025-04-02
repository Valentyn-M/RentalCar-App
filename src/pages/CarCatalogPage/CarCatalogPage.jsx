import React from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarList from '../../components/CarList/CarList';

const CarCatalogPage = () => {
  return (
    <div>
      <DocumentTitle>RentalCar | Car Catalog</DocumentTitle>
      <CarFilter />
      <CarList />
    </div>
  );
};

export default CarCatalogPage;
