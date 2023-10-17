import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Details from "../../components/Details/Details";
import TopBar from "../../components/topBar/topBar";

const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="Container">
        <Sidebar />
        <Details />
      </div>
    </div>
  );
};

export default Dashboard;
