import css from './Section.module.css';

function Section(props) {
  return <section className={css.section}>{props.children}</section>;
}
export default Section;
