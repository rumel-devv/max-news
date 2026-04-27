"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log("data", data);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Login with..</h2>
      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={handleGoogleLogin}
          className="btn border-blue-500 text-blue-500"
        >
          <FaGoogle /> Login with google{" "}
        </button>
        <button onClick={handleGithubLogin} className="btn border-black ">
          <FaGithub /> Login with Github{" "}
        </button>
      </div>
      <h2 className="text-lg mt-3 font-semibold">Finds on</h2>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2 border-gray-400 border py-2 px-2">
          <FaFacebook /> Facebook
        </div>
        <div className="flex items-center gap-2 border-gray-400 border py-2 px-2">
          <FaTwitter /> Twiter
        </div>
        <div className="flex items-center gap-2 border-gray-400 border py-2 px-2">
          <FaLinkedin /> Linkden
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
