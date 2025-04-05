import DocumentTitle from '../../components/DocumentTitle';
import s from './HomePage.module.scss';
import BtnAsLink from '../../components/BtnAsLink/BtnAsLink';
import clsx from 'clsx';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <DocumentTitle>RentalCar</DocumentTitle>
      <div className={clsx(s.heroWrap, 'container')}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
        <BtnAsLink adress={'/rental-cars'}>View Catalog</BtnAsLink>
      </div>
    </section>
  );
};

export default HomePage;
