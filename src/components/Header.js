import React from "react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  CalendarIcon,
  LogoutIcon,
  MenuIcon,
  SettingIcon,
  ChatIcon,
} from "../svg";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ title, hideRightbar, rightbarIcon }) => {
  const dispatch = useDispatch();
  const { showRightbar, showSidebar } = useSelector((state) => state);

  return (
    <div className="header sticky flex aic">
      <div className="wrap flex aic">
        <div className="left flex aic">
          <Link to="/" className="logo flex aic">
            <img src="/images/logo.svg" className="img" />
          </Link>
          <button
            className="cleanbtn sidebar-menu-ico flex aic"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "SHOW_SIDE_BAR", payload: !showSidebar });
            }}
          >
            <MenuIcon />
          </button>
          <div className="title font s22 b6 c000 upc">{title}</div>
        </div>
        <div className="right flex aic">
          {!hideRightbar && (
            <button
              className="cleanbtn menu-ico flex aic"
              onClick={() => {
                dispatch({ type: "SHOW_RIGHT_BAR", payload: !showRightbar });
              }}
            >
              {rightbarIcon === "setting" ? (
                <div className="setting">
                  <SettingIcon />
                </div>
              ) : rightbarIcon === "support" ? (
                <div className="support">
                  <ChatIcon />
                </div>
              ) : (
                <div className="menu">
                  <MenuIcon />
                </div>
              )}
            </button>
          )}
          <button className="cleanbtn bell-ico">
            <BellIcon />
          </button>
          <div className="calendar flex aic">
            <div className="ico">
              <CalendarIcon />
            </div>
            <div className="stamp flex flex-col aic">
              <div className="date font s11 b6 c000">24/06/1999</div>
              <div className="font s11 b5 c000">06:01:02</div>
            </div>
          </div>
          <div className="log-btn flex aic">
            <div className="ico flex aic">
              <LogoutIcon />
            </div>
            <div className="txt font s18 upc color">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
