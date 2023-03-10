import React from "react";
import { Field, Form, Formik } from "formik";
import { logo } from "../assets";
import { Input } from "../components/Input/input";
import "./login.scss";

export const Login = () => {
  const credentials = { username: "", password: "" };
  const submit = () => {};

  return (
    <section className="login">
      <img src={logo} alt="logo" />
      <h1 className="heading">Sign in to GitHub</h1>
      <Formik onSubmit={submit} enableReinitialize initialValues={credentials}>
        <Form>
          <section className="container">
            <label htmlFor="username">Username or email address</label>
            <Field
              name="username"
              label="username"
              id="username"
              type="text"
              component={Input}
            />
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              label="password"
              id="password"
              component={Input}
            />
            <br></br>
            <button type="submit">Sign in</button>
          </section>
        </Form>
      </Formik>
    </section>
  );
};
