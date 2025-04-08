import s from './CarItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addOrRemoveFavorite } from '../../store/favorites/slice';
import { selectFavorites } from '../../store/favorites/selectors';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const CarItem = ({ carData }) => {
  const { img, description, brand, model, year, rentalPrice, address, rentalCompany, type, mileage, id } = carData;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isfavorite = favorites.includes(id);

  const addressParts = address.split(', '); // make array
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  const mileageFormatted = mileage.toLocaleString('fr-FR');

  const svgIcon = '/sprite.svg';

  const handleClick = () => {
    dispatch(addOrRemoveFavorite(id));
  };

  return (
    <li className={s.carItem}>
      <div className={s.imageWrap}>
        <button className={s.btnFavorite} type="button">
          <svg className={clsx(s.icon, isfavorite && s.active)} onClick={handleClick}>
            {isfavorite ? (
              <use href={`${svgIcon}#icon-heart-active`} />
            ) : (
              <use href={`${svgIcon}#icon-heart-default`} />
            )}
          </svg>
        </button>
        <img className={s.image} src={img} alt={description} width="335" height="268" />
      </div>
      <div className={s.titleWrap}>
        <p className={s.mainDetailsWrap}>
          <span className={s.brand}>{brand} </span>
          <span className={clsx(s.model, 'primary-color')}>{model}, </span>
          <span className={s.year}>{year}</span>
        </p>
        <p className={s.price}>${rentalPrice}</p>
      </div>
      <div className={s.detailsWrap}>
        <p className={s.detailItem}>{city}</p>
        <p className={s.detailItem}>{country}</p>
        <p className={s.detailItem}>{rentalCompany}</p>
      </div>
      <div className={s.detailsWrapLast}>
        <div className={s.detailsWrap}>
          <p className={s.detailItem}>{type}</p>
          <p className={s.detailItem}>{mileageFormatted} km</p>
        </div>
      </div>
      <Link to={`/cars/${id}`} className={clsx(s.link, 'mainLink')}>
        Read more
      </Link>
    </li>
  );
};

export default CarItem;
