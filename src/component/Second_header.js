import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAppState } from "../appstates";

const Secondheader = () => {
  const {state,dispatch} = useAppState()
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state.ActiveMenu)
  }, [state.ActiveMenu]);

  const updateActivemenu = (value,link) => {

    dispatch({ type: 'SET_ACTIVE_NAV', payload:value });
    navigate(link);
  }

  return (
    <div className="Secondheader">
      <div className="In_logo">
        <img
          src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Logo.png"
          alt="logo2.0"
          className="Logo_img"
        />
      </div>
      <div className="Menu_text">
        <button
          className={`Menu ${state.ActiveMenu === "Home" ? "MenuActive" : ""}`}
          onClick={() => updateActivemenu("Home","/user-Machines")}
        >
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Home.png"
            alt="Home"
          />
          <p>Home</p>
        </button>
        <button
          className={`Menu ${
            state.ActiveMenu === "CMA Machines" ? "MenuActive" : ""
          }`}
          onClick={() => updateActivemenu("CMA Machines","/CMAMachines")}
        >
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Cma.png"
            alt="CMA Machines"
          />
          <p>CMA Machines</p>
        </button>
        <button
          className={`Menu ${
            state.ActiveMenu === "Service Request" ? "MenuActive" : ""
          }`}
          onClick={() => updateActivemenu("Service Request","/ServiceRequest")}
        >
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/servics.png"
            alt="Service Request"
          />
          <p>Service Request</p>
        </button>

      </div>
      <div className="Contact_text">
        <button
          className={`Conacts ${
            state.ActiveMenu === "Help Guide" ? "MenuActive" : ""
          }`}
          onClick={() => updateActivemenu("Help Guide","/ServiceRequest")}
        >
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/help.png"
            alt="Help Guide"
          />
          <p>Help Guide</p>
        </button>
        <button
          className={`Conacts ${state.ActiveMenu === "Profile" ? "MenuActive" : ""}`}
          onClick={() => updateActivemenu("Profile","/Profilepersonal")}
        >
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/profile.png"
            alt="Profile"
          />
          <p>Profile</p>
        </button>
        <div className="Conacts">
          <img
            src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/bell.png"
            alt="Bell"
          />
        </div>
      </div>
    </div>
  );
};

export default Secondheader;
