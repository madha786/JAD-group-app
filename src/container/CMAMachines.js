import TopHeader from "../component/TopHeader";
import Secondheader from "../component/Second_header";
import React, { useEffect, useState } from "react";
import { useAppState } from "../appstates";
import MachineItem from "../component/MachineItem";
const CMAMachines = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const {state, dispatch} = useAppState()

  const handleRecordsPerPageChange = (event) => {
    const value = event.target.value;
    setRecordsPerPage(
      value === "all" ? state.machinesData.length : parseInt(value, 10)
    );
  };


  return (
    <div className="CMAMachines_box">
      <TopHeader />
      <Secondheader />
      <div className="Machines_top">
        <h1>
          <b>CMA</b> Machines
        </h1>
        <div className="Selection_box">
          <select name="Filter" id="Filter">
            <option value="1">Filter</option>
            <option value="2">2</option>
          </select>
          <select
            name="recordsPerPage"
            id="recordsPerPage"
            value={recordsPerPage}
            onChange={handleRecordsPerPageChange}
          >
            <option value="all">Show All Records</option>
            <option value="5">5 Records Per Page</option>
            <option value="10">10 Records Per Page</option>
          </select>
        </div>
      </div>
      <div className="Second_BOX_part CMAMachines">
        {state.machinesData.slice(0, recordsPerPage).map((machine, index) => (
          <MachineItem key={index} {...machine} />
        ))}
      </div>
    </div>
  );
};

export default CMAMachines;
