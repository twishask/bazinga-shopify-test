import React, { useState, useEffect } from 'react';
import './App.css';

function UpdateDetails(props) {
  console.log(props.location.state.details);
  const order = props.location.state.details
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);

  console.log(email+" "+phone);
  const updateDetails = () => {
    console.log("updating...");
    const url = '/orders/update/'+order._id
    fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      phone: phone,
    })
    })
    .then(response => {
      response.json()
      .then(jsonResponse => {
        console.log(jsonResponse);
        alert("Email/Phone updated");
      })
    })
  }

  return (
    <div className="App">
    <headers className="App-header">
    Update customer details
    <br></br>
    <br></br>
    <input type="text" placeholder="Email" onChange={e =>setEmail(e.target.value)}/>
    <br></br>
    <input type="number" placeholder="Phone" onChange={e =>setPhone(e.target.value)} />
    <br></br>
    <button onClick={updateDetails} >Update</button>
    </headers>
    </div>
  )
}

export default UpdateDetails;
