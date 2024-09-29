import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {friends.map(friend => (
          <li className={style.item} key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FriendList;
