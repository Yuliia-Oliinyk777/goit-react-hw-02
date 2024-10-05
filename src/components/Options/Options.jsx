import style from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={style.panel}>
      <button
        onClick={() => updateFeedback('good')}
        className={style.btn}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={style.btn}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={style.btn}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={style.btn} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
