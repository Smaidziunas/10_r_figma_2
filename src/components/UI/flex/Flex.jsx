import css from './Flex.module.css';

function Flex(props) {
  return <div className={css.flex}>{props.children}</div>;
}
export default Flex;
