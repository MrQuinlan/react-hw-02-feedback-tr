import css from './FeedbackOptions.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(item => {
        return (
          <li className={css.item} key={shortid.generate()}>
            <button className={css.btn} type="button" onClick={onLeaveFeedback}>
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
