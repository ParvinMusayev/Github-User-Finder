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
      <img src="" alt="" className={css.avatar} />
      <UserTitle />
      <p className={css.userBio}>Profile Bio</p>
      <UserStat />
      <UserInfo />
    </div>
  );
};

export default UserCard;
