import { useDispatch, useSelector } from 'react-redux';
import s from './CarList.module.css';
import { selectCars, selectCurrentPage, selectTotalPages } from '../../store/cars/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../store/cars/operations';
import { selectFilters } from '../../store/filters/selectors';
import { setCurrentPage } from '../../store/cars/slice';

const CarList = () => {
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [dispatch, filters, currentPage]);

  const handleClick = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage());
    }
  };

  return (
    <div className={s.carList}>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.brand}</li>
        ))}
      </ul>
      <button className={s.btn} type="button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default CarList;
