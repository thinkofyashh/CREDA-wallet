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
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Financial Analyst",
      text: "Creda has revolutionized how I manage my financial data. The insights are incredible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      text: "The most intuitive platform I've used. Creda makes complex analysis simple.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Portfolio Manager",
      text: "Outstanding security and performance. I trust Creda with all my critical data.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-indigo-300/15 rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 p-12 flex flex-col justify-center text-white space-y-8">
          {/* Logo/Brand Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-wider">CREDA.</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

          {/* About Creda */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light">Intelligent Financial Platform</h2>
            <p className="text-blue-100 leading-relaxed text-lg font-light">
              Creda empowers financial professionals with advanced analytics, 
              real-time insights, and secure data management. Our platform combines 
              cutting-edge technology with intuitive design to streamline your 
              financial workflows.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-100">Advanced Portfolio Analytics</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-blue-100">Real-time Market Intelligence</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-blue-100">Enterprise-grade Security</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 mt-8">
            <h3 className="text-xl font-light">What our users say</h3>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-blue-100 italic text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-blue-200 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-stone-100">
        {/* Decorative background elements for mobile */}
        <div className="absolute inset-0 overflow-hidden lg:hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-50 rounded-full opacity-60 blur-3xl"></div>
        </div>
        
        <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 w-full max-w-md mx-8 space-y-8 border border-white/20">
          {/* Mobile brand header */}
          <div className="lg:hidden text-center mb-6">
            <h1 className="text-2xl font-light tracking-wider text-gray-800 mb-2">CREDA</h1>
            <p className="text-gray-500 text-sm">Intelligent Financial Platform</p>
          </div>

          {/* Elegant header with subtle accent */}
          <div className="text-center space-y-2">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <h2 className="text-3xl font-light text-gray-800 tracking-wide">
              Welcome 
            </h2>
            <p className="text-gray-500 text-sm font-light">Sign in to continue to your account</p>
          </div>

          {/* Form with enhanced styling */}
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Email address"
                value={email}
                className="w-full p-4 bg-gray-50/50 border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-gray-700 placeholder-gray-400"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={phone}
                placeholder="Phone number"
                className="w-full p-4 bg-gray-50/50 border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-gray-700 placeholder-gray-400"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="w-full p-4 bg-gray-50/50 border border-gray-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-gray-700 placeholder-gray-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </div>

          {/* Elegant divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>

          {/* Enhanced footer */}
          <div className="text-center">
            <p className="text-xs text-gray-400 font-light">
              Crafted with{" "}
              <span className="text-red-400 animate-pulse">♥</span>{" "}
              by{" "}
              <span className="font-medium text-gray-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Yash Rawat Technology
              </span>
            </p>
          </div>

          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default function SignInPage() {
  return <Signin />;
}
