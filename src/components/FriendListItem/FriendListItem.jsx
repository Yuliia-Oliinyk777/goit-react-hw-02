import style from './FriendListItem.module.css';
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.card}>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
      <p className={isOnline ? style.online : style.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
export default FriendListItem;
