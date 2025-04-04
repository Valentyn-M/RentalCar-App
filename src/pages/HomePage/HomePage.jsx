import DocumentTitle from '../../components/DocumentTitle';
import s from './HomePage.module.css';
import BtnAsLink from '../../components/BtnAsLink/BtnAsLink';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <DocumentTitle>RentalCar</DocumentTitle>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <BtnAsLink adress={'/rental-cars'}>View Catalog</BtnAsLink>
    </div>
  );
};

export default HomePage;
