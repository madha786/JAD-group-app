import React, { useEffect, useState } from "react";
import { useAppState } from "../appstates";
import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import SkyBlueBox from "../component/SkyBlueBox";
import MachineItem from "../component/MachineItem";
import ServiceRequestItem2 from "../component/ServiceRequestitem2";
const UserMachines = () => {
  const [activeTab, setActiveTab] = useState("Machines");
  const {state, dispatch} = useAppState()

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="UserMachines_box">
      <TopHeader />
      <Secondheader />
      <div className="Inside_details">
        <h1 className="User_name">
          Welcome, <span>James Portal</span>
        </h1>
        <div className="Small_boxes">
          <div className="Boxes_start">
            <h3>Total CMA Machines</h3>
            <span>10</span>
          </div>
          <div className="Boxes_start">
            <h3>Active Service Tickets</h3>
            <span>60</span>
          </div>
          <div className="Boxes_start">
            <h3>Machine Information</h3>
            <span>20</span>
          </div>
        </div>
        <div className="Two_boxes">
          <div className="First_BOX">
            <p className="Text_up">
              Your Assigned Engineers <b>({state.skyBlueBoxData.length})</b>
            </p>
            {state.skyBlueBoxData.map((boxData, index) => (
              <SkyBlueBox key={index} {...boxData} />
            ))}
          </div>
          <div className="Second_BOX">
            <div className="Top_Button">
              <p
                className={`Button ${
                  activeTab === "Machines" ? "ActiveButton" : ""
                }`}
                onClick={() => handleTabClick("Machines")}
              >
                Machines
              </p>
              <p
                className={`Button ${
                  activeTab === "Service Requests" ? "ActiveButton" : ""
                }`}
                onClick={() => handleTabClick("Service Requests")}
              >
                Service Requests
              </p>
            </div>

            <div
              className={`Second_BOX_part ${
                activeTab === "Machines" ? "" : "d-none"
              }`}
              id="Machines"
            >
              {state.machinesData.map((machine, index) => (
                <MachineItem key={index} {...machine} />
              ))}
            </div>
            <div
              className={`Second_BOX_part ${
                activeTab === "Service Requests" ? "" : "d-none"
              }`}
              id="Service Requests"
            >
              <div className="Flex-Details">
                <div className="T-this">
                <p className="Dark">SR No.</p>
                    <p className="requestDescription">Description</p>
                    <p className="requestType">Type</p>
                    <p className="requestType">Machine Name</p>
                    <p className="Part_exchange">Status</p>
                </div>

                {state.serviceRequestsData.map((request, index) => (
                  <ServiceRequestItem2 key={index} request={request} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMachines;
