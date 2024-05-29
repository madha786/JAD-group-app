import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentForm from "./equipmentform";



function PartsInventory(props) {

  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate("/inventoryDetails", { state: { equipmentData : props } });
    window.parent.postMessage({ messageType: 'scrolltop', data: 0 }, '*');
  };

  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const handleInquireButtonClick = () => {
    setShowInquiryModal(true);
  };

  const handleCloseInquiryModal = () => {
    setShowInquiryModal(false);
  };

  return (
    <>
      <div className="equipment_table_card PartsInventory_box">
        <div className="table-head-2 table-head Revision">
          <div className="PartsInventory">
            <h5>
              <strong>{props.jad_id}</strong>
            </h5>
          </div>
        </div>
        <div className="table-head-2 table-head description">
          <h4>{props.description}</h4>
        </div>
        <div className="table-head-3 table-head Part_Number">
          <h4>{props.data['Manufacturer_Id']}</h4>
        </div>
        <div className="table-head-2 table-head Part_Number">
          <h4>{props.Parts_number}</h4>
        </div>
        <div className="table-head-2 table-head Revision">
          <h4>{props.Revision}</h4>
        </div>
        <div className="table-head-3 table-head Action">
          <button className="more-details-btn" onClick={handleDetailsClick}>MORE DETAILS</button>
          <button className="inquire-btn" onClick={handleInquireButtonClick}>INQUIRE</button>
        </div>
      </div>

      <EquipmentForm showInquiryModal={showInquiryModal} handleCloseInquiryModal={handleCloseInquiryModal} values={props}
      producttype="inventory"
      />
    </>
  );
}

export default PartsInventory;
