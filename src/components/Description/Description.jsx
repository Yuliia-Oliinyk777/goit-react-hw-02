import style from './Description.module.css';
const Description = () => {
  return (
    <div className={style.description}>
      <h2 className={style.title}>Sip Happens Café</h2>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
