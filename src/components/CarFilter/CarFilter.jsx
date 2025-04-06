import { useEffect, useState } from 'react';
import s from './CarFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarBrands } from '../../store/carBrands/operations';
import { selectCarBrands } from '../../store/carBrands/selectors';
import { setFilters } from '../../store/filters/slice';
import { resetCurrentPage, resetItems } from '../../store/cars/slice';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { NumericFormat } from 'react-number-format';
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';
import SvgArrowIcon from '../SvgArrowIcon/SvgArrowIcon';

const CarFilter = () => {
  const carBrands = useSelector(selectCarBrands);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [formValues, setFormValues] = useState({
    brand: searchParams.get('brand') || '',
    price: searchParams.get('price') || '',
    mileageFrom: searchParams.get('mileageFrom') || '',
    mileageTo: searchParams.get('mileageTo') || '',
  });

  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  // The backend returns incorrect records starting from the value 80
  const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetItems());
    dispatch(resetCurrentPage());
    dispatch(setFilters(formValues));

    const filteredParams = {};
    if (formValues.brand) filteredParams.brand = formValues.brand;
    if (formValues.price) filteredParams.price = formValues.price;
    if (formValues.mileageFrom) filteredParams.mileageFrom = formValues.mileageFrom;
    if (formValues.mileageTo) filteredParams.mileageTo = formValues.mileageTo;
    setSearchParams(filteredParams);
  };

  return (
    <section className={s.carFilter}>
      <h2 className="visually-hidden">Choose a rental car</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        {/* Cars */}
        <div className={s.formBlockWrap}>
          <label className={s.label} htmlFor="brand">
            Car brand
          </label>
          <FormControl
            fullWidth
            sx={{
              maxWidth: '204px',
              borderRadius: '12px',
              backgroundColor: 'var(--inputs)',
              '& .MuiOutlinedInput-root': {
                height: '44px',
                width: '204px',
                borderRadius: '12px',
                backgroundColor: 'var(--inputs)',
                fontFamily: 'var(--font-family)',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.25,
                color: 'var(--main)',
                boxShadow: 'none',
                padding: 0,
                '& fieldset': {
                  border: 'none',
                },
                '&:hover': {
                  boxShadow: 'inset 0 0 0 1px var(--button-hover)',
                },
                '&.Mui-focused': {
                  boxShadow: 'inset 0 0 0 2px var(--button-hover)',
                },
              },
              '& .MuiSelect-select': {
                paddingLeft: '16px',
                paddingRight: '32px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              },
              '& .MuiSelect-icon': {
                right: '14px',
                top: 'calc(50% - 8px)',
                width: '16px',
                height: '16px',
                pointerEvents: 'none',
                fill: 'var(--main)',
              },
            }}
          >
            <Select
              displayEmpty
              value={formValues.brand}
              onChange={handleChange}
              name="brand"
              id="brand"
              input={<OutlinedInput notched={false} />}
              renderValue={(selected) => selected || 'Choose a brand'}
              IconComponent={SvgArrowIcon}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: '4px',
                    width: '204px',
                    maxHeight: '272px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--white)',
                    padding: '18px 0 18px 14px',
                    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
                    border: '1px solid var(--inputs)',
                    '& ul': {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: 0,
                    },
                    '&::-webkit-scrollbar': {
                      width: '24px',
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'var(--gray-light)',
                      borderRadius: '24px',
                      border: '8px solid transparent',
                      backgroundClip: 'content-box',
                    },
                  },
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                  fontFamily: 'var(--font-family)',
                  backgroundColor: 'transparent',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1.25,
                  color: 'var(--gray)',
                  opacity: '0.5',
                  padding: 0,
                  minHeight: '20px',
                  height: '20px',
                  '&.Mui-selected': {
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'var(--main)',
                    opacity: '1',
                  },
                }}
              >
                Reset selection
              </MenuItem>

              {carBrands.map((brand) => (
                <MenuItem
                  key={brand}
                  value={brand}
                  sx={{
                    fontFamily: 'var(--font-family)',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.25,
                    color: 'var(--gray)',
                    padding: 0,
                    minHeight: '20px',
                    height: '20px',
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      color: 'var(--main)',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'var(--main)',
                    },
                  }}
                >
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Price */}
        <div className={s.formBlockWrap}>
          <label className={s.label} htmlFor="price">
            Price / 1 hour
          </label>
          <FormControl
            fullWidth
            sx={{
              maxWidth: '204px',
              borderRadius: '12px',
              backgroundColor: 'var(--inputs)',
              '& .MuiOutlinedInput-root': {
                height: '44px',
                width: '204px',
                borderRadius: '12px',
                backgroundColor: 'var(--inputs)',
                fontFamily: 'var(--font-family)',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.25,
                color: 'var(--main)',
                boxShadow: 'none',
                padding: 0,
                '& fieldset': {
                  border: 'none',
                },
                '&:hover': {
                  boxShadow: 'inset 0 0 0 1px var(--button-hover)',
                },
                '&.Mui-focused': {
                  boxShadow: 'inset 0 0 0 2px var(--button-hover)',
                },
              },
              '& .MuiSelect-select': {
                paddingLeft: '16px',
                paddingRight: '32px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              },
              '& .MuiSelect-icon': {
                right: '14px',
                top: 'calc(50% - 8px)',
                width: '16px',
                height: '16px',
                pointerEvents: 'none',
                fill: 'var(--main)',
              },
            }}
          >
            <Select
              displayEmpty
              value={formValues.price}
              onChange={handleChange}
              name="price"
              id="price"
              input={<OutlinedInput notched={false} />}
              renderValue={(selected) => (selected ? `To $${selected}` : 'Choose a price')}
              IconComponent={SvgArrowIcon}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: '4px',
                    width: '204px',
                    maxHeight: '272px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--white)',
                    padding: '18px 0 18px 14px',
                    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
                    border: '1px solid var(--inputs)',
                    '& ul': {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: 0,
                    },
                    '&::-webkit-scrollbar': {
                      width: '24px',
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'var(--gray-light)',
                      borderRadius: '24px',
                      border: '8px solid transparent',
                      backgroundClip: 'content-box',
                    },
                  },
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                  fontFamily: 'var(--font-family)',
                  backgroundColor: 'transparent',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1.25,
                  color: 'var(--gray)',
                  opacity: '0.5',
                  padding: 0,
                  minHeight: '20px',
                  height: '20px',
                  '&.Mui-selected': {
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'var(--main)',
                    opacity: '1',
                  },
                }}
              >
                Reset selection
              </MenuItem>

              {priceOptions.map((price) => (
                <MenuItem
                  key={price}
                  value={price}
                  sx={{
                    fontFamily: 'var(--font-family)',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.25,
                    color: 'var(--gray)',
                    padding: 0,
                    minHeight: '20px',
                    height: '20px',
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      color: 'var(--main)',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'var(--main)',
                    },
                  }}
                >
                  {price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={s.formOuterBlockWrap}>
          <div className={s.formBlockWrap}>
            {/* mileageFrom */}
            <label className={s.label} htmlFor="mileageFrom">
              Car mileage / km
            </label>
            <NumericFormat
              className={clsx(s.inputText, s.from)}
              id="mileageFrom"
              name="mileageFrom"
              placeholder="From"
              prefix="From "
              thousandSeparator=","
              autoComplete="off"
              allowNegative={false}
              value={formValues.mileageFrom}
              onValueChange={({ value }) => setFormValues((prev) => ({ ...prev, mileageFrom: value }))}
            />
          </div>

          <div className={s.formBlockWrap}>
            {/* mileageTo */}
            <label htmlFor="mileageTo" className="visually-hidden">
              Car mileage to
            </label>
            <NumericFormat
              className={clsx(s.inputText, s.to)}
              id="mileageTo"
              name="mileageTo"
              placeholder="To"
              prefix="To "
              thousandSeparator=","
              autoComplete="off"
              allowNegative={false}
              value={formValues.mileageTo}
              onValueChange={({ value }) => setFormValues((prev) => ({ ...prev, mileageTo: value }))}
            />
          </div>
        </div>

        <button type="submit" className={clsx(s.button, 'mainBtn')}>
          Search
        </button>
      </form>
    </section>
  );
};

export default CarFilter;
