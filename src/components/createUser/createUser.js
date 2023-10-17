import React, { useState, useEffect } from "react";
import "./createUser.css";
import axios from "../../axios";
import { v4 as uuid } from "uuid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sameFamily, setSameFamily] = useState("");

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    spoucename: "",
    dob: "",
    age: "",
    gender: "",
    email: "",
    contact_no: "",
    qualification: "",
    occupation: "",
    address: "",
    address1: "",
    address2: "",
    district: "",
    taluk: "",
    registered: "",
    pincode: "",
  });
  const [phonenum, setPhonenum] = useState();
  const [id, setId] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setId(uuid());
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    handleOpen();
    try {
      const { data } = await axios.get("/add/data");
      const num = data.filter((item) => {
        return item.contact_no == phonenum;
      });
      if (num) {
        num.map((value, index) => {
          console.log(value);
          setId(value.id);
          setSameFamily(value.firstname);
          return;
        });
      } else {
        setSameFamily("No one in your family");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formdata = new FormData();

  formdata.append("firstname", userInfo.firstname);
  formdata.append("lastname", userInfo.lastname);
  formdata.append("id", id);
  formdata.append("dob", userInfo.dob);
  formdata.append("age", userInfo.age);
  formdata.append("gender", userInfo.gender);
  formdata.append("qualification", userInfo.qualification);
  formdata.append("contact_no", userInfo.contact_no);
  formdata.append("email", userInfo.email);
  formdata.append("address", userInfo.address);
  formdata.append("address1", userInfo.address1);
  formdata.append("address2", userInfo.address2);
  formdata.append("occupation", userInfo.occupation);
  formdata.append("district", userInfo.district);
  formdata.append("taluk", userInfo.taluk);
  formdata.append("pincode", userInfo.pincode);
  formdata.append("img", image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitted = await axios.post("/add/person", formdata);
      if (submitted) {
        setUserInfo({
          firstname: "",
          lastname: "",
          dob: "",
          age: "",
          gender: "",
          email: "",
          contact_no: "",
          qualification: "",
          occupation: "",
          address: "",
          address1: "",
          address2: "",
          district: "",
          taluk: "",
          registered: "",
          pincode: "",
        });
        setImage("");
        setPhonenum("");
        setSameFamily("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let curr_date = new Date();
  curr_date.setDate(curr_date.getDate());
  let date = curr_date.toISOString().substring(0, 10);
  const dob = new Date(userInfo.dob);
  const diff = Date.now() - dob.getTime();
  const age = new Date(diff);
  const exact_age = Math.abs(age.getFullYear() - 1970);
  userInfo.age = exact_age;

  return (
    <div className="createUser">
      <div className="inputGroup">
        <h3 className="userTitle">Personal Details</h3>
        <form className="createUserForm" onSubmit={handleSubmit}>
          <div className="createUserItem">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Mahi"
              value={userInfo.firstname}
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div className="createUserItem">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="S"
              value={userInfo.lastname}
              name="lastname"
              onChange={handleChange}
            />
          </div>
          <div className="createUserItem">
            <label>Age</label>
            <input
              type="number"
              placeholder="Age"
              value={userInfo.age}
              name="age"
              onChange={handleChange}
            />
          </div>
          <div className="createUserItem">
            <label>Data of Birth</label>
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              value={userInfo.dob}
              name="dob"
              defaultValue={date}
              max={date}
              onChange={handleChange}
            />
          </div>
          <div className="createUserItem">
            <label>Gender</label>
            <div className="userGender">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"Male"}
                onChange={handleChange}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value={"Female"}
                onChange={handleChange}
              />
              <label for="male">Female</label>
              <input
                type="radio"
                name="gender"
                id="others"
                value={"others"}
                onChange={handleChange}
              />
              <label for="male">Others</label>
            </div>
          </div>
          <div className="userQualification">
            <h3>Education and Qualification</h3>

            <div className="createUserForm">
              <div className="createUserItem">
                <label>Email ID</label>
                <input
                  type="email"
                  placeholder="sample@gmail.com"
                  value={userInfo.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="createUserItem">
                <label>Mobile Number</label>
                <input
                  type="number"
                  placeholder="e.g. 9894989498"
                  value={userInfo.contact_no}
                  name="contact_no"
                  onChange={handleChange}
                />
              </div>
              <div className="createUserItem">
                <label>Did anyone from your family registered ?</label>
                <select
                  name="registered"
                  id="active"
                  defaultValue="Chose..."
                  value={userInfo.registered}
                  onChange={handleChange}
                >
                  <option value="choose">Choose...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {userInfo.registered === "yes" ? (
                <>
                  <div className="createUserItem">
                    <label>Enter the registered mobile number</label>
                    <input
                      type="number"
                      placeholder="e.g.9898949498"
                      onChange={(e) => {
                        setPhonenum(e.target.value);
                      }}
                    />
                  </div>
                  <div className="createUserItem">
                    <Button onClick={handleClick} variant="contained">
                      Show Family Members
                    </Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Family Members
                          </Typography>
                          <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                          >
                            {<h3>{sameFamily}</h3>}
                          </Typography>
                        </Box>
                      </Fade>
                    </Modal>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="createUserItem">
                <label>Educational Qualification</label>
                <select
                  name="qualification"
                  id="active"
                  defaultValue="Chose..."
                  value={userInfo.qualification}
                  onChange={handleChange}
                >
                  <option>Choose...</option>
                  <option>Secondary</option>
                  <option>Higher Secondary</option>
                  <option>Higher Secondary</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="createUserItem">
                <label>Occupation</label>
                <input
                  type="text"
                  placeholder="e.g. Engineer or Teacher"
                  value={userInfo.occupation}
                  name="occupation"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="userAddress">
            <h3>Address Information</h3>
            <div className="createUserItemAddress">
              <label>Address Line 1</label>
              <input
                type="text"
                placeholder="e.g. 40, South Street, Muhavur"
                value={userInfo.address}
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="createUserItemAddress">
              <label>Address Line 2</label>
              <input
                type="text"
                placeholder="e.g Muhavur"
                value={userInfo.address1}
                name="address1"
                onChange={handleChange}
              />
            </div>
            <div className="createUserItemAddress">
              <label>Address Line 3</label>
              <input
                type="text"
                placeholder="e.g. Near Ambal School"
                value={userInfo.address2}
                name="address2"
                onChange={handleChange}
              />
            </div>
            <div className="createUserForm">
              <div className="createUserItem">
                <label>Taluk</label>
                <input
                  type="text"
                  placeholder="e.g. Rajapalayam"
                  value={userInfo.taluk}
                  name="taluk"
                  onChange={handleChange}
                />
              </div>
              <div className="createUserItem">
                <label>District</label>
                <input
                  type="text"
                  placeholder="e.g. viruthunagar"
                  value={userInfo.district}
                  name="district"
                  onChange={handleChange}
                />
              </div>
              <div className="createUserItem">
                <label>Pincode</label>
                <input
                  type="text"
                  placeholder="e.g. 891 989"
                  value={userInfo.pincode}
                  name="pincode"
                  onChange={handleChange}
                />
              </div>
              <div className="createUserItem">
                <label>Upload Files</label>
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
