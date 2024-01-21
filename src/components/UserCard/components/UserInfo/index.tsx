import React from "react";

//style
import css from "./UserInfo.module.scss";

//components
import InfoItem from "../InfoItem";

import { IGithubUser } from "../../../../types/user";

//icons
import { ReactComponent as CompanyIcon } from "../../../../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../../../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "../../../../assets/icon-website.svg";

type UserInfoprops = Pick<
  IGithubUser,
  "blog" | "company" | "location" | "twitter_username"
>;

const UserInfo: React.FC<UserInfoprops> = ({
  blog,
  company,
  location,
  twitter_username,
}) => {

  const items = [
    { id: 1, icon: <LocationIcon />, text: location },
    { id: 2, icon: <BlogIcon />, text: blog },
    { id: 3, icon: <TwitterIcon />, text: twitter_username },
    { id: 4, icon: <CompanyIcon />, text: company },
  ];

  return (
    <div className={css.userInfo}>
      {items.map((item) => (
        <InfoItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default UserInfo;