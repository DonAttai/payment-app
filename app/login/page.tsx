"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginForm } from "../../types";

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
    <div className=" flex items-center justify-center h-screen">
      <form
        className="mx-auto w-5/6 md:w-1/4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            {...register("Username")}
          />
          <p className="text-red-400">{errors.Username?.message?.toString()}</p>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            {...register("Password")}
            autoComplete="new-password"
          />

          <p className="text-red-400">{errors.Password?.message?.toString()}</p>
        </div>
        <div>
          <button className="bg-blue-300 w-full py-2 rounded-md" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
