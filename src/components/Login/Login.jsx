import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

//Import from images
import GoogleLogo from "../../img/google-logo.png";

// Validate Login
const LoginSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string()
  .required('Please Enter your password')
  .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
});

const LoginComponents = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "Test - Login page";
  }, []);

  return (
    <div>
      <div className="content">
        <h1>Test DOT Indonesia - Quiz</h1>
        <div className="login-content">
          <h2>Login</h2>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Link to={"/quiz"}>
                  <button type="submit" className="btn-google">
                    <img src={GoogleLogo} alt="Google-logo" width="20" />
                    <span className="name-btn">Sign in with Google</span>
                  </button>
                </Link>
                <div className="other-sign-in">
                  <span>—— or sign in with ——</span>
                </div>
                <div className="form-login">
                  <label htmlFor="username">Username</label>
                  <br />
                  <Field name="username" />
                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}
                </div>
                <div className="form-login">
                  <label htmlFor="password">Password</label>
                  <br />
                  <Field name="password" type="password" />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <div className="forgot-pass">
                  <span>Forgot Password?</span>
                </div>
                <Link to={"/quiz"}>
                  <button type="submit" className="btn-login">
                    Login
                  </button>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
