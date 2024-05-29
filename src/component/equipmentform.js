import React, { useState, useEffect } from "react";
import Popup from "./popup";


function EquipmentForm(props) {

    const [formData, setFormData] = useState({
        jadId: props.values.jad_id || '', 
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
      });

      const [poup_close,poup_setClose] = useState(false);  
      const [loading,setLoading] = useState(false)
     

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const close_popup = (e) => {
        poup_setClose(false);
        props.handleCloseInquiryModal();
      }
    
      const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)
        const queryParams = `jadId=${encodeURIComponent(formData.jadId)}&fullName=${encodeURIComponent(formData.fullName)}&companyName=${encodeURIComponent(formData.companyName)}&email=${encodeURIComponent(formData.email)}&phoneNumber=${encodeURIComponent(formData.phoneNumber)}`;
        try {
          const response = await fetch(`https://jadgroup2.goaspendigital.com/api/equipmentrequest.php?${queryParams}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const responseData = await response.json();
      
          if (responseData.error) {
            console.error('Error fetching data:', responseData.error);
          } else {
    
            if(responseData.message == 'Equipment Inqury Created Successfully') {
              setLoading(false)
              poup_setClose(true)
            }
            else {
              alert(responseData.message);
              setLoading(false)
            }
           
  
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
      

      useEffect(()=>{
       // console.log(props.values)
      },[props])


  return (
    <>
      

{
props.showInquiryModal && (
    
  <div class="Inquiry_container_filter">


       <Popup poup_close={poup_close} close_popup={close_popup}/>
    <div class="Inquiry_container">
    {loading ? <div className="submiting-loading">Submiting...</div> : null}
      <h3>{props.producttype == 'equipment' ? "Equipment Inquiry" : 'Inventory Inquiry'}</h3>
      <div class={props.producttype == 'equipment' ? "Inquiry_details_container" : 'Inquiry_details_container align-start'}>
        <div class="Inquiry_box">
          <img  src={props.values.thumb} className={props.producttype == 'equipment' ? "Inquiry_box_img" : 'd-none'} />
          <div className="equipment-details">
            <h5>
              JAD-ID: <strong>{props.values.jad_id}</strong>
            </h5>

            {props.producttype == 'equipment' ? <p>{props.values.description}</p> : <h5>Description: <strong>{props.values.description}</strong></h5>}
          </div>
          <h4>
            {props.producttype == 'equipment' ? <span>Model: </span> : <span>Part Number: </span>}
            {props.producttype == 'equipment' ?  props.values.model : props.values.Parts_number}
          </h4>
          <h4>
          {props.producttype == 'equipment' ? <span>Vintage: </span> : <span>Revision: </span>}
          {props.producttype == 'equipment' ?  props.values.vintage : props.values.Revision}
      
          </h4>

          <h4 className={props.producttype == 'equipment' ? '' : 'd-none'}>
            {props.producttype == 'equipment' ? <span>Inspection Available:</span> : null}
            {props.values.Inspection_Available == 0 ? 'No' : 'Yes'}
          </h4>
          <h4 className={props.producttype == 'equipment' ? '' : 'd-none'}>
            <span>Condition:</span>
            {props.values.Condition}
          </h4>
          <h4>
            <span>Manufacturer:</span>
            {props.values.Manufacturer}
          </h4>
          {/* <a href="#" class="Detailed">
            Detailed Specifications
          </a> */}
        </div>
        <div class="Inquiry-Form_box">
          <form onSubmit={handleSubmit}>

            <label for="fname">Full name:</label>
            <br />
            <input type="text" id="fname" name="fullName" onChange={handleChange} required />
            <br />
            <label for="lname">Company name:</label>
            <br />
            <input type="text" id="company" name="companyName" onChange={handleChange} required />
            <br />
            <br />
            <label for="lname">Phone Number:</label>
            <br />
            <input type="Number" id="number" name="phoneNumber" onChange={handleChange} required />
            <br />
            <label for="lname">Email:</label>
            <br />
            <input type="Email" id="email" name="email" onChange={handleChange} required />
            <br />
            <br />
            <div className="SUbmit_button">
              <input type="submit" value="Submit" />{" "}
              <img src="https://jadgroup.goaspendigital.com/app_files/Subtractttt.svg" />
            </div>
          </form>
        </div>
      </div>
      <button onClick={props.handleCloseInquiryModal} className="Close_button">
        X
      </button>
    </div>
  </div>
)

}
    </>
  );
}

export default EquipmentForm;