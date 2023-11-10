import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextInput } from "@/app/common/components";

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

      <button className="btn btn-dark block w-full text-center">
        Send recovery email
      </button>
    </form>
  );
};

export default ForgotForm;
