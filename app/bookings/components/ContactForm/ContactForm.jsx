"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

//   function handleChange(event) {
//     if (event.target.name === "name") {
//       setName(event.target.value);
//     }
//   }

function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "postcode":
        setPostcode(value);
        break;
      case "streetName":
        setStreetName(value);
        break;
      case "city":
        setCity(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "Email":
        setEmail(value);
        break;
      default:
        break;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted with:", { name, postcode, streetName, city, phoneNumber, Email });
  }
  return(
    <form onSubmit={handleSubmit}>
    <input name="name" value={name} onChange={handleChange} placeholder="Name" />
    <input name="postcode" value={postcode} onChange={handleChange} placeholder="Postcode" />
    <input name="streetName" value={streetName} onChange={handleChange} placeholder="Street Name" />
    <input name="city" value={city} onChange={handleChange} placeholder="City" />
    <input name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />
    <input name="Email" value={Email} onChange={handleChange} placeholder="Email" />
    <button type="submit">Submit</button>
  </form>

//   <form>
//     <fieldset>
//       <legend>Personal information</legend>
//       <div className="name">
//         <label for="name">Full Name: </label>
//         <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"
//         />
//       </div>
//       <div className="postcode">
//         <label for="postcode">Postcode: </label>
//         <input type="text" id="postcode" name="postcode" />
//       </div>
//       <div className="streetName">
//         <label for="streetName">House number and Street name: </label>
//         <input type="text" id="streetName" name="streetName" />
//       </div>
//       <div className="city">
//         <label for="city">City: </label>
//         <input type="text" id="city" name="city" />
//       </div>
//     </fieldset>
//     <fieldset>
//       <legend>Contact Information</legend>
//       <div className="phoneNumber">
//         <label for="phoneNumber"> Phone Number:</label>
//         <input type="text id=number" />
//       </div>
//       <div className="emailAddress">
//         <label for="Email">Email:</label>
//         <input type="text" />
//       </div>
//     </fieldset>
//     <button type="submit" className="submit-button">
//       Request Design Consultation
//     </button>
//   </form>
  )
}
