import React from "react";

const SkyBlueBox = ({
  topNumber1,
  topNumber2,
  imageUrl,
  name,
  email,
  phone,
}) => (
  <div className="SkyBlue_boxes">
    <div className="Top_numbers">
      <p>{topNumber1}</p>
      <span>|</span>
      <p>{topNumber2}</p>
    </div>
    <div className="Men_details">
      <img src={imageUrl} alt="Avatar" />
      <div className="Men_details_text">
        <h4 className="Name_men">{name}</h4>
        <span className="Mail_contact">
          <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Mail.png" />
          {email}
        </span>
        <span className="Mail_contact">
          <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Phone.png" />
          {phone}
        </span>
      </div>
    </div>
  </div>
);

export default SkyBlueBox;
