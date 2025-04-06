import { useDispatch, useSelector } from 'react-redux';
import s from './CarList.module.scss';
import { selectCars, selectCurrentPage, selectLoading, selectTotalPages } from '../../store/cars/selectors';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../store/cars/operations';
import { selectFilters } from '../../store/filters/selectors';
import { setCurrentPage } from '../../store/cars/slice';
import CarItem from '../CarItem/CarItem';
import { useSearchParams } from 'react-router-dom';
import { setFilters } from '../../store/filters/slice';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import LoaderWheel from '../../components/LoaderWheel/LoaderWheel';

const CarList = () => {
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectLoading);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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
      dispatch(fetchCars(filters)).finally(() => {
        setIsFirstLoad(false);
      });
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
    <>
      {isFirstLoad ? (
        <div className={s.loaderWrap}>
          <LoaderWheel />
        </div>
      ) : (
        <section className={s.carList}>
          <h2 className="visually-hidden">List of cars for rent</h2>
          <ul className={s.list}>
            {cars.map((car) => (
              <CarItem key={car.id} carData={car} />
            ))}
          </ul>
          {currentPage < totalPages &&
            (isLoading ? (
              <div className={s.loaderWrap}>
                <LoaderWheel />
              </div>
            ) : (
              <button type="button" className={clsx(s.button, 'mainBtn')} onClick={handleClick}>
                Load more
              </button>
            ))}
        </section>
      )}
    </>
  );
};

export default CarList;
