import React, { useState } from 'react';
//import PropTypes from 'prop-types';

export default function AppCategory({setCategories}) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
        setCategories(cats => [...cats,inputValue]);
    }
    
  }

  return (  
      <form onSubmit={handleSumbit}>

        <input 
         type='text'
         value={inputValue}
         onChange={handleInputChange}
      />

      </form>
  )

}
/*AppCategory.propTypes = {
    value: PropTypes.func.isRequired
}*/
