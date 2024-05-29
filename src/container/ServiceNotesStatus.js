import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import React, { useEffect, useState } from "react";
import SkyBlueBox from "../component/SkyBlueBox";
import { Route } from "react-router-dom";

const ServiceNotesStatus = ({ request }) => {

  const [note, setNote] = useState("");
  const [notesArray, setNotesArray] = useState([]);
  const [activeButton, setActiveButton] = useState("Service-Notes-Status");

  const handleButtonClicks = (button) => {
    setActiveButton(button);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };


  const handleButtonClick = () => {

    const timestamp = new Date().toLocaleTimeString();
    setNotesArray([...notesArray, { note: note, timestamp: timestamp }]);


    setNote("");
  };

  const skyBlueBoxData = [
    {
      topNumber1: "98K_0",
      topNumber2: "DE39700104",
      imageUrl:
        "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Men.png",
      name: "Madhav Palmer",
      email: "Madhav232@gmail.com",
      phone: "+9999 3418 1452",
    },
  ];
  const ImgUrls = [
    "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/ones.png",
    "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/twos.png",
    "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/threes.png",
    "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/fours.png",
    "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/fives.png",
  ];

  return (
    <div className="ServiceNotesStatus_box">
      <TopHeader />
      <Secondheader />
      <div className="Inside_details">
        <div className="Small_boxes_s">
          <h2 className="ID_product">
            SR# <span>100002</span>
          </h2>
          <p>Board Exchanges for Mercury</p>
          <div className="headers">
            <div className="T_ren">
              <span>Type</span>
              <span>Status</span>
            </div>
            <div className="T_ren">
              <span>Part(s) Exchange</span>
              <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png" />
            </div>
          </div>
          <div className="Group_d">
            <p>
              <b>Service Request Owner:</b> Part(s) Exchange
            </p>
            <p>
              <b>Machine Name: </b>93K-1A
            </p>
            <p>
              <b>Field Service Report:</b> 93K-1A
            </p>
            <p>
              <b>Diagnostic/Other Files: -</b>
            </p>

            {skyBlueBoxData.map((boxData, index) => (
              <SkyBlueBox key={index} {...boxData} />
            ))}
          </div>
        </div>
        <div className="Two_boxes_s">
          <div className="SwitchButton">
            <div
              className={`Service-Notes-Status ${
                activeButton === "Service-Notes-Status" ? "ActiveButton" : ""
              }`}
              onClick={() => handleButtonClicks("Service-Notes-Status")}
            >
              Service Notes & Status
            </div>
            <div
              className={`Attachments ${
                activeButton === "Attachments" ? "ActiveButton" : ""
              }`}
              onClick={() => handleButtonClicks("Attachments")}
            >
              Attachments
            </div>
          </div>
          {activeButton === "Service-Notes-Status" && (
            <div className="Notes_Box">
              <div className="Input_note">
                <textarea
                  name="comment"
                  form="usrform"
                  value={note}
                  onChange={handleNoteChange}
                  placeholder="Add a note here..."
                />
                <button onClick={handleButtonClick} className="AddNote">
                  Add Note
                </button>

                <div className="Add_note">
                  <h3>Your Notes</h3>
                  <ul className="Notes">
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                      <strong>
                        <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/time.png" />
                        3 min ago
                      </strong>
                    </li>
                    {/* {notesArray.map((item, index) => (
                      <li key={index}>
                        {item.note}
                        <strong>{item.timestamp}</strong>
                      </li>
                    ))} */}
                  </ul>

                  {notesArray.map((item, index) => (
                    <ul className="Notes">
                      <li key={index}>
                        {item.note}
                        <strong>
                          <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/time.png" />
                          {item.timestamp}
                        </strong>
                      </li>
                    </ul>
                  ))}
                  <h3>Parts Requested</h3>
                  <div className="Table_">
                    <div className="Part_No">
                      <p>Part No</p>
                      <h4>E6978-69519</h4>
                      <h4>E6989-69597</h4>
                      <h4>E7002-69514</h4>
                      <h4>E6978-69519</h4>
                      <h4>E6989-69591</h4>
                      <h4>O Rings</h4>
                    </div>
                    <div className="Description">
                      <p>Description</p>
                      <h4>
                        PCA, Clock Board AY for IC Test System for Exchange
                      </h4>
                      <h4>DC/DC Analog</h4>
                      <h4>S DPS Board</h4>
                      <h4>
                        PCA, Clock Board AY for IC Test System for Exchange
                      </h4>
                      <h4>DC/DC Digital</h4>
                    </div>
                    <div className="Qty">
                      <p>Qty</p>
                      <h4>1</h4>
                      <h4>1</h4>
                      <h4>1</h4>
                      <h4>1</h4>
                      <h4>3</h4>
                      <h4>2</h4>
                    </div>
                    <div className="Shipped">
                      <p>Shipped?</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                    <div className="Defective-Received">
                      <p>Defective Received?</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                    <div className="Part-Cap-Used">
                      <p>Part Cap Used</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                  </div>
                  <h3>Service Request Items</h3>
                  <div className="Table_">
                    <div className="Part_No">
                      <p>Type</p>
                      <h4>Part(s) Exchange</h4>
                      <h4>Part(s) Exchange</h4>
                      <h4>Part(s) Exchange</h4>
                    </div>
                    <div className="Description">
                      <p>Status</p>
                      <h4>
                        All Part(s) Delivered/Open waiting for Return of
                        Defective Part(S)
                      </h4>
                      <h4>
                        All Part(s) Delivered/Open waiting for Return of
                        Defective Part(S)
                      </h4>
                      <h4>
                        All Part(s) Delivered/Open waiting for Return of
                        Defective Part(S)
                      </h4>
                    </div>

                    <div className="Shipped">
                      <p>Shipping Method</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                    <div className="Defective-Received">
                      <p>Tracking Number</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                    <div className="Part-Cap-Used">
                      <p>Date of srevice</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                    <div className="Note">
                      <p>Note</p>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                      <h4></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeButton === "Attachments" && (
            <div className="Attachments_box">
              <h2>Attachments ({ImgUrls.length})</h2>
              <div className="AllStoreImg">
                {ImgUrls.map((url, index) => (
                  <img key={index} src={url} alt={`Image ${index + 1}`} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceNotesStatus;
