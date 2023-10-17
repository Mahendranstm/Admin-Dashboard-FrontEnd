import React from "react";
import "./Sidebar.css";
import {
  GridView,
  Group,
  PersonAdd,
  Email,
  CurrencyRupee,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard </h3>
          <ul className="sideBarList">
            <Link to="/dashboard" className="link">
              <li className="sidebarListItem active">
                <GridView />
                Dashboard
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Group />
                Users
              </li>
            </Link>
            <Link to="/create" className="link">
              <li className="sidebarListItem">
                <PersonAdd />
                Create
              </li>
            </Link>
            <li className="sidebarListItem">
              <Email />
              Email
            </li>

            <li className="sidebarListItem">
              <CurrencyRupee />
              Transaction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
