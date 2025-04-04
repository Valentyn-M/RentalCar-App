import { Link } from 'react-router-dom';
import s from './BtnAsLink.module.css';

const BtnAsLink = ({ adress, children, ...rest }) => {
  return (
    <Link to={adress} className={s.link} {...rest}>
      {children}
    </Link>
  );
};

export default BtnAsLink;
