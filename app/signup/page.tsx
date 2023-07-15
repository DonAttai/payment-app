"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterForm = {
  Firstname: string;
  Lastname: string;
  Username: string;
  Password: string;
};
const schema = yup.object().shape({
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Username: yup.string().required(),
  Password: yup.string().min(4).max(32).required(),
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
    <div className=" flex flex-col gap-3 items-center justify-center mt-3">
      <h3 className="text-2xl font-bold">Sign Up</h3>
      <form
        className="mx-auto w-5/6 md:w-1/4 p-5 border-solid border-1 text-slate-500 bg-white rounded-md shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <label htmlFor="" className="font-bold text-sm">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("Firstname")}
            placeholder="Firstname"
          />
          <p className="text-red-500 text-xs font-normal">
            {errors.Firstname?.message?.toString()}
          </p>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="font-bold text-sm">
            Last Name
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("Lastname")}
            placeholder="Lastname"
          />
          <p className="text-red-500 text-xs font-normal">
            {errors.Lastname?.message?.toString()}
          </p>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="font-bold text-sm">
            Username
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            {...register("Username")}
            autoComplete="off"
          />
          <p className="text-red-500 text-xs font-normal">
            {errors.Username?.message?.toString()}
          </p>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="font-bold text-sm">
            Password
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            {...register("Password")}
            autoComplete="new-password"
          />
          <p className="text-red-500 text-xs font-normal">
            {errors.Password?.message?.toString()}
          </p>
        </div>
        <div>
          <button
            className="bg-blue-400 w-full py-2 rounded-md text-white font-bold"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
