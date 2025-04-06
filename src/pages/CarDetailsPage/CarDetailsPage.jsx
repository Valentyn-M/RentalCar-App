import s from './CarDetailsPage.module.scss';
import DocumentTitle from '../../components/DocumentTitle';
import BookingForm from '../../components/BookingForm/BookingForm';
import CarInfoBlock from '../../components/CarInfoBlock/CarInfoBlock';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarDetails, selectloading } from '../../store/carDetails/selectors';
import { useEffect } from 'react';
import { fetchCarDetails } from '../../store/carDetails/operations';
import { useParams } from 'react-router-dom';
import CarDetailsSections from '../../components/CarFeatures/CarFeatures';
import clsx from 'clsx';
import LoaderWheel from '../../components/LoaderWheel/LoaderWheel';

const CarDetailsPage = () => {
  const { carId } = useParams();

  const carDetails = useSelector(selectCarDetails);
  const isLoading = useSelector(selectloading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (carId) dispatch(fetchCarDetails(carId));
  }, [dispatch, carId]);

  return (
    <div className={clsx(s.carDetailsPage, 'container')}>
      <DocumentTitle>RentalCar | Car Details</DocumentTitle>
      {isLoading || !carDetails ? (
        <div className={s.loaderWrap}>
          <LoaderWheel />
        </div>
      ) : (
        <>
          {(() => {
            const { img, description } = carDetails;
            const imageId = img.match(/\/(\d+)-/)[1];

            return (
              <>
                <div className={clsx(s.block, s.left)}>
                  <div className={s.imageWrap}>
                    <img className={s.image} src={img} alt={description} width="740" height="592" />
                  </div>
                  <BookingForm />
                </div>
                <div className={clsx(s.block, s.right)}>
                  <CarInfoBlock carDetails={carDetails} shortId={imageId} />
                  <CarDetailsSections carDetails={carDetails} />
                </div>
              </>
            );
          })()}
        </>
      )}
    </div>
  );
};

export default CarDetailsPage;
