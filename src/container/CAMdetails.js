import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import React, { useEffect, useState } from "react";
import SkyBlueBox from "../component/SkyBlueBox";
import ServiceRequestItem from "../component/ServiceRequestItem";

const CAMdetails = () => {
  const [activeSection, setActiveSection] = useState("ServiceTickets");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  const skyBlueBoxData = [
    {
      imageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Men.png",
      name: "Jamal Palmer",
      email: "Jamalpalmer@gmail.com",
      phone: "+5236 3418 1452",
    },
  ];
  const serviceRequestsData = [
    {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      type: "Part(s) Exchange",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    },
    {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      type: "Part(s) Exchange",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    },
    {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      type: "Part(s) Exchange",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    },
    {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      type: "Part(s) Exchange",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    },
    {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      type: "Part(s) Exchange",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    },
  ];
  const Data = [
    {
      Manufacture: "Verigy",
      Model: "930000",
      MachineCategory: "XYZ",
    },
  ];

  return (
    <div className="CAMdetails_box">
      <TopHeader />
      <Secondheader />
      <div className="Cma_box">
        <div className="Top_for">
          <div className="Top_for-text">
            <p>93K_0</p>
            <span>|</span>
            <p>DE39700104</p>
          </div>
          <a href="#" className="Back">
            Back
          </a>
        </div>
        <div className="Three_buttons">
          <div className="Boxes_pro Boxes_pro_active">
            <h4>CMA Start Date</h4>
            <p>
              <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/time.png" />
              01/02/2023
            </p>
          </div>
          <div className="Boxes_pro">
            <h4 className="Blue_text">CMA End Date</h4>
            <p className="Red_text">
              <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/timedanger.png" />
              01/02/2023
            </p>
          </div>
          <div className="Boxes_pro Calibration_Date">
            <h4 className="Blue_text">Calibration Date</h4>
            <p className="Blue_text">
              <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/time.png" />
              01/02/2023
            </p>
          </div>
        </div>
        <div className="CMABalance_chart">
          <h4>CMA Balance</h4>
          <div className="Group_">
            <div className="group_t">
              <h5>Pasts Cap Remaining</h5>
              <p>-2</p>
            </div>
            <div className="group_t">
              <h5>Support Hours Remaining</h5>
              <p>12.5</p>
            </div>
            <div className="group_t">
              <h5>Calibration Remaining</h5>
              <p>0</p>
            </div>
            <div className="group_t">
              <h5>On site service Visit Remaining</h5>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="Two_boxes">
          <div className="First_BOX">
            <div class="Image-Box Display_flex">
              <img
                src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/demo.png"
                class="Product_img"
                alt="Machine"
              />
              <div className="Inside-Display_flex">
                <div class="Top_numbers">
                  <p>93K_0</p>
                  <span>|</span>
                  <p>DE39700104</p>
                </div>
                <img
                  src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png"
                  class="Inprogress"
                  alt="In Progress"
                />
              </div>
            </div>
            <div className="Data_p">
              {Data.map((item, index) => (
                <div className="First_OP" key={index}>
                  <div className="First_">
                    <p>Manufacture</p>
                    <span>
                      <b>{item.Manufacture}</b>
                    </span>
                  </div>
                  <div className="First_">
                    <p>Model</p>
                    <span>
                      <b>{item.Model}</b>
                    </span>
                  </div>
                  <div className="First_">
                    <p>Machine Category</p>
                    <span>
                      <b>{item.MachineCategory}</b>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="Assigned_Engineer_box">
              <h3>Assigned Engineer</h3>
              {skyBlueBoxData.map((boxData, index) => (
                <SkyBlueBox key={index} {...boxData} />
              ))}
            </div>
          </div>
          <div className="Second_BOX">
            <div className="Top_Button">
              <p
                className={`Button ${
                  activeSection === "ServiceTickets" ? "ActiveButton" : ""
                }`}
                onClick={() => handleButtonClick("ServiceTickets")}
              >
                Service Tickets
              </p>
              <p
                className={`Button ${
                  activeSection === "EngineerNotes" ? "ActiveButton" : ""
                }`}
                onClick={() => handleButtonClick("EngineerNotes")}
              >
                Engineer Notes
              </p>
              <p
                className={`Button ${
                  activeSection === "MachineInfo" ? "ActiveButton" : ""
                }`}
                onClick={() => handleButtonClick("MachineInfo")}
              >
                Machine Info
              </p>
            </div>

            {activeSection === "ServiceTickets" && (
              <div className="Second_BOX_part" id="ServiceTickets">
                <div className="Flex-Details">
                  <div className="T-this">
                    <p className="Dark">SR No.</p>
                    <p className="requestDescription">Description</p>
                    <p className="requestType">Type</p>
                    <p className="Part_exchange">Status</p>
                  </div>

                  {serviceRequestsData.map((request, index) => (
                    <ServiceRequestItem key={index} request={request} />
                  ))}
                </div>
              </div>
            )}
            {activeSection === "EngineerNotes" && (
              <div className="Second_BOX_part" id="EngineerNotes">
                <div className="Flex-Details">
                  <textarea name="comment" form="usrform">
                    Add a note here...
                  </textarea>
                </div>
              </div>
            )}

            {activeSection === "MachineInfo" && (
              <div className="Second_BOX_part" id="MachineInfo">
                <div className="Flex-Details">
                  <h4>No Record Found</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAMdetails;
