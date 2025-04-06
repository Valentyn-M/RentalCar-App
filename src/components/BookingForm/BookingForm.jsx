import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import s from './BookingForm.module.scss';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const BookingForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const btnRef = useRef(null);

  const initialValues = {
    name: '',
    email: '',
    date: null, // DatePicker needs null value, not ''
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    date: Yup.date().required('Booking date is required'),
    comment: Yup.string().max(500, 'Comment is too long'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    enqueueSnackbar('Rental request sent!', { variant: 'success' });
    btnRef.current?.blur();
  };

  return (
    <section className={s.bookingForm}>
      <h3 className={s.title}>Book your car now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ values, setFieldValue, errors, touched }) => (
            <Form className={s.form}>
              {/* Name */}
              <label className={s.label} htmlFor="name">
                <Field className={s.field} type="text" name="name" id="name" placeholder="Name*" />
                {touched.name && errors.name && <span className={s.error}>{errors.name}</span>}
              </label>

              {/* Email */}
              <label className={s.label} htmlFor="email">
                <Field className={s.field} type="email" name="email" id="email" placeholder="Email*" />
                {touched.email && errors.email && <span className={s.error}>{errors.email}</span>}
              </label>

              {/* DatePicker */}
              <DatePicker
                value={values.date}
                disablePast
                onChange={(value) => setFieldValue('date', value)}
                slotProps={{
                  textField: {
                    name: 'date',
                    placeholder: 'Booking date*',
                    fullWidth: true,
                    variant: 'standard',
                    InputProps: {
                      disableUnderline: true,
                      className: clsx(s.field, s.dateInput),
                    },
                    error: touched.date && Boolean(errors.date),
                    helperText: touched.date && errors.date,
                  },
                  openPickerButton: {
                    className: s.dateIcon,
                  },
                }}
              />

              {/* Comment */}
              <label className={s.label} htmlFor="comment">
                <Field
                  as="textarea"
                  className={clsx(s.field, s.textarea)}
                  name="comment"
                  id="comment"
                  placeholder="Comment"
                />
                {touched.comment && errors.comment && <span className={s.error}>{errors.comment}</span>}
              </label>

              <button type="submit" className={clsx(s.button, 'mainBtn')} ref={btnRef}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </LocalizationProvider>
    </section>
  );
};

export default BookingForm;
