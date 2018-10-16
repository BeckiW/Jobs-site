import React, { Component } from "react";
import "./Users.css"

const Users = props => (
     <div className="Container">
        <div className="User-container">
          <div className="User-image">
            <img src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="error_user.png"}}/>
          </div>
          <div className="User-info">
            <h2>{props.name}</h2>
            <h4>{props.title}</h4>
          </div>
        </div>
     </div>

   )


export default Users
