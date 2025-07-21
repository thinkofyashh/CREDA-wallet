import React from 'react';
import { CreditCard, Shield, Zap, Users, Star, CheckCircle, Globe, Smartphone, Lock, TrendingUp, DollarSign } from 'lucide-react';

export const DashBoard = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Online Payments",
      description: "Seamlessly accept payments through multiple online channels with advanced security."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Offline Solutions",
      description: "Process payments even without internet connectivity using our robust offline systems."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Your transactions are protected with enterprise-grade encryption and fraud detection."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Process payments in seconds with our optimized infrastructure and real-time processing."
    }
  ];

  const benefits = [
    "99.9% uptime guarantee",
    "24/7 customer support",
    "Multi-currency support",
    "Real-time analytics",
    "Easy integration",
    "Competitive rates"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "This payment solution transformed our business operations. The seamless integration and reliability are outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "E-commerce Manager",
      content: "Finally, a payment system that actually works as promised. Our conversion rates improved by 40% since switching.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      content: "The offline payment feature saved our business during internet outages. Absolutely recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage your payments and grow your business
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Accept Payments
          </h2>
          <p className="text-xl text-gray-600 mb-4">Online or Offline</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Flexible payment solutions that adapt to your business needs, whether you're online, offline, or somewhere in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're not just another payment processor. We're your growth partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-white/80">
              <Globe className="w-5 h-5" />
              <span className="text-lg">Serving businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Your Payment Dashboard</h3>
          <p className="text-xl text-gray-300 mb-6">Manage your business payments with confidence</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Account Status</div>
                <div className="text-green-400">Verified & Active</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Security Level</div>
                <div className="text-blue-400">Enterprise Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};