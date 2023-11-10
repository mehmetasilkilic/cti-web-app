"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextInput } from "../../common/components";
import AuthButton from "./AuthButton";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const ForgotForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <TextInput
        name="email"
        label="email"
        type="email"
        placeholder="email"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <AuthButton title=" Send recovery email" />
    </form>
  );
};

export default ForgotForm;
