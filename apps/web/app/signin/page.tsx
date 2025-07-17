"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");

  const handleSubmit = async () => {
    const res = await signIn("credentials", {
      email,
      phone,
      password,
      redirect: false,
    });

    console.log(res);
    if (res?.ok) {
      router.push("/");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Sign in to your account
        </h2>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          placeholder="Enter your phone number"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Login with your credentials
        </button>
        <p className="text-xs text-center text-gray-400 pt-4 border-t border-gray-100">
          Made with ❤️ by <span className="font-semibold text-gray-600">Yash Rawat Technology</span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
