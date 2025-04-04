import s from './CarDetailsPage.module.css';
import DocumentTitle from '../../components/DocumentTitle';
import BookingForm from '../../components/BookingForm/BookingForm';
import CarInfoBlock from '../../components/CarInfoBlock/CarInfoBlock';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarDetails } from '../../store/carDetails/selectors';
import { useEffect } from 'react';
import { fetchCarDetails } from '../../store/carDetails/operations';
import { useParams } from 'react-router-dom';
import CarDetailsSections from '../../components/CarFeatures/CarFeatures';

const CarDetailsPage = () => {
  const { carId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (carId) dispatch(fetchCarDetails(carId));
  }, [dispatch, carId]);

  const carDetails = useSelector(selectCarDetails);

  if (!carDetails) {
    return <p>Loading...</p>; // TODO loader
  }

  const { img, description } = carDetails;
  const imageId = img.match(/\/(\d+)-/)[1];

  return (
    <div>
      <DocumentTitle>RentalCar | Car Details</DocumentTitle>
      <img className={s.image} src={img} alt={description} width="640" height="512" />
      <BookingForm />
      <CarInfoBlock carDetails={carDetails} shortId={imageId} />
      <CarDetailsSections carDetails={carDetails} />
    </div>
  );
};

export default CarDetailsPage;
