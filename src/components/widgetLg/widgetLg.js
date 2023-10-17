import React from "react";
import "./widgetLg.css";
import { Visibility } from "@mui/icons-material";

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3>Education</h3>
      <div className="widgetLgContainer">
        <table className="widgetTable">
          <thead>
            <tr className="widgetTr">
              <th className="widgetTh">Profile</th>
              <th className="widgetTh">Name</th>
              <th className="widgetTh">Education</th>
              <th className="widgetTh">Display</th>
            </tr>
          </thead>
          <tbody>
            <tr className="widgetTr">
              <td className="widgetUser">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="widgetavatar"
                  className="widgetSmImg"
                />
              </td>
              <td className="widgetUserName">Mahi</td>
              <td className="widgetUserJob">Software Engineer</td>
              <td>
                <button className="widgetDispalyButton">
                  <Visibility fontSize="small" />
                  Display
                </button>
              </td>
            </tr>
            <tr className="widgetTr">
              <td className="widgetUser">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="widgetavatar"
                  className="widgetSmImg"
                />
              </td>
              <td className="widgetUserName">Mahi</td>
              <td className="widgetUserJob">Software Engineer</td>
              <td>
                <button className="widgetDispalyButton">
                  <Visibility fontSize="small" />
                  Display
                </button>
              </td>
            </tr>
            <tr className="widgetTr">
              <td className="widgetUser">
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="widgetavatar"
                  className="widgetSmImg"
                />
              </td>
              <td className="widgetUserName">Mahi</td>
              <td className="widgetUserJob">Software Engineer</td>
              <td>
                <button className="widgetDispalyButton">
                  <Visibility fontSize="small" />
                  Display
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WidgetLg;
