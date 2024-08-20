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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
        setSuccess(false)
        return;
    }
    if (name || postcode || streetName || city || phoneNumber || Email)
        console.log("Form submitted with:", { name, postcode, streetName, city, phoneNumber, Email });
        setError(false);
        setSuccess(true);
        return;
  }
  return(
    <form onSubmit={handleSubmit}>
        <legend className={styles.legend}>Personal information</legend>
            <input className={styles.text} name='name' value={name} onChange={handleChange} placeholder="Name" />
            <input className={styles.text} name="postcode" value={postcode} onChange={handleChange} placeholder="Postcode" />
            <input className={styles.text} name="streetName" value={streetName} onChange={handleChange} placeholder="Street Name" />
            <input className={styles.text} name="city" value={city} onChange={handleChange} placeholder="City" />
        <legend className={styles.legend}>Contact Information</legend>
            <input className={styles.text} name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />
            <input className={styles.text} name="Email" value={Email} onChange={handleChange} placeholder="Email" />
    <button className={styles.button}type="submit">Request Design Consultation</button>
    <p className={styles.error}>{error && "Please complete all required fields"}</p>
    <p className={styles.success}>{success && "Success! Your form has been submitted"}</p>
  </form>
  )
}
