import Icon from '../icon/Icon';
import css from './SingleCard.module.css';

function SingleCard(props) {
  return (
    <li className={css.grid}>
      <Icon className={css.icon}>{props.icon}</Icon>
      <h3 className={css.title}>{props.title}</h3>
      <p className={css.text}>{props.text}</p>
    </li>
  );
}
export default SingleCard;
