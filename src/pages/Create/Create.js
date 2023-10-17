import React from "react";
import "./Create.css";
import TopBar from "../../components/topBar/topBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateUser from "../../components/createUser/createUser";

const Create = () => {
  return (
    <div className="create">
      <div>
        <TopBar />
        <div className="Container">
          <Sidebar />
          <CreateUser />
        </div>
      </div>
    </div>
  );
};

export default Create;
