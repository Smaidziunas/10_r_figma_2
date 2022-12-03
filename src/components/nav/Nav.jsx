import { Link } from 'react-router-dom';
import Button from '../UI/btn/Button';
import css from './Nav.module.css';

function Nav(props) {
  return (
    <header className={`${css.flex} ${css.flexRow} ${css.spaceBetween}`}>
      <img className={css.img} src='/img/Logo.png' alt='logo' />
      <nav className={`${css.flex} ${css.flexRow} ${css.nav}`}>
        {/* <Link to='/'>Product</Link> */}
        <p>Product</p>
        <Link to='/features'>Features</Link>
        {/* <Link to='/'>Pricing</Link> */}
        <p>Pricing</p>
        <Link to='/cta'>Recources</Link>
      </nav>
      <div>
        <Button login>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
export default Nav;
