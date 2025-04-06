import s from './NotFoundPage.module.scss';

import LoaderWheel from '../../components/LoaderWheel/LoaderWheel';
import clsx from 'clsx';

const NotFoundPage = () => {
  return (
    <div className={clsx(s.notFoundPage, 'container')}>
      <h2 className={s.title}>Ooops... Page is not found!</h2>
      <LoaderWheel color="red" speed={2} size={72} />
    </div>
  );
};

export default NotFoundPage;
