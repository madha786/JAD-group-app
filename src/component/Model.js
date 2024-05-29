import React, { useState, useEffect } from 'react';

function Model(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.handleModelChange(inputValue.trim());
    }
    
  };

  const handlebuttonpress = (e) => {
    props.handleModelChange(inputValue.trim());
    
  }

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <>
      <div className='search-container model-option'>
        <input
          type='text'
          className='search-input'
          placeholder='Model...'
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />

        <button className='search-btn' onClick={handlebuttonpress}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </>
  );
}

export default Model;