import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./styles/Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  React.useEffect(() => {
    const element = document.querySelector(".logo_container");
    element.addEventListener("click", () => {
      window.location.href = "https://github.com/ahmedheakl";
    });
  }, []);

  return (
    <div className="header">
      <div className="headerLeft">
        <div className="appLogo">
          <p>Sa</p>
        </div>
        <div className="headerLeft__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="headerRight">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="Notification" Icon={NotificationsActiveIcon} />
        <HeaderOption title="Me" avatar={true} onclick={logoutOfApp} />
        <div className="logo_container">
          <div className="logo">
            <p>HEAKL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
