import css from './SectionTitle.module.css';

function SectionTitle(props) {
  return (
    <div className={`${css.wrap} ${props.mb0 ? css.mb0 : ''}`}>
      <p className={`${css.pill} ${props.left ? css.pillLeftSd : ''}`}>
        {props.pill}
      </p>
      <h2 className={css.title}>{props.title}</h2>
      <h3 className={css.subtitle}>{props.subtitle}</h3>
    </div>
  );
}
export default SectionTitle;
