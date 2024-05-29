import React from "react";

const MachineItem = ({
  imageUrl,
  topNumber1,
  topNumber2,
  manufacture,
  model,
  serviceTickets,
  cmaStartDate,
  cmaBalance,
}) => (
  <div className="Data_image_Box">
    <div className="Image-Box">
      <img src={imageUrl} className="Product_img" alt="Machine" />
      <div className="Top_numbers">
        <p>{topNumber1}</p>
        <span>|</span>
        <p>{topNumber2}</p>
      </div>
      <img
        src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png"
        className="Inprogress"
        alt="In Progress"
      />
    </div>
    <div className="Image_details">
      <img
        src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/arrow.png"
        className="Arrow_for_next"
        alt="Arrow"
      />
      <div className="Div_1">
        <div className="T-this">
          <p>Manufacture</p>
          <span>{manufacture}</span>
        </div>
        <div className="T-this">
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div className="T-this">
          <p>Service Tickets</p>
          <span>{serviceTickets}</span>
        </div>
        <div className="T-this">
          <p>CMA Start Date</p>
          <span>{cmaStartDate}</span>
        </div>
      </div>
      <div>
        <h3 className="CMA_Balance">CMA Balance</h3>
        <div className="Div_2">
          <div className="T-this">
            <p>Pasts Cap Remaining</p>
            <span>{cmaBalance.partsCapRemaining}</span>
          </div>
          <div className="T-this">
            <p>Calibration Remaining</p>
            <span>{cmaBalance.calibrationRemaining}</span>
          </div>
          <div className="T-this">
            <p>Support Hours</p>
            <span>{cmaBalance.supportHours}</span>
          </div>
          <div className="T-this">
            <p>On Site service visit</p>
            <span>{cmaBalance.onSiteServiceVisit}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MachineItem;
