import s from './CarFeatures.module.scss';

const CarDetailsSections = ({ carDetails }) => {
  const { rentalConditions, year, type, fuelConsumption, engineSize, accessories, functionalities } = carDetails;
  const features = [...accessories, ...functionalities];

  const svgIcon = '/sprite.svg';

  return (
    <section className={s.carDetailsSections}>
      <h2 className="visually-hidden">More information about a rental car</h2>
      <div className={s.block}>
        <h3 className={s.title}>Rental Conditions:</h3>
        <ul className={s.list}>
          {rentalConditions.map((item) => (
            <li className={s.item} key={item}>
              <svg className={s.icon}>
                <use href={`${svgIcon}#icon-check-circle`} />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.block}>
        <h3 className={s.title}>Car Specifications:</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <svg className={s.icon}>
              <use href={`${svgIcon}#icon-calendar`} />
            </svg>
            <span>Year: {year}</span>
          </li>
          <li className={s.item}>
            <svg className={s.icon}>
              <use href={`${svgIcon}#icon-car`} />
            </svg>
            <span>Type: {type}</span>
          </li>
          <li className={s.item}>
            <svg className={s.icon}>
              <use href={`${svgIcon}#icon-fuel-pump`} />
            </svg>
            <span>Fuel Consumption: {fuelConsumption}</span>
          </li>
          <li className={s.item}>
            <svg className={s.icon}>
              <use href={`${svgIcon}#icon-gear`} />
            </svg>
            <span>Engine Size:: {engineSize}</span>
          </li>
        </ul>
      </div>

      <div className={s.block}>
        <h3 className={s.title}>Accessories and functionalities:</h3>
        <ul className={s.list}>
          {features.map((item) => (
            <li className={s.item} key={item}>
              <svg className={s.icon}>
                <use href={`${svgIcon}#icon-check-circle`} />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CarDetailsSections;
