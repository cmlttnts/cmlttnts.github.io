import './Contact.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
// Define props type

/*
type PropType= {
  prop1: string;
  prop2: string;
};
*/

// Destructure the props
const Contact = (/* { prop1, prop2 }: PropType */): JSX.Element => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

  };

  return (
    <div className="Contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name : </label>
        <input type="text" name="fullname" id="fullname" maxLength={20} minLength={3} required />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">Your Message : </label>
        <textarea name="message" id="message" cols={30} rows={10} maxLength={350} minLength={5} required></textarea>
        <button className="ctaHomePri Submit" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
