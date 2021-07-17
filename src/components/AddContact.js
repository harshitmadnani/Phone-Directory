import React from "react";
import {Link} from "react-router-dom"

class AddContact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    officeContact:"",
    residentialContact:"",
    country:"",
    city:"",
    streetAddress:""
  };

  // id, firstName,lastName, email,officeContact, residentialContact,country,city,streetAddress

  add = (e) => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === ""|| this.state.email === ""  || this.state.officeContact===""  || this.state.residentialContact==="" || this.state.country===""    || this.state.city==="" || this.state.streetAddress==="" ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ firstName: "", lastName: "", email:"",officeContact:"", residentialContact: "", country: "", city:"",streetAddress:""});
    this.props.history.push("/")
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>  
        <Link to="/">
          <button className="ui button blue right " style={{marginLeft:950}}>Contacts Saved</button>
        </Link>
        
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your Last Name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>



          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email ID"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
{/*  */}

          <div className="field">
            <label>Office Contact</label>
            <input
              type="number"
              name="officeContact"
              placeholder="Enter your 10 Digit Contact Number"
              value={this.state.officeContact}
              onChange={(e) => this.setState({ officeContact: e.target.value })}
            />
          </div>



          <div className="field">
            <label>Residential Contact</label>
            <input
              type="number"
              name="residentialContact"
              placeholder="Enter your 10 Digit Contact Number"
              value={this.state.residentialContact}
              onChange={(e) => this.setState({ residentialContact: e.target.value })}
            />
          </div>



          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your Country"
              value={this.state.country}
              onChange={(e) => this.setState({ country: e.target.value })}
            />
          </div>


          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city "
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
          </div>



          <div className="field">
            <label>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Enter your Street Address"
              value={this.state.streetAddress}
              onChange={(e) => this.setState({ streetAddress: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>

          

        </form>
      </div>
    );
  }
}

export default AddContact;
