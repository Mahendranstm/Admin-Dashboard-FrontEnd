import React from "react";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Muhavur</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <img
              src="https://media.gettyimages.com/id/1314489757/photo/smiling-hispanic-man-against-white-background.jpg?s=612x612&w=gi&k=20&c=mU_OXyCcBWewSUuA-IQE7LYuwo7FtHqX8pVnpNSSXcQ="
              alt="topAvatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
