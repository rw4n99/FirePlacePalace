"use client";

import { useState } from "react";
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const initialState = {
    data: {
        name: '',
      },
      errorStatus: false
  };
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
