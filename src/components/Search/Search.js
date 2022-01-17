import React from 'react';
import './Search.css';

export default function Search(props) {
  const value = props.value;
  const handleChange = (e) => props.onChange(e.target.value);
  const handleSubmit = () => props.onSubmit(value);
    

  return (
    <div className="background">
      <input className="search clear-margin-top" type="text" value={value} onKeyDown={(e) => {e.key==='Enter' ? handleSubmit() : handleChange(e)}} onChange={handleChange} />
      <button className="btn btn-dark clear-margin-top" onClick={handleSubmit}>Search</button>
    </div>
  )
}