"use client";

import { useState } from "react";
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState(false)

//   function handleChange(event) {
//     if (event.target.name === "name") {
//       setName(event.target.value);
//     }
//   }

function handleChange(event) {
    const { name, value } = event.target;
console.log(event.target)
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
    if (!name || !postcode || !streetName || !city || !phoneNumber || !Email){
        setError(true);
        return;
    }
    if (error){
        setError(false)
        return;
    }
    if (name || postcode || streetName || city || phoneNumber || Email)
        console.log("Form submitted with:", { name, postcode, streetName, city, phoneNumber, Email });
        return;
  }
  return(
    <form onSubmit={handleSubmit}>
        <legend className={styles.legend}>Personal information</legend>
            <input name='name' value={name} onChange={handleChange} placeholder="Name" />
            <input name="postcode" value={postcode} onChange={handleChange} placeholder="Postcode" />
            <input name="streetName" value={streetName} onChange={handleChange} placeholder="Street Name" />
            <input name="city" value={city} onChange={handleChange} placeholder="City" />
        <legend className={styles.legend}>Contact Information</legend>
            <input name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />
            <input name="Email" value={Email} onChange={handleChange} placeholder="Email" />
    <button type="submit">Submit</button>
    <p>{error && "Please complete all required fields"}</p>
  </form>
  )
}
