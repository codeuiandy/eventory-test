import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/profile.jpg";
import menu from "../assets/images/menu.png";

const Navbar = ({ show, setNav }) => {
  const navigate = useNavigate();
  const { inventory } = useSelector((state) => state.globalData);
  console.log(inventory);
  return (
    <div className={`navbar app-padding `}>
      <div className="navbar-col1">
        <img
          src={menu}
          alt=""
          onClick={() => setNav(!show)}
          className="hideOnDesktop"
        />
        <h2>C-WAY</h2>

        <ul className="hideOMobile">
          <li onClick={() => navigate("/")}>All</li>
          {inventory
            ?.filter((x) => x.name !== "")
            ?.map((data) => (
              <li onClick={() => navigate(`/${data?.id}`)}>{data?.name}</li>
            ))}

          <li onClick={() => navigate("/manage-types")}>Manage Type</li>
        </ul>
      </div>

      <div className="navbar-col2">
        <div>
          <img src={profileImg} alt="" />
        </div>
      </div>

      {show ? (
        <div className={`showNavMobile`}>
          <ul>
            <li onClick={() => navigate("/")}>All</li>
            {inventory
              ?.filter((x) => x.name !== "")
              ?.map((data) => (
                <li onClick={() => navigate(`/${data?.id}`)}>{data?.name}</li>
              ))}

            <li onClick={() => navigate("/manage-types")}>Manage Type</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
