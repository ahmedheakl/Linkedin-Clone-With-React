import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles/HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ onclick, avatar, title, Icon }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onclick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <div className="headerOption__title">{title}</div>
    </div>
  );
}

export default HeaderOption;
