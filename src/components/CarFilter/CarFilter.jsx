import { Field, Form, Formik } from 'formik';
import s from './CarFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarBrands } from '../../store/carBrands/operations';
import { selectCarBrands } from '../../store/carBrands/selectors';

const CarFilter = () => {
  const initialValues = {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

  const carBrands = useSelector(selectCarBrands);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarBrands());
  });

  return (
    <div className={s.carFilter}>
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
            Сar mileage / km
          </label>
          <Field className={s.inputText} type="text" name="mileageFrom" id="mileageFrom" placeholder="From" />

          <label htmlFor="mileageTo" className="visually-hidden">
            Car mileage to
          </label>
          <Field className={s.inputText} type="text" name="mileageTo" id="mileageTo" placeholder="To" />

          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarFilter;
