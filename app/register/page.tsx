"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm } from "../../types";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().min(4).max(32).required("password is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({ resolver: yupResolver(schema) });
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" flex items-center justify-center h-screen ">
      <form
        className="mx-auto w-5/6 md:w-1/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("firstname")}
            placeholder="firstname"
          />
          <p className="text-red-400">
            {errors.firstname?.message?.toString()}
          </p>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("lastname")}
            placeholder="lastname"
          />
          <p className="text-red-400">{errors.lastname?.message?.toString()}</p>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="username"
            {...register("username")}
            autoComplete="off"
          />
          <p className="text-red-400">{errors.username?.message?.toString()}</p>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            {...register("password")}
            autoComplete="new-password"
          />
          <p className="text-red-400">{errors.password?.message?.toString()}</p>
        </div>
        <div>
          <button className="bg-blue-300 w-full py-2 rounded-md" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
