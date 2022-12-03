import css from './Button.module.css';

function Button(props) {
  return (
    <button
      className={`${css.btn} ${props.bcgSecondary ? css.bcgSecondary : ''} ${
        props.colorSecondary ? css.colorSecondary : ''
      }`}
    >
      {props.children}
    </button>
  );
}
export default Button;
