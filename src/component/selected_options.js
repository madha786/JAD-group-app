import React, { useState, useEffect } from "react";

function SelectedOption(props) {
  const [active, setactive] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  useEffect(() => {
    setactive(props.values.includes(props.searchvalue));

    let value = props.searchvalue.split(',');
    setSelectedOption(value)
  }, [props.searchvalue, props.values]);

  // const handleOptionClick = (value) => {
  //   // setactive(true);
  //   props.searchfunction(value);
  // };
  const handleOptionClick = (value) => {
    setactive(false);


    if(props.type != 'single') {
    let currentOption = [...selectedOption];
  
 
    const index = currentOption.indexOf(value);
  
  
    if (index === -1) {
      currentOption.push(value);
    } else {
      currentOption.splice(index, 1);
    }
  

    setSelectedOption(currentOption);
    props.searchfunction(currentOption.join(','))

  }
  else {
    setSelectedOption(value);
    props.searchfunction(value)
  }


  setTimeout(() => {
    setactive(false);
  }, 1000); 
  
  //  console.log(selectedOption)
  };


  let options = props.values.map((value, index) => {
    return (
      props.type !== 'single' ? (
        <div
          key={index}
          value={value}
          className={`option-value ${
            selectedOption.indexOf(value) !== -1 ? "active" : ""
          }`}
          onClick={() => handleOptionClick(value)}
        >
          <input
            type="checkbox"
            className="input-check"
            checked={selectedOption.indexOf(value) !== -1}
          />
          <h4>{value}</h4>
        </div>
      ) : (
        <div
          key={index}
          value={value}
          className={`option-value ${
            selectedOption == value ? "active" : ""
          }`}
          onClick={() => handleOptionClick(value)}
        >
          <input
            type="checkbox"
            className="input-check"
            checked={selectedOption == value }
          />
          <h4>{value}</h4>
        </div>
      )
    );
  });

  return (
    <>
      <div className="option-container">
        <div
          className={
            active ? "accordion-header active-header" : "accordion-header"
          }
          onClick={() => setactive(!active)}
        >
          <h4>{props.name}</h4>
          <svg
            width="24"
            height="24"
            className={active ? "arrow-active" : "arrow-icon"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8L12 15L5 8"
              stroke={active ? "#fff" : "#DD1010"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className={active ? "option-values active-option" : "option-values"}
        >
          {options}
        </div>
      </div>
    </>
  );
}

export default SelectedOption;
