import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router';

function App(props) {
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

  const updateDetails = (order) => {
    console.log(order);
  props.history.push({
    pathname: '/orders/update/',
//    search: '?query=abc',
    state: {details: order}
  })
  }

  const displayDetails = (order) => {
    console.log(order);
  props.history.push({
    pathname: '/orders/details/'+order.id,
//    search: '?query=abc',
    state: {details: order}
  })
  }

  return (
    <div className="App">
    <headers className="App-header">
      <button className="more" onClick={getOrders}>Get More</button>
      <table>
      <tr>
      <th><u>Order ID</u></th>
      <td>Customer phone/email</td>
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
