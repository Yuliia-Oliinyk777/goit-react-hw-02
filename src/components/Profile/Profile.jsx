import style from './Profile.module.css';
function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.wrapper}>
      <div className={style.fotowrap}>
        <img className={style.foto} src={image} alt={name} />
        <p className={style.title}>{name}</p>
        <p className={style.text}>{tag}</p>
        <p className={style.text}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span>Followers</span>
          <span className={style.number}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span>Views</span> <span className={style.number}>{stats.views}</span>
        </li>

        <li className={style.item}>
          <span>Likes</span>
          <span className={style.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
