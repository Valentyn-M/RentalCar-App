import { NavLink } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <DocumentTitle>RentalCar</DocumentTitle>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <NavLink to="/rental-cars">View Catalog</NavLink>
    </div>
  );
};

export default HomePage;
