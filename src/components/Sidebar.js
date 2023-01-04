import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  RoundIcon,
  UserIcon,
  ChartIcon,
  ShopIcon,
  SupportIcon,
  AccountIcon,
  ProtectionIcon,
} from "../svg";

const Siderbar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state);

  const nav = [
    { label: "Dashboard", slug: "/", icon: <RoundIcon /> },
    { label: "Users", slug: "/users", icon: <UserIcon /> },
    { label: "Statistics", slug: "/statistics", icon: <ChartIcon /> },
    { label: "Store", slug: "/support", icon: <ShopIcon /> },
    { label: "Support", slug: "/support-managment", icon: <SupportIcon /> },
    { label: "Support", slug: "/companies", icon: <ProtectionIcon /> },
    { label: "Download", slug: "/download", icon: <AccountIcon /> },
  ];

  useEffect(() => {
    document.body.addEventListener("click", () =>
      dispatch({ type: "SHOW_SIDE_BAR", payload: false })
    );
  }, []);

  return (
    <>
      <div
        className={`sidebar-overlay abs anim ${showSidebar ? "sho" : "hid"}`}
      />
      <div
        className={`sidebar flex flex-col aic fixed anim ${
          showSidebar ? "sho" : "hid"
        }`}
      >
        <div className="meta flex">
          <Link to="/" className="logo flex aic">
            <img src="/images/logo.svg" className="img" />
          </Link>
        </div>
        <div className="links flex flex-col aic">
          {nav.map((item) => (
            <NavLink exact to={item.slug} className="item flex aic rel">
              <div className="ico flex aic">{item.icon}</div>
              <div className="lbl tip font s14 cfff abs anim">{item.label}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Siderbar;
