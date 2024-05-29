import React, { useEffect, useState } from "react";

const PopupComponent = (props) => {
  const [showButtons, setShowButtons] = useState(true);

  const [rowCount, setRowCount] = useState(1);
  const [rowCount1, setRowCount1] = useState(1);

  const [formData, setFormData] = useState([{ partNo: "", qty: "", description: "", partCapUsed: "", shipped: false, defectiveReceived: false }]);
  const [serviceRequests, setServiceRequests] = useState([{ type: "", shippingMethod: "", dateOfService: "", shipped: false, defectiveReceived: false, status: "", trackingNumber: "", note: "" }]);


  const handleAddRow = () => {
    setRowCount(rowCount + 1);
    setFormData([...formData, { partNo: "", qty: "", description: "", partCapUsed: "", shipped: false, defectiveReceived: false }]);
  };

  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleAddRow1 = () => {
    setRowCount1(prevCount => prevCount + 1);
    setServiceRequests(prevRequests => [...prevRequests, { type: "", shippingMethod: "", dateOfService: "", shipped: false, defectiveReceived: false, status: "", trackingNumber: "", note: "" }]);
  };

  const handleChange1 = (index, field, value) => {
    const updatedRequests = [...serviceRequests];
    updatedRequests[index][field] = value;
    setServiceRequests(updatedRequests);
  };



  
  const handleFileInputChange = () => {
    setShowButtons(true);
  };

  const handleCancelClick = () => {
    setShowButtons(false);
  };

  const handleSaveNewClick = () => {
    setShowButtons(false);
  };

  const submit_close = () => {
    console.log(formData)
    console.log(serviceRequests)

    props.onClose();
  }

  return (
    <div className={props.isPopupOpen ? "Popup_box" : 'd-none'}>
      <div className="Inside_popup">
        <h1>Service Request Information</h1>
        <p>A brief description of the service you are requesting.</p>
        <div className="Section_">
          <div className="First_form">
            <div className="Selection_">
              <label>Machine Name</label>
              <select name="Selectmachine" id="Selectmachine">
                <option value="1">Select machine</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="Selection_">
              <label>Type</label>
              <select name="Selectmachine" id="Selectmachine">
                <option value="1">None</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="Selection_">
              <label>Origin</label>
              <select name="Selectmachine" id="Selectmachine">
                <option value="1">Web</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="Selection_">
              <label>Contacts</label>
              <select name="Selectmachine" id="Selectmachine">
                <option value="1">Select Contact</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="Selection_">
              <label>Description</label>
              <input type="Name" placeholder="Description" />
            </div>
          </div>
          <div className="First_form">
            <div className="Selection_">
              <label>Service Request Owner</label>
              <input type="Name" placeholder="Service Request Owner" />
            </div>
            <div className="Selection_">
              <label>Status</label>
              <input type="Name" placeholder="Status" />
            </div>
            <div className="Selection_">
              <label>Diagnostic/Other Files</label>
              <input type="file" id="myfile" name="myfile" />
            </div>
          </div>
        </div>


        <h1>Part Requested</h1>
        {[...Array(rowCount)].map((_, index) => (
        <div className="Section_" key={index}>
          <div className="First_form">
            <div className="Selection_">
              <label>Part No.</label>
              <input
                type="Number"
                value={formData[index].partNo}
                onChange={(e) => handleChange(index, "partNo", e.target.value)}
              />
            </div>
            <div className="Selection_">
              <label>Qty</label>
              <input
                type="Number"
                value={formData[index].qty}
                onChange={(e) => handleChange(index, "qty", e.target.value)}
              />
            </div>
            <div className="Selection_2">
              <input
                type="checkbox"
                id={`Shipped_${index}`}
                name={`Shipped_${index}`}
                value={formData[index].shipped}
                onChange={(e) => handleChange(index, "shipped", e.target.checked)}
              />
              <label htmlFor={`Shipped_${index}`}> Shipped?</label>
              <input
                type="checkbox"
                id={`Defective_Received_${index}`}
                name={`Defective_Received_${index}`}
                value={formData[index].defectiveReceived}
                onChange={(e) => handleChange(index, "defectiveReceived", e.target.checked)}
              />
              <label htmlFor={`Defective_Received_${index}`}> Defective Received?</label>
            </div>
          </div>
          <div className="First_form">
            <div className="Selection_">
              <label>Description</label>
              <input
                type="text"
                value={formData[index].description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
              />
            </div>
            <div className="Selection_">
              <label> Part Cap Used</label>
              <input
                type="text"
                value={formData[index].partCapUsed}
                onChange={(e) => handleChange(index, "partCapUsed", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="Create-Service-Request" onClick={handleAddRow}>
        + Add Row
      </button>


      <h1>Service Request Items</h1>
      {[...Array(rowCount1)].map((_, index) => (
        <div className="Section_" key={index}>
          <div className="First_form">
            <div className="Selection_">
              <label>Туре</label>
              <input
                type="text"
                value={serviceRequests[index].type}
                onChange={e => handleChange1(index, "type", e.target.value)}
              />
            </div>
            <div className="Selection_">
              <label>Shipping Method</label>
              <select
                value={serviceRequests[index].shippingMethod}
                onChange={e => handleChange1(index, "shippingMethod", e.target.value)}
              >
                <option value="">-None-</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="Selection_">
              <label htmlFor={`Service-${index}`}>Date of Service</label>
              <input
                type="date"
                id={`Service-${index}`}
                name={`Service-${index}`}
                value={serviceRequests[index].dateOfService}
                onChange={e => handleChange1(index, "dateOfService", e.target.value)}
              />
            </div>
            <div className="Selection_2">
              <input
                type="checkbox"
                id={`Shipped-${index}`}
                name={`Shipped-${index}`}
                checked={serviceRequests[index].shipped}
                onChange={e => handleChange1(index, "shipped", e.target.checked)}
              />
              <label htmlFor={`Shipped-${index}`}>Shipped?</label>
              <input
                type="checkbox"
                id={`Defective_Received-${index}`}
                name={`Defective_Received-${index}`}
                checked={serviceRequests[index].defectiveReceived}
                onChange={e => handleChange1(index, "defectiveReceived", e.target.checked)}
              />
              <label htmlFor={`Defective_Received-${index}`}> Defective Received?</label>
            </div>
          </div>
          <div className="First_form">
            <div className="Selection_">
              <label>Status</label>
              <input
                type="text"
                value={serviceRequests[index].status}
                onChange={e => handleChange1(index, "status", e.target.value)}
              />
            </div>
            <div className="Selection_">
              <label> Tracking Number-</label>
              <input
                type="number"
                value={serviceRequests[index].trackingNumber}
                onChange={e => handleChange1(index, "trackingNumber", e.target.value)}
              />
            </div>
            <div className="Selection_">
              <label>Note</label>
              <input
                type="text"
                value={serviceRequests[index].note}
                onChange={e => handleChange1(index, "note", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <button className="Create-Service-Request" onClick={handleAddRow1}>+ Add Row</button>


        <h1>Close Report</h1>
        <div className="Section_">
          <div className="First_form">
            <div className="Selection_">
              <label>Field Service Report</label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
        </div>
        {showButtons && (
          <div className="Submit_button_box">
            <button className="Cancel" onClick={props.onClose}>
              Cancel
            </button>
            <button className="Save_New" onClick={handleSaveNewClick}>
              Save and New
            </button>
            <button className="Save" onClick={submit_close}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupComponent;
