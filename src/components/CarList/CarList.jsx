import { useDispatch, useSelector } from 'react-redux';
import s from './CarList.module.css';
import { selectCars, selectCurrentPage, selectTotalPages } from '../../store/cars/selectors';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../store/cars/operations';
import { selectFilters } from '../../store/filters/selectors';
import { setCurrentPage } from '../../store/cars/slice';
import CarItem from '../CarItem/CarItem';
import Button from '../Button/Button';
import { useSearchParams } from 'react-router-dom';
import { setFilters } from '../../store/filters/slice';
import { useSnackbar } from 'notistack';

const CarList = () => {
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const [filtersInitialized, setFiltersInitialized] = useState(false);

  // Get filters from URL
  useEffect(() => {
    const initialFilters = {
      brand: searchParams.get('brand') || '',
      price: searchParams.get('price') || '',
      mileageFrom: searchParams.get('mileageFrom') || '',
      mileageTo: searchParams.get('mileageTo') || '',
    };

    dispatch(setFilters(initialFilters));
    setFiltersInitialized(true);
  }, [dispatch, searchParams]);

  // Load cars after the filters have been set
  useEffect(() => {
    if (filtersInitialized) {
      dispatch(fetchCars(filters));
    }
  }, [dispatch, filters, currentPage, filtersInitialized]);

  const handleClick = () => {
    if (currentPage < totalPages) {
      if (totalPages - currentPage === 1) {
        enqueueSnackbar('All available cars are loaded', { variant: 'info' });
      }
      dispatch(setCurrentPage());
    }
  };

  return (
    <section className={s.carList}>
      <ul>
        {cars.map((car) => (
          <CarItem key={car.id} carData={car} />
        ))}
      </ul>
      {currentPage < totalPages && <Button onClick={handleClick}>Load more</Button>}
    </section>
  );
};

export default CarList;
