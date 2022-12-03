import css from './Grid.module.css';

function Grid(props) {
  /* adding cols prop isplesta
  // console.log('props ===', props);

  // let divStyles = {
  //   gridTemplateColumns: `repeat(${props.cols}, 1fr)`, 1fr
  // };

  // jei negaunam props.cols, divStyles turetu buti tuscias objekas
  
    if (!props.cols) {
    divStyles = {};
  }

  if (props.cols) {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`;
  } else {
    ('');
  }  
  */

  /* adding cols prop toInline CSS
  style={{ gridTemplateColumns: `repeat(${props.cols || ''}, 1fr)` }}
  */

  /* adding cols prop as class option to choose from: */
  const gridColSize = props.cols;
  const col2 = gridColSize === '2' ? css.gridColumns2 : '';
  const col3 = gridColSize === '3' ? css.gridColumns3 : '';
  const col4 = gridColSize === '4' ? css.gridColumns4 : '';
  const col5 = gridColSize === '5' ? css.gridColumns5 : '';
  const col6 = gridColSize === '6' ? css.gridColumns6 : '';

  return (
    <ul
      className={`${css.grid} ${col2} ${col3} ${col4} ${col5} ${col6} ${
        props.gap98 ? css.gap98 : ''
      }`}
    >
      {props.children}
    </ul>
  );
}
export default Grid;
