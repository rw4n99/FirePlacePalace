"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

  function handleChange(event) {
    if (event.target.name === "name") {
      setName(event.target.value);
    }
  }
  console.log(name);

  return;

  <form>
    <fieldset>
      <legend>Personal information</legend>
      <div className="name">
        <label for="name">Full Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="8"
          size="10"
        />
      </div>
      <div className="postcode">
        <label for="postcode">Postcode: </label>
        <input type="text" id="postcode" name="postcode" />
      </div>
      <div className="streetName">
        <label for="streetName">House number and Street name: </label>
        <input type="text" id="streetName" name="streetName" />
      </div>
      <div className="city">
        <label for="city">City: </label>
        <input type="text" id="city" name="city" />
      </div>
    </fieldset>
    <fieldset>
      <legend>Contact Information</legend>
      <div className="phoneNumber">
        <label for="phoneNumber"> Phone Number:</label>
        <input type="text id=number" />
      </div>
      <div className="emailAddress">
        <label for="Email">Email:</label>
        <input type="text" />
      </div>
    </fieldset>
    <button type="submit" className="submit-button">
      Request Design Consultation
    </button>
  </form>;
}
