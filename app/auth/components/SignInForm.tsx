"use client";
import { useState } from "react";
import Link from "next/link";
import { FieldError, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";

import { TextInput, Checkbox } from "../../common/components";
import AuthButton from "./AuthButton";
// import { handleLogin } from "./store";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const users = [{ email: "mehmetasil96@gmail.com", password: "123456" }];

const SignInForm = () => {
  //   const dispatch = useDispatch();
  //   const { users } = useSelector((state) => state.auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  /*  const onSubmit = (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      dispatch(handleLogin(true));
      setTimeout(() => {
        // navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }; */

  const [checked, setChecked] = useState(false);
  //   handleSubmit(onSubmit)
  return (
    <form onSubmit={() => {}} className="space-y-4 ">
      <TextInput
        name="email"
        label="email"
        placeholder="email"
        defaultValue={users[0].email}
        type="email"
        register={register}
        error={errors.email as FieldError | undefined}
        className="h-[48px]"
      />
      <TextInput
        name="password"
        label="password"
        placeholder="password"
        type="password"
        defaultValue={users[0].password}
        register={register}
        error={errors.password as FieldError | undefined}
        className="h-[48px]"
      />
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          href="/auth/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link>
      </div>
      <AuthButton title="Sing In" />
    </form>
  );
};

export default SignInForm;
