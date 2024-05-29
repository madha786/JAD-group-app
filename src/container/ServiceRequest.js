import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import React, { useState } from "react";
import { useAppState } from "../appstates";
import ServiceRequestItem3 from "../component/ServiceRequestitem3";
import PopupComponent from "../component/PopupComponent";
const ServiceRequest = () => {
  const {state, dispatch} = useAppState()
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCreateServiceRequestClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handleRecordsPerPageChange = (event) => {
    const value = event.target.value;
    setRecordsPerPage(
      value === "all" ? state.serviceRequestsData.length : parseInt(value, 10)
    );
  };

  return (
    <div className="CMAMachines_box">
      <TopHeader />
      <Secondheader />
      <div className="Service_top">
        <div className="Group_a">
          <h1>
            <b>Service</b> Request
          </h1>
          <button
            className="Create-Service-Request"
            onClick={handleCreateServiceRequestClick}
          >
            + Create Service Request
          </button>

          { <PopupComponent onClose={handleClosePopup} isPopupOpen={isPopupOpen} />}
        </div>
        <div className="Group_a">
          <p className="TotalRecords">
            Total Records {state.serviceRequestsData.length}
          </p>
          <div className="Selection_box">
            <select name="Filter" id="Filter">
              <option value="1">Filter</option>
              <option value="2">2</option>
            </select>
            <select
              name="recordsPerPage"
              id="recordsPerPage"
              value={recordsPerPage}
              onChange={handleRecordsPerPageChange}
            >
              <option value="all">Show All Records</option>
              <option value="5">5 Records Per Page</option>
              <option value="10">10 Records Per Page</option>
            </select>
          </div>
        </div>
      </div>
      <div className="Second_BOX_part  CMAMachines">
        <div className="Flex-Details">
          <div className="T-this">

            <p className="Dark">SR No.</p>
            <p className="requestDescription">Description</p>
            <p className="requestType">Machine Name</p>
            <p className="requestType">Type</p>
            <p className="requestType">Status</p>
            <p className="requestType">Time</p>
            <p className="requestType">Engineer</p>
            <p className="Part_exchange">Webpage</p>
          </div>

          {state.serviceRequestsData
            .slice(0, recordsPerPage)
            .map((request, index) => (
              <ServiceRequestItem3 key={index} request={request} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
