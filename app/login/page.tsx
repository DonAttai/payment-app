"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type LoginForm = {
  Username: string;
  Password: string;
};

const schema = yup.object().shape({
  Username: yup.string().required(),
  Password: yup.string().min(4).max(32).required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });
  const onSubmit = (data: LoginForm) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" flex flex-col gap-3 items-center justify-center mt-3">
      <h3 className="font-bold text-2xl">Log in</h3>
      <form
        className="mx-auto w-5/6 md:w-1/4 p-5 bg-white text-slate-500 border-solid border-1 rounded-md shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-2">
          <label htmlFor="" className="font-bold text-sm">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            {...register("Username")}
          />
          <p className="text-red-500 text-xs font-normal">
            {errors.Username?.message?.toString()}
          </p>
        </div>
        <div className="mb-4">
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
