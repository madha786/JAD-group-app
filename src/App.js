import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./appstates";
import "./App.css";
import Productlisting from "./container/productlisting";
import Inventorylist from "./container/Inventorylist";

import Header from "./container/Header";
import Footer from "./container/Footer";

import ProductDetail from "./container/ProductDetail";
import InventoryDetail from "./container/inventoryDetail";
import Login from "./container/Login";
import UserMachines from "./container/user-Machines";
import CAMdetails from "./container/CAMdetails";
import CMAMachines from "./container/CMAMachines";
import ServiceRequest from "./container/ServiceRequest";
import Profilepersonal from "./container/Profilepersonal";
import ServiceNotesStatus from "./container/ServiceNotesStatus";



function App() {
  return (
    <AppStateProvider>
        <BrowserRouter basename="">  
          <Routes>
            <Route path="/inventorylist" element={<Inventorylist />} />
            <Route path="/equipment/" element={<Productlisting />} />
            <Route path="/productDetails" element={<ProductDetail />} />
            <Route path="/inventoryDetails" element={<InventoryDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/user-Machines" element={<UserMachines />} />
            <Route path="/CAMdetails" element={<CAMdetails />} />
            <Route path="/CMAMachines" element={<CMAMachines />} />
            <Route path="/ServiceRequest" element={<ServiceRequest />} />
            <Route path="/Profilepersonal" element={<Profilepersonal />} />
            <Route path="/ServiceNotesStatus" element={<ServiceNotesStatus />} />
          </Routes>
        </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
