import profileCss from './profile.module.css';

export default function Profile(props) {
  const {
    name = 'Incognito',
    tag = 'inco',
    location = 'Someplace',
    image = '/public/react.svg',
    stats: { followers = 0, views = 0, likes = 0 },
  } = props;
  return (
    <div className={profileCss.user_card}>
      <div>
        <img src={image} alt="User avatar" width={280} />
        <p className={profileCss.user_name}>{name}</p>
        <p>&#64;{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li key={1}>
          <span>Followers</span>
          <span className={profileCss.numbrs}>{followers}</span>
        </li>
        <li key={2}>
          <span>Views</span>
          <span className={profileCss.numbrs}>{views}</span>
        </li>
        <li key={3}>
          <span>Likes</span>
          <span className={profileCss.numbrs}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
