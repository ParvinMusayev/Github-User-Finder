import React from "react";

//style
import css from "./UserStat.module.scss";

import { IGithubUser } from "../../../../types/user";

type UserStatProps = Pick<IGithubUser,"public_repos" | "followers" | "following">;

const UserStat: React.FC<UserStatProps> = ({
  public_repos,
  followers,
  following,
}) => {
  return (
    <div className={css.userStat}>
      <div className={css.info}>
        <div className={css.infoTitle}>Repos</div>
        <div className={css.infoNumber}>{public_repos}</div>
      </div>
      <div className={css.info}>
        <div className={css.infoTitle}>Following</div>
        <div className={css.infoNumber}>{following}</div>
      </div>
      <div className={css.info}>
        <div className={css.infoTitle}>Followers</div>
        <div className={css.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;