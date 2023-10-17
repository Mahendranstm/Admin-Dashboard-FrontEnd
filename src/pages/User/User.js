import React from "react";
import TopBar from "../../components/topBar/topBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ViewUser from "../../components/viewUser/viewUser";

const User = () => {
  return (
    <div>
      <TopBar />
      <div className="Container">
        <Sidebar />
        <ViewUser />
      </div>
    </div>
  );
};

export default User;
