import { Field, Form, Formik } from 'formik';
import s from './CarFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarBrands } from '../../store/carBrands/operations';
import { selectCarBrands } from '../../store/carBrands/selectors';
import { setFilters } from '../../store/filters/slice';
import { resetCurrentPage, resetItems } from '../../store/cars/slice';
import Button from '../Button/Button';
import { useSearchParams } from 'react-router-dom';

const CarFilter = () => {
  const carBrands = useSelector(selectCarBrands);

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const initialValues = {
    brand: searchParams.get('brand') || '',
    price: searchParams.get('price') || '',
    mileageFrom: searchParams.get('mileageFrom') || '',
    mileageTo: searchParams.get('mileageTo') || '',
  };

  const handleSubmit = (values) => {
    dispatch(resetItems());
    dispatch(resetCurrentPage());
    dispatch(setFilters(values));

    const filteredParams = {};
    if (values.brand) filteredParams.brand = values.brand;
    if (values.price) filteredParams.price = values.price;
    if (values.mileageFrom) filteredParams.mileageFrom = values.mileageFrom;
    if (values.mileageTo) filteredParams.mileageTo = values.mileageTo;
    setSearchParams(filteredParams);
  };

  // The backend returns incorrect records starting from the value 80
  const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  return (
    <section className={s.carFilter}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label} htmlFor="brand">
            Car brand
          </label>
          <Field className={s.inputSelect} as="select" name="brand" id="brand">
            <option value="">Choose a brand</option>
            {carBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>

          <label className={s.label} htmlFor="price">
            Price / 1 hour
          </label>
          <Field className={s.inputSelect} as="select" name="price" id="price">
            <option value="">Choose a price</option>
            {priceOptions.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </Field>

          <label className={s.label} htmlFor="mileageFrom">
            Car mileage / km
          </label>
          <Field className={s.inputText} type="text" name="mileageFrom" id="mileageFrom" placeholder="From" />

          <label htmlFor="mileageTo" className="visually-hidden">
            Car mileage to
          </label>
          <Field className={s.inputText} type="text" name="mileageTo" id="mileageTo" placeholder="To" />

          <Button type={'submit'}>Search</Button>
        </Form>
      </Formik>
    </section>
  );
};

export default CarFilter;
