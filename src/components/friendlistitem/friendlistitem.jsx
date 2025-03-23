import fliCss from './friendlistitem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={fliCss.friend_card}>
      <img src={avatar} alt="Avatar" width={88} />
      <p>{name}</p>
      {isOnline ? (
        <p className={fliCss.online}>Online</p>
      ) : (
        <p className={fliCss.offline}>Offline</p>
      )}
    </div>
  );
}
