import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikForm;
