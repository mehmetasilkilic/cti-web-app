"use client";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigate } from "react-router-dom";

import { TextInput, Checkbox } from "../../common/components";
import AuthButton from "./AuthButton";
// import { handleRegister } from "./store";

const schema = yup
  .object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
    // confirm password
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const SignUpForm = () => {
  //   const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  //   const navigate = useNavigate();

  const onSubmit = (data) => {
    // dispatch(handleRegister(data));
    setTimeout(() => {
      //   navigate("/");
    }, 1500);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
      <TextInput
        name="name"
        label="name"
        type="text"
        placeholder=" Enter your name"
        register={register}
        error={errors.name}
        className="h-[48px]"
      />{" "}
      <TextInput
        name="email"
        label="email"
        type="email"
        placeholder=" Enter your email"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <TextInput
        name="password"
        label="passwrod"
        type="password"
        placeholder=" Enter your password"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />
      <Checkbox
        label="You accept our Terms and Conditions and Privacy Policy"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <AuthButton title="Create an account" />
    </form>
  );
};

export default SignUpForm;
