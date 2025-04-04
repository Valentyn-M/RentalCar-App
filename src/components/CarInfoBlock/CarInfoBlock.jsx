import clsx from 'clsx';
import s from './CarInfoBlock.module.css';

const CarInfoBlock = ({ carDetails, shortId }) => {
  const { brand, model, year, address, rentalPrice, description } = carDetails;

  const addressParts = address.split(', ');
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];

  const svgIcon = '/sprite.svg';

  return (
    <section className={s.carInfoBlock}>
      <div className={s.titleWrap}>
        <h2 className={s.title}>
          {brand} {model}, {year}
        </h2>
        <p className={s.id}>Id: {shortId}</p>
      </div>
      <div className={s.details}>
        <p className={s.location}>
          <svg className={s.icon}>
            <use href={`${svgIcon}#icon-location`} />
          </svg>
          <span>
            {city}, {country}
          </span>
        </p>
      </div>
      <p className={clsx(s.price, 'primary-color')}>${rentalPrice}</p>
      <p className={s.description}>{description}</p>
    </section>
  );
};

export default CarInfoBlock;
