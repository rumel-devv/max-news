"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit, formState:{ errors }} = useForm();

  const handleRegister = (data) => {
        const {name,email,photo,password} = data ;
  };

  return (
    <div className="w-9/12 mx-auto min-h-[80vh] flex items-center justify-center bg-gray-100  mt-4 rounded-md">
      <div className="bg-white p-12 mb-4 rounded-md ">
        <h2 className="text-xl font-semibold text-center">
         Register your account
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>

          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              {...register("name",{ required: "Name field is requeird" })}
            />
            {errors.name && (<p className="mt-2 text-red-500"> {errors.password.message} </p>)}
          </fieldset>

          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Photo url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo url"
              {...register("photo",{ required: "photo url field is requeird" })}
            />
            {errors.photo && (<p className="mt-2 text-red-500"> {errors.password.message} </p>)}
          </fieldset>

          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              {...register("email",{ required: "email field is requeird" })}
            />
            {errors.email && (<p className="mt-2 text-red-500"> {errors.password.message} </p>)}
          </fieldset>

          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              {...register("password",{ required: "password field is requeird" })}
            />
            {errors.password && (<p className="mt-2 text-red-500"> {errors.password.message} </p>)}
          </fieldset>
          <button className="btn w-full bg-black text-white mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
