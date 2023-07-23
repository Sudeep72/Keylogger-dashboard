import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Footer() {
  const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const possible = ['alert-warning', 'alert-error', 'alert-success'];
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email_reg.test(email)) {
      setShowToast(true);
      setToastMessage('Enter a valid email address!');
      setToastType('alert-warning');
    } else {
      const templateParams = {
        mailid: email,
      };

      emailjs
        .send(
          'service_w5j0dip',
          'template_otclodr',
          templateParams,
          'aoRgBGao7_WBFmpeQ'
        )
        .then((response) => {
          setShowToast(true);
          setToastMessage('Success');
          setToastType('alert-success');
        })
        .catch((error) => {
          setShowToast(true);
          setToastMessage('Err! Something went wrong');
          setToastType('alert-error');
        });
        setEmail('');
    }

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
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
      {showToast && possible.includes(toastType) && (
        <div className={`toast toast-end hidden:alert-warning hidden:alert-error hidden:alert-success`} onClick={() => setShowToast(false)}>
          <div className={`alert ${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
