"use client";
import Link from "next/link";

const ProxyPage = () => {
  return (
    <div className="min-h-screen mt-4 flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black px-4 rounded-2xl">
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <div className="text-6xl animate-pulse">🔐</div>
        <h1 className="text-2xl font-semibold text-white">Access Denied</h1>
        <p className="text-gray-300 text-md leading-relaxed">
          You need to be signed in to view this page. Please login to continue
          your journey 🚀
        </p>

        <Link href="/signin">
          <button className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:scale-105 transition-all duration-200 shadow-lg">
            Sign In
          </button>
        </Link>

        <div className="flex items-center gap-2 text-gray-500 text-xs mt-5">
          <div className="flex-1 h-px bg-gray-700"></div>
          OR
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <Link href="/">
          <p className="text-sm text-gray-400 hover:text-white transition cursor-pointer">
            ← Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProxyPage;
