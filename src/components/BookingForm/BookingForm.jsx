import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './BookingForm.module.css';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { useRef } from 'react';
import { useSnackbar } from 'notistack';

const BookingForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const btnRef = useRef(null);

  const handlSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();

    enqueueSnackbar('Rental request sent!', { variant: 'success' });

    if (btnRef.current) {
      btnRef.current.blur();
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    date: Yup.date().min(new Date(), 'Booking date must be in the future').required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment is too long'),
  });

  return (
    <div className={s.bookingForm}>
      <h3 className={s.title}>Book your car now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handlSubmit} validationSchema={validationSchema}>
        <Form>
          <label className={s.label} htmlFor="name">
            <Field className={s.input} type="text" name="name" id="name" placeholder="Name*" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label} htmlFor="email">
            <Field className={s.input} type="email" name="email" id="email" placeholder="Email*" />
            <ErrorMessage className={s.error} name="email" component="span" />
          </label>
          <label className={s.label} htmlFor="date">
            <Field className={s.input} type="text" name="date" id="date" placeholder="Booking date*" />
            <ErrorMessage className={s.error} name="date" component="span" />
          </label>
          <label className={s.label} htmlFor="comment">
            <Field className={s.input} type="text" name="comment" id="comment" placeholder="Comment" />
            <ErrorMessage className={s.error} name="comment" component="span" />
          </label>
          <Button type={'submit'} ref={btnRef}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
