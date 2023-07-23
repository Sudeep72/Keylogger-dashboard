import { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';

import supabase from 'src/lib/supabase-browser';

const UpdatePasswordSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
});

const UpdatePassword = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  async function updatePassword(formData) {
    const { data, error } = await supabase.auth.updateUser({
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  return (
    <div className="p-4 max-w-md mx-auto bg-base-100 shadow-md rounded-lg mt-52">
      <h2 className="text-3xl font-bold text-center mb-4 underline decoration-primary">Update Password</h2>
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={UpdatePasswordSchema}
        onSubmit={updatePassword}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              New Password
            </label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your new password"
              style={{
                background: 'transparent',
                borderWidth: '1px',
                borderColor: 'rgba(209, 213, 219, 1)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
            {errors.password && touched.password ? (
              <div className="text-red-600 text-sm">{errors.password}</div>
            ) : null}
            <button className="btn btn-primary" type="submit">
              Revive
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600 text-sm mt-2">{errorMsg}</div>}
    </div>
  );
};

export default UpdatePassword;
