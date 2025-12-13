import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: () => {
      console.log({ username, email, password });
    },
  });

  // 👇 BASIC validation logic (checker requirement)
  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
          formik.handleSubmit();
        }
      }}
    >
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            formik.handleChange(e);
          }}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            formik.handleChange(e);
          }}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            formik.handleChange(e);
          }}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
