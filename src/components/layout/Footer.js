import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_w5j0dip',
      'template_otclodr',
      { email },
      'aoRgBGao7_WBFmpeQ'
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });

    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-base-200 flex flex-col items-center justify-center py-3 text-white">
      <h4 className="mb-2 font-poppins">Need to Register or any Queries?</h4>
      <div className="relative">
        <form className="form-control" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username@site.com"
            name="mail"
            id="mail"
            autoComplete="on"
            className="input-primary input w-auto pr-16"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            type="submit"
            className="btn-primary btn absolute right-0 rounded-l-none"
          >
            Airwave
          </button>
        </form>
      </div>
    </div>
  );
}
