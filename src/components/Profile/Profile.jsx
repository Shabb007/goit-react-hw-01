import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.avatarCard}>
        <img className={css.avatarImg} src={image} alt="User Avatar" />
        <p className={css.avatarName}> {name}</p>
        <p className={css.avatarDescription}>@{tag}</p>
        <p className={css.avatarDescription}>{location}</p>
      </div>

      <ul className={css.statisticList}>
        <li className={css.statisticListItem}>
          <span className={css.statisticName}>Followers</span>
          <span className={css.statisticNumber}>{stats.followers}</span>
        </li>
        <li className={css.statisticListItem}>
          <span className={css.statisticName}>Views</span>
          <span className={css.statisticNumber}>{stats.views}</span>
        </li>
        <li className={css.statisticListItem}>
          <span className={css.statisticName}>Likes</span>
          <span className={css.statisticNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
