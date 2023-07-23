import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth, VIEWS } from 'src/components/AuthProvider';
import supabase from 'src/lib/supabase-browser';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ResetPassword = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function resetPassword(formData) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData?.email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_BASE_URL}`,
      });
      if (error) {
        setErrorMsg(error.message);
        setTimeout(() => setErrorMsg(null), 3000); // Clear error message after 3 seconds
      } else {
        setSuccessMsg('Wizardly Emailing');
        setTimeout(() => setSuccessMsg(null), 3000); // Clear success message after 3 seconds
      }
    } catch (error) {
      setErrorMsg('An error occurred');
      setTimeout(() => setErrorMsg(null), 3000); // Clear error message after 3 seconds
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="max-w-md w-full py-8 px-4 bg-base-100 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center underline decoration-primary">Memory Mender</h2>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={ResetPasswordSchema}
          onSubmit={resetPassword}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Field
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                  id="email"
                  name="email"
                  placeholder="username@site.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-600 mt-2 text-sm">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex justify-center">
                <button
                  className={`btn-primary btn`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wizardly Emailing...' : 'Sorcery of Reset'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-center text-red-600 mt-4">{errorMsg}</div>}
        {successMsg && <div className="text-center text-green-600 mt-4">{successMsg}</div>}
        <div className="flex justify-center">
          <button
            className="mt-4 link-hover label-text-alt link"
            type="button"
            onClick={() => setView(VIEWS.SIGN_IN)}
          >
            Remember your password? Sign In.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
