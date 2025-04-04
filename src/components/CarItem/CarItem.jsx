import s from './CarItem.module.css';
import BtnAsLink from '../BtnAsLink/BtnAsLink';
import { useDispatch, useSelector } from 'react-redux';
import { addOrRemoveFavorite } from '../../store/favorites/slice';
import { selectFavorites } from '../../store/favorites/selectors';
import clsx from 'clsx';

const CarItem = ({ carData }) => {
  const { img, description, brand, model, year, rentalPrice, address, rentalCompany, type, mileage, id } = carData;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isfavorite = favorites.includes(id);

  const addressParts = address.split(', '); // make array
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  const svgIcon = '/sprite.svg';

  const handleClick = () => {
    dispatch(addOrRemoveFavorite(id));
  };

  // TODO loader

  return (
    <li className={s.carItem}>
      <svg className={s.icon} onClick={handleClick}>
        {isfavorite ? <use href={`${svgIcon}#icon-heart-active`} /> : <use href={`${svgIcon}#icon-heart-default`} />}
      </svg>
      <div className={s.imageWrap}>
        <img className={s.image} src={img} alt={description} width="335" height="268" />
      </div>
      <div className={s.titleWrap}>
        <p className={s.mainDetailsWrap}>
          <span className={s.brand}>{brand} </span>
          <span className={clsx(s.model, 'primary-color')}>{model}, </span>
          <span className={s.year}>{year}</span>
        </p>
        <p className={s.price}>{rentalPrice}</p>
      </div>
      <div className={s.detailsWrap}>
        <p className={s.city}>{city}</p>
        <p className={s.country}>{country}</p>
        <p className={s.company}>{rentalCompany}</p>
      </div>
      <div className={s.detailsWrap}>
        <p className={s.type}>{type}</p>
        <p className={s.mileage}>{mileage} km</p>
      </div>
      <BtnAsLink adress={`/cars/${id}`}>Read more</BtnAsLink>
    </li>
  );
};

export default CarItem;
