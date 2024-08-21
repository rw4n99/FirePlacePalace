"use client";

import { useState } from "react";
import React, { useReducer } from 'react';
import styles from './ContactForm.module.css'


export default function ContactForm() {
  const initialState = {
    data: {
        name: '',
      },
      errorStatus: false
  };
}


function reducer(state, action)
switch (action.type) {
  case "CHANGE_FORM_DATA":
    // Make a copy of current state
    let newState = {...state};
    // grab the data out of your action's payload
    const fieldName = action.payload.name;
    const newFieldValue = action.payload.value;
    // update the newState with the changed data
    newState.data[fieldName] = newFieldValue;
    // return new state :fire::rocket:
    return newState;
    // dont forget your breaks - important
    break;
  default:
    return state;

function handleFormFieldChange(event) {
	if (event.target.name === "name") {
    	dispatch({
          type: "CHANGE_FORM_DATA",
          payload: {
            name: event.target.name, // name of field
            value: event.target.value // new value
          }
        });
    }
}

function reducer(state, action) {
  ... reducer code
}
}

function ContactForm() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  ... your existing code
	
  return {
    	... your jsx
  }
}


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (!name || !postcode || !streetName || !city || !phoneNumber || !Email){
  //       setError(true);
  //       setSuccess(false)
  //       return;
  //   }
  //   if (name || postcode || streetName || city || phoneNumber || Email)
  //       console.log("Form submitted with:", { name, postcode, streetName, city, phoneNumber, Email });
  //       setError(false);
  //       setSuccess(true);
  //       return;
  // }
  return(
    <form onSubmit={handleSubmit}>
        <legend className={styles.legend}>Personal information</legend>
            <input className={styles.text} name='name' value={name} onChange={handleChange} placeholder="Name" />
           
    <button className={styles.button}type="submit">Request Design Consultation</button>
    <p className={styles.error}>{error && "Please complete all required fields"}</p>
    <p className={styles.success}>{success && "Success! Your form has been submitted"}</p>
  </form>
  )
}
