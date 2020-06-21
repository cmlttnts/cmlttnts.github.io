import './Contact.scss';

import React from 'react';
import useFetch from 'AjaxLib/useFetch';

const INIT_OPTIONS = {
  method: 'post',
  body: '',
  headers: {
    Accept: 'application/json',
  },
};

const URL = 'https://formspree.io/mvowqwww';


const Contact = (): JSX.Element => {

  const [state, setUrl, setActive, setOptions] = useFetch(URL, {}, false, INIT_OPTIONS);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      if (!state.isActive) { setActive(true); }
      setOptions({
        ...INIT_OPTIONS,
        body: formData,
      });
    }

  };

  let ButtonOrReplacement;

  if (state.isActive && state.isLoading) {
    ButtonOrReplacement = <div>LOADING</div>;
  } else if (state.isActive && state.isError) {
    ButtonOrReplacement = <div>ERROR HAPPENED</div>;
  } else {
    ButtonOrReplacement = <button className="ctaHomePri Submit" type="submit">Send</button>;
  }

  return (
    <div className="Contact MajorSection" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name : </label>
        <input type="text" name="fullname" id="fullname" maxLength={20} minLength={3} required />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">Your Message : </label>
        <textarea name="message" id="message" cols={30} rows={10} maxLength={350} minLength={5} required></textarea>
        {ButtonOrReplacement}
      </form>
    </div>
  );
};

export default Contact;
