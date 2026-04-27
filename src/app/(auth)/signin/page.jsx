"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSHowPass, setisShowPass] = useState(false);

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
  };

  return (
    <div className="w-9/12 mx-auto min-h-[80vh] flex items-center justify-center bg-gray-100  mt-4 rounded-md">
      <div className="bg-white p-12 mb-4 rounded-md ">
        <h2 className="text-xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "email field is requeird" })}
            />
            {errors.email && (
              <p className="mt-2 text-red-500"> {errors.password.message} </p>
            )}
          </fieldset>
          <fieldset className="fieldset  rounded-box relative">
            <label className="label text-md text-black">Password</label>
            <input
              type={isSHowPass ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "password field is requeird",
              })}
            />
            <span
              onClick={() => setisShowPass(!isSHowPass)}
              className="text-lg  cursor-pointer absolute right-2 top-10"
            >
            { isSHowPass ? <FaEye/> : <FaEyeSlash/> }
            </span>
            {errors.password && (
              <p className="mt-2 text-red-500"> {errors.password.message} </p>
            )}
          </fieldset>
          <button className="btn w-full bg-black text-white mt-2">Login</button>
        </form>
        <p className="text-xs text-center mt-4">
          Do not have an account ?{" "}
          <Link href="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
