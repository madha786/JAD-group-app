import React from "react";
import { Link } from "react-router-dom";
const ServiceRequestItem3 = ({ request }) => (
  <div className="T-this">
    {/* <h4 className="Dark">{request.srNo}</h4> */}


    {/* {
      srNo: "100159",
      description: "P1000 channel Module feilures",
      machineName: "93K_0",
      type: "Part(s) Exchange",
      Time: "08/07/2023 10:36",
      Name: "Jamal Palmer",
      Webpage: "Webpage",
      statusImageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
    }, */}
    <h4 className="Dark">
      <Link to={`/ServiceNotesStatus`}>{request.srNo}</Link>
    </h4>
    <h4 className="requestDescription">{request.description}</h4>

    <h4 className="requestType">{request.type}</h4>
    <h4 className="requestType">{request.machineName}</h4>
    <h4 className="Part_exchange">
      <img src={request.statusImageUrl} alt={request.status} />
    </h4>
    
    <h4 className="requestType">{request.Time}</h4>
    <h4 className="requestType">{request.Name}</h4>
    <h4 className="requestType">{request.Webpage}</h4>

    {/* <h4 className="Extra">{request.Time}</h4>
    <h4 className="Extra">{request.Name}</h4>
    <h4 className="Extra">{request.Webpage}</h4> */}
  </div>
);
export default ServiceRequestItem3;
