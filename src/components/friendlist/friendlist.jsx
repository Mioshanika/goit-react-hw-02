import FriendListItem from '../friendlistitem/friendlistitem';
import flCss from './friendlist.module.css';

export default function FriendList({ friends }) {
  const listItems = friends.map(friend => (
    <li key={friend.id}>
      <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
    </li>
  ));
  return <ul className={flCss.friend_list}>{listItems}</ul>;
}
