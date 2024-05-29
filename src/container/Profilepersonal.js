import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import React, { useEffect, useState } from "react";

const Profilepersonal = () => {
  const [activeSection, setActiveSection] = useState("PersonalInformation");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="CMAMachines_box">
      <TopHeader />
      <Secondheader />
      <div className="Profilepersonal_box">
        <div className="Profilepersonal_Tab">
          <h1>
            <b>Profile</b> Settings
          </h1>
          <div className="Buttons">
            <a
              href="#"
              className={
                activeSection === "PersonalInformation" ? "ActiveBoxx" : ""
              }
              onClick={() => handleButtonClick("PersonalInformation")}
            >
              <img
                src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Profile.png"
                className="Profile_img"
              />
              Personal
            </a>
            <a
              href="#"
              className={
                activeSection === "UserPreferences" ? "ActiveBoxx" : ""
              }
              onClick={() => handleButtonClick("UserPreferences")}
            >
              <img
                src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Asses.png"
                className="Profile_img"
              />
              User preferences
            </a>

            {/* <a href="#">
              <img
                src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Setting.png"
                className="Profile_img"
              />
              Managing Access
            </a> */}
          </div>
        </div>
        <div className="Profilepersonal_Boxes">
          <div
            className={`Information ${
              activeSection === "PersonalInformation" ? "" : "d-none"
            }`}
          >
            <div className="PersonalInformation_In">
              <h1>Personal Information</h1>
              <p>This includes your name, email address, password</p>
              <form action="#" className="Personal_details">
                <div className="Selection_bar">
                  <div className="Selection_">
                    <label for="fname">Your name</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div className="Selection_">
                    <label for="Email">Your email address</label>
                    <input type="text" id="Email" name="Email" />
                  </div>
                  <div className="Selection_">
                    <label for="number">Your Phone no.</label>
                    <input type="Number" id="number" name="number" />
                  </div>
                  <div className="Selection_">
                    <label for="Email">Your email address</label>
                    <input type="text" id="Email" name="Email" />
                  </div>
                  <div className="Selection_">
                    <span>CHANGE PASSWORD</span>

                    <label for="Password">Old Password</label>
                    <input type="text" id="Password" name="password" />
                  </div>
                  <div className="Selection_">
                    <br></br> <br></br>
                    <label for="Password">New Password</label>
                    <input type="text" id="Password" name="password" />
                  </div>
                </div>
              </form>
            </div>
            <div className="LAst_btn">
              <button>Cancel</button>
              <input type="submit" value="Submit"></input>
            </div>
          </div>
          <div
            className={`Information ${
              activeSection === "UserPreferences" ? "" : "d-none"
            }`}
          >
            <div className="PersonalInformation_In UserPreferences">
              <h1>User Preferences</h1>
              <p>This includes your name, email address, password</p>
              <form action="#" className="Personal_details">
                <div className="Selection_">
                  <label for="fname">Preferred Language</label>
                  <select name="cars" id="cars">
                    <option value="volvo">English (United States)</option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
                <div className="Selection_">
                  <label for="Email">Preferred Time Format</label>
                  <select name="cars" id="cars">
                    <option value="volvo">12 Hours</option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
                <div className="Selection_">
                  <label for="number">Preferred Time Zone</label>
                  <select name="cars" id="cars">
                    <option value="volvo">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
                <div className="Selection_">
                  <label for="Email">Preferred Country</label>
                  <select name="cars" id="cars">
                    <option value="volvo">United States</option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
                <span>PREFERRED NUMBER FORMAT</span>
                <div className="Selection_">
                  <label for="Password">Preferred Grouping</label>
                  <select name="cars" id="cars">
                    <option value="volvo">English (United States)</option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
                <div className="Selection_">
                  <label for="Password">Preferred Decimal</label>
                  <select name="cars" id="cars">
                    <option value="volvo">Comma</option>
                    <option value="saab">12 Hours</option>
                    <option value="mercedes">
                      (GMT- 5:0) Eastern Standard Time(America/Troll)
                    </option>
                    <option value="audi">United States</option>
                    <option value="audi">Comma</option>
                    <option value="audi">Comma</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="LAst_btn">
              <button>Cancel</button>
              <input type="submit" value="Submit"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepersonal;
