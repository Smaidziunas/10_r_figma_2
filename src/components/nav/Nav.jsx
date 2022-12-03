import Button from '../UI/btn/Button';
import css from './Nav.module.css';

function Nav(props) {
  return (
    <header className={`${css.flex} ${css.flexRow} ${css.spaceBetween}`}>
      <img src='/img/Logo.png' alt='logo' />
      <nav className={`${css.flex} ${css.flexRow}`}>
        <p>Product</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Recources</p>
      </nav>
      <div>
        <Button>Login</Button>
        <Button>SignUp</Button>
      </div>
    </header>
  );
}
export default Nav;
