import React, { useState } from 'react';

export default function Footer() {
  const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.mail.value;

    if (!email_reg.test(email)) {
      setShowToast(true);
      setToastMessage('Enter a valid email address!');
      setToastType('warning');

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      const data = {
        mail: email,
      };

      const JSONdata = JSON.stringify(data);

      const endpoint = "/api/send-query";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      fetch(endpoint, options)
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "ok") {
            setShowToast(true);
            setToastMessage('Success');
            setToastType('success');

            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          } else {
            setShowToast(true);
            setToastMessage('Err! Something went wrong');
            setToastType('error');

            setTimeout(() => {
              setShowToast(false);
            }, 3000);
          }
        });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto mt-8 flex flex-col items-center justify-center p-4 text-white">
      <h4 className="mb-2 font-poppins">Need to Register or any Queries?</h4>
      <div className="relative">
        <form className="form-control" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username@site.com"
            name="mail"
            id="mail"
            autoComplete="on"
            className="input-primary input w-auto pr-16"
          />
          <button
            type="submit"
            className="btn-primary btn absolute right-0 rounded-l-none"
          >
            Airwave
          </button>
        </form>
      </div>
      {showToast && (
        <div className={`toast-end toast`}>
          <div className={`alert alert-${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
