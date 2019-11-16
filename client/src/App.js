import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';

function App(props) {
  const [orders, setOrders] =useState([])

  useEffect(() => {
    getOrders()
  }, []);

  const getOrders = () => {
    fetch('/orders')
      .then(res => {
        res.json()
      .then(jsonResponse => {
          setOrders(jsonResponse)
      });
    })
  }

  const updateDetails = (order) => {
  props.history.push({
    pathname: '/orders/update/',
    state: {details: order}
  })
  }

  const displayDetails = (order) => {
  props.history.push({
    pathname: '/orders/details/'+order.id,
    state: {details: order}
  })
  }

  return (
    <div className="App">
    <headers className="App-header">
      <table>
      <tr>
      <th><u>Order ID</u></th>
      <td>Customer phone/email</td>
      <td></td>
      </tr>
        {orders.map(order => {
          return <tr className="tr" onClick={()=>{displayDetails(order)}}>
            <td>{order["id"]}</td>
            <td>{order["email"]}
            <br></br>{order["phone"]}</td>
            <td>
            <button onClick={() => updateDetails(order)}>Update Email/Phone</button>
            </td>
          </tr>
        })}
      </table>
    </headers>
    </div>
  );
}

export default withRouter(App);
