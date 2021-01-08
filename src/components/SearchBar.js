import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    props.onFormSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search-box">Search for Videos:</label>
          <input 
            id="search-box"
            value={term}
            onChange={onInputChange} 
            type="text">
          </input>
        </div>
      </form>
    </div>
  )
}
  
  
    
export default SearchBar;