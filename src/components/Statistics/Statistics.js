import shortid from 'shortid';
import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <ul className={css.list}>
      {Object.keys(props).map(item => {
        return (
          <li className={css.item} key={shortid.generate()}>
            {item !== 'positivePercentage' ? (
              <p className={css.btn}>
                {item}: {props[item]}
              </p>
            ) : (
              <p className={css.btn}>Positive feedback: {props[item]}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default Statistics;
