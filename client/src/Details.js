import React, { useState, useEffect } from 'react';
import './App.css';

function Details(props) {

  const details = props.location.state.details
  const stringDetails = JSON.stringify(details)
  var formattedString = stringDetails.split(",")
  return (
    <div className="App">
    <headers className="App-header">
    <h3>Order details</h3>
    <div className="details">
    {formattedString.map(item => {
      return(
        <div>
        {item},
        </div>
      )
    })}
    </div>
    </headers>
    </div>
  )
}

export default Details;
