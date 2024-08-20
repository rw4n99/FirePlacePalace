import React from "react";
import './bookings.css';
import { Aleo } from "next/font/google";
import ContactForm from './components/ContactForm/ContactForm';

const aleo = Aleo({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className={aleo.className}>
      <h1 className="Title">Design Bookings</h1>  
      <div className={aleo.className}>
        <ContactForm/>
      </div>
    </div>
  );
}
