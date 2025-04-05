import s from './CarCatalogPage.module.scss';
import DocumentTitle from '../../components/DocumentTitle';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarList from '../../components/CarList/CarList';
import clsx from 'clsx';

const CarCatalogPage = () => {
  return (
    <div className={clsx(s.carCatalogPage, 'container')}>
      <DocumentTitle>RentalCar | Car Catalog</DocumentTitle>
      <CarFilter />
      <CarList />
    </div>
  );
};

export default CarCatalogPage;
