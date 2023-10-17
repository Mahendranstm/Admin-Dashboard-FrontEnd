import React, { useEffect, useState } from "react";
import "./viewUser.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "../../axios";
import { Visibility } from "@mui/icons-material";
import {
  PersonOutlined,
  DateRangeOutlined,
  PhoneAndroidOutlined,
  EmailOutlined,
  LocationSearchingOutlined,
  PermContactCalendarOutlined,
  SchoolOutlined,
  WorkOutline,
} from "@mui/icons-material";

const ViewUser = () => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(null);

  console.log(details);

  const showDetails = (id) => {
    const filterdata = data.filter((item, index) => index == id);
    setDetails(filterdata);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/add/data");
      const rowData = data.map(
        ({
          id,
          createdAt,
          updatedAt,
          __v,

          ...info
        }) => {
          return info;
        }
      );
      setData(rowData);
    };
    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 110 },
    { field: "lastname", headerName: "Last name", width: 110 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
    },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <button
            className="widgetDispalyButton"
            onClick={() => showDetails(params.row.id)}
          >
            <Visibility fontSize="small" />
            Display
          </button>
        );
      },
    },
  ];

  const rows = data.map((value, index) => {
    return {
      id: index,
      firstname: value.firstname,
      lastname: value.lastname,
      age: value.age,
      email: value.email,
    };
  });
  return (
    <div className="viewUser">
      {details ? (
        <>
          {details.map((item, index) => {
            return (
              <div className="displayUser">
                <div className="userCard">
                  <div className="userProfile">
                    <img src="" alt="user" />
                    <div className="">
                      <h3>
                        {item.firstname} {item.lastname}
                      </h3>
                      <p className="userJob">{item.occupation}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="userDetails">User Details</h5>
                    <div className="userAgeandDate">
                      <div className="userAgeandBirth">
                        <PermContactCalendarOutlined fontSize="small" />
                        {item.age}
                      </div>
                      <div className="userAgeandBirth">
                        <DateRangeOutlined fontSize="small" />
                        {item.dob}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="userDetails">User Details</h5>
                    <div className="userAgeandDate">
                      <div className="userAgeandBirth">
                        <PhoneAndroidOutlined fontSize="small" />
                        {item.contact_no}
                      </div>
                      <div className="userAgeandBirth">
                        <EmailOutlined fontSize="small" />
                        {item.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="userCard2">
                  <div className="userEducationandAddress">
                    <div className="education">
                      <div className="educationDetails">
                        <h4>Education</h4>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">Qualification:</span>{" "}
                            {item.qualification}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">Occupation</span>{" "}
                            {item.occupation}
                          </p>
                        </div>
                      </div>
                      <div className="educationDetails">
                        <h4>Address</h4>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">
                              Address Line 1:
                            </span>{" "}
                            {item.address}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">
                              Address Line 2:
                            </span>{" "}
                            {item.address1}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">
                              Address Line 3:
                            </span>{" "}
                            {item.address2 ? item.address2 : "None"}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">Taluk: </span>{" "}
                            {item.taluk}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">District:</span>{" "}
                            {item.district}
                          </p>
                        </div>
                        <div className="educationAndJob">
                          <p>
                            <span className="userDetails2">Pincode:</span>{" "}
                            {item.pincode}
                          </p>
                        </div>
                      </div>
                    </div>

                    <img src={`http://localhost:4000/${item.img}`} alt="user" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div style={{ height: 450, width: "90%" }} className="viewTable">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ViewUser;
