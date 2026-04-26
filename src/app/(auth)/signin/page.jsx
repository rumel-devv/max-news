'use client'
import Link from "next/link";
import React from "react";

const SigninPage = () => {

    const handleLogin = (e) => {
       e.preventDefault()
       const email = e.target.email.value
       const password = e.target.password.value
       console.log(email,password);
    }

  return (
    <div className="w-9/12 mx-auto min-h-[80vh] flex items-center justify-center bg-gray-100  mt-4 rounded-md">
      <div className="bg-white p-12 mb-4 rounded-md ">
        <h2 className="text-xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleLogin} >
          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label text-md text-black">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
          </fieldset>
          <button className="btn w-full bg-black text-white mt-2">Login</button>
        </form>
        <p className="text-xs text-center mt-4">
            Don't  have an account ? <Link href='/register' className="text-red-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
