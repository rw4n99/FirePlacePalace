"use client";

import { useReducer } from "react";
import styles from './ContactForm.module.css'

// Initial state for the form
const initialState = {
  name: "",
  postcode: "",
  streetName: "",
  city: "",
  phoneNumber: "",
  email: "",
  error: false,
  success: false,
};

// Reducer function to manage form state
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.value,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        success: action.value,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, postcode, streetName, city, phoneNumber, email } = state;

    // Check if all required fields are filled
    if (!name || !postcode || !streetName || !city || !phoneNumber || !email) {
      dispatch({ type: "SET_ERROR", value: true });
      dispatch({ type: "SET_SUCCESS", value: false });
      return;
    }

    console.log("Form submitted with:", { name, postcode, streetName, city, phoneNumber, email });
    dispatch({ type: "SET_ERROR", value: false });
    dispatch({ type: "SET_SUCCESS", value: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend className={styles.legend}>Personal information</legend>
      <input
        className={styles.text}
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className={styles.text}
        name="postcode"
        value={state.postcode}
        onChange={handleChange}
        placeholder="Postcode"
      />
      <input
        className={styles.text}
        name="streetName"
        value={state.streetName}
        onChange={handleChange}
        placeholder="Street Name"
      />
      <input
        className={styles.text}
        name="city"
        value={state.city}
        onChange={handleChange}
        placeholder="City"
      />

      <legend className={styles.legend}>Contact Information</legend>
      <input
        className={styles.text}
        name="phoneNumber"
        value={state.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        className={styles.text}
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button className={styles.button} type="submit">Request Design Consultation</button>
      <p className={styles.error}>{state.error && "Please complete all required fields"}</p>
      <p className={styles.success}>{state.success && "Success! Your form has been submitted"}</p>
    </form>
  );
}