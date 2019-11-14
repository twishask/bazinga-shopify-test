import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [orders, setOrders] =useState([])

  useEffect(() => {
    console.log('mounted or updated');
    getOrders()
  }, []);

  const getOrders = () => {
    console.log("getOrders function");
    fetch('/orders')
      .then(res => {
        res.json()
      .then(jsonResponse => {
          setOrders(jsonResponse)
      });
    })
  }

  return (
    <div className="App">
    <headers className="App-header">
      <button className="more" onClick={getOrders}>Get More</button>
        {orders.map(order => {
          return <div>
            {order["id"]} {order["email"]}
          </div>
        })}
    </headers>
    </div>
  );
}

export default App;
