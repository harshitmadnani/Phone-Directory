import React from "react";
import user from "../images/user.png";
import "./ContactCard.css"

const ContactCard = (props) => {
  const { id, firstName,lastName, email,officeContact, residentialContact,country,city,streetAddress} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">First Name:<span>  {firstName}</span></div>
        <div className="header">Last Name:<span>{lastName}</span> </div>
        <div className="header">Email:<span> {email}</span></div>
        <div className="header">Office Contact:<span> {officeContact}</span> </div>
        <div className="header">Residential  Contact:<span> {residentialContact}</span> </div>
        <div className="header">Street Address:<span> {streetAddress}</span> </div> 
        <div className="header">City:<span>{city}</span> </div> 
        <div className="header">Country:<span>{country}</span> </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
