"use client";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session,isPending} = authClient.useSession();
  const user = session?.user;

  if(isPending){
   return <div className='flex h-[80vh] items-center justify-center'>

            <span className="loading loading-bars loading-2xl text-red-600"></span>
        </div>
  }
 
  return (
    <div className="max-w-9/12 mx-auto flex justify-between items-center mt-4">
      <div></div>
      <ul className="flex gap-4">
        <li>
          {" "}
          <Navlink href="/">Home</Navlink>
        </li>
        <li>
          {" "}
          <Navlink href="/about">About</Navlink>
        </li>
        <li>
          {" "}
          <Navlink href="/career">Career</Navlink>
        </li>
      </ul>

       { user ? (
        <div className="flex gap-2 items-center">
          <h2>
            Hello <span> {user?.name} </span>{" "}
          </h2>
          <Image
            src={user?.image || userAvatar}
            width={50}
            height={50}
            alt="user png"
          />
          <button onClick={ async()=> await authClient.signOut() } className="btn bg-black text-white rounded-md">Logout</button>
        </div>
      ) : (
        <Link href="/signin">
          <button className="btn bg-black text-white rounded-md">
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
