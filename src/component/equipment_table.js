import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentForm from "./equipmentform";
import loading from '../loading1.gif'

function Equipment_table(props) {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate("/productDetails", { state: { equipmentData: props } });
    window.parent.postMessage({ messageType: 'scrolltop', data: 0 }, '*');
    
  };

  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [thumbnailLoading, setThumbnailLoading] = useState(true);

  const handleInquireButtonClick = () => {
    setShowInquiryModal(true);
  };

  const handleCloseInquiryModal = () => {
    setShowInquiryModal(false);
  };

  const handleThumbnailLoad = () => {
    setThumbnailLoading(false);
  };

  useEffect(() => {
    setThumbnailLoading(false);
  }, [props.thumb]);

  const values = {
    jad_id: props.jad_id,
    description: props.description,
    model: props.model,
    vintage: props.vintage,
    Inspection_Available: props.Inspection_Available,
    Condition: props.Condition,
    Manufacturer: props.data['Manufacture_Id'] ? props.data['Manufacture_Id'] : props.data['Manfacturer_Id'],
    thumb: props.thumb,
  };

  return (
    <>
      <div className="equipment_table_card">
        <div className="equipment table-head">

        {thumbnailLoading ? (
            <img src={loading} className="loading-thumbnail" alt="Loading" />
          ) : (
            <img
              src={props.thumb}
              className="thumbnail"
              onLoad={handleThumbnailLoad}
              alt="Thumbnail"
            />
          )}

          <div className="equipment-details">
            <h5>
              JAD-ID: <strong>{props.jad_id}</strong>
            </h5>
            <p>{props.description}</p>
            <a className="view-details" href={props.File} target="_blank">Detailed Specifications</a>
          </div>
        </div>
        <div className="table-head-2 table-head">
          <h4>{props.model}</h4>
        </div>
        <div className="table-head-2 table-head">
          <h4>{props.vintage}</h4>
        </div>
        <div className="table-head-2 table-head">
          <h4>{props.Inspection_Available == 0 ? "No" : "Yes"}</h4>
        </div>
        <div className="table-head-2 table-head">
          <h4>{props.Condition}</h4>
        </div>
        <div className="table-head-3 table-head">
          <h4>{props.data['Manufacture_Id'] ? props.data['Manufacture_Id'] : props.data['Manfacturer_Id']}</h4>
        </div>
        <div className="table-head-3 table-head">
          <button className="more-details-btn" onClick={handleDetailsClick}>
            MORE DETAILS
          </button>

          <button className="inquire-btn" onClick={handleInquireButtonClick}>
            INQUIRE
          </button>
        </div>
      </div>

      <EquipmentForm
        showInquiryModal={showInquiryModal}
        handleCloseInquiryModal={handleCloseInquiryModal}
        values={values}
        producttype="equipment"
      />
    </>
  );
}

export default Equipment_table;
