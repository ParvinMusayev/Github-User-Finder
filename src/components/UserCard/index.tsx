import React from "react";

//style
import css from "./UserCard.module.scss";

//components
import { UserInfo, UserStat, UserTitle } from "./components";

import { IGithubUser } from "../../types/user";

const UserCard: React.FC<IGithubUser> = (props) => {
  const {
    login,
    avatar_url,
    created_at,
    bio,
    name,
    followers,
    following,
    public_repos,
    blog,
    company,
    location,
    twitter_username,
  } = props;

  return (
    <div className={css.userCard}>
      <img src={avatar_url} alt={login} className={css.avatar} />
      <UserTitle created_at={created_at} login={login} name={name} />
      <p className={css.userBio}>{bio || "This profile has no bio"}</p>
      <UserStat />
      <UserInfo />
    </div>
  );
};

export default UserCard;
