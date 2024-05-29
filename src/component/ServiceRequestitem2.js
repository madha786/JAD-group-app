import React from "react";
import { Link } from "react-router-dom";
const ServiceRequestItem2 = ({ request }) => (
  <div className="T-this">
    {/* <h4 className="Dark">{request.srNo}</h4> */}
    <h4 className="Dark">
      <Link to={`/ServiceNotesStatus`}>{request.srNo}</Link>
    </h4>
    <h4 className="requestDescription">{request.description}</h4>
    <h4 className="requestType">{request.machineName}</h4>
    <h4 className="requestType">{request.type}</h4>
    <h4 className="Part_exchange">
      <img src={request.statusImageUrl} alt={request.status} />
    </h4>
    {/* <h4 className="Extra">{request.Time}</h4>
    <h4 className="Extra">{request.Name}</h4>
    <h4 className="Extra">{request.Webpage}</h4> */}
  </div>
);
export default ServiceRequestItem2;
