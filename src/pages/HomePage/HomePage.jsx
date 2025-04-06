import DocumentTitle from '../../components/DocumentTitle';
import s from './HomePage.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <DocumentTitle>RentalCar</DocumentTitle>
      <div className={clsx(s.heroWrap, 'container')}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
        <Link to="/rental-cars" className={clsx(s.link, 'mainLink')}>
          Catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
