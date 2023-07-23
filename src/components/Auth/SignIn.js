'use client';

import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import supabase from 'src/lib/supabase-browser';
import Footer from '../layout/Footer';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = () => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeout;

    if (errorMsg) {
      setShowError(true);
      timeout = setTimeout(() => {
        setErrorMsg(null);
        setShowError(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [errorMsg]);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="hero mt-20 bg-base-200 md:mt-24 sm:mt:24">
      <div className="hero-content flex">
        <div className="card w-[42vh] lg:w-96 xl:w-96 bg-base-100 shadow-2xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold p-5 underline decoration-primary">Login now!</h1>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={signIn}
          >
            {({ errors, touched }) => (
              <Form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    placeholder="username@site.com"
                    className="input-bordered input"
                  />
                  {errors.email && touched.email && (
                    <div className="mt-1 text-red-600">{errors.email}</div>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input-bordered input"
                  />
                  {errors.password && touched.password && (
                    <div className="mt-1 text-red-600">{errors.password}</div>
                  )}
                </div>
                <div className="form-control mt-2">
                  <button
                    type="button"
                    onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
                    className="link-hover label-text-alt link"
                  >
                    Forgot password?
                  </button>
                </div>
                {showError && (
                  <div className="mt-4 text-center text-red-600"> {errorMsg}</div>
                )}
                <div className="form-control mt-6">
                  <button className="btn-primary btn">AuthXpress</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

