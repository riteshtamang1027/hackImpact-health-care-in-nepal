"use client";

import { Facebook, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function FooterSection() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const services = [
    { name: "Symptom Checker", link: "#" },
    { name: "Find Doctors", link: "#" },
    { name: "Online Consultation", link: "#" },
    { name: "Disease Information", link: "#" },
    { name: "Cost Comparison", link: "#" },
  ];

  const support = [
    { name: "Help Center", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Service", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Emergency Numbers", link: "#" },
  ];

  const emergencyContacts = [
    {
      title: "Medical Emergency",
      number: "102",
      color: "text-red-400",
    },
    {
      title: "Police Emergency",
      number: "100",
      color: "text-blue-400",
    },
    {
      title: "24/7 Health Helpline",
      number: "+977-1-4567890",
      color: "text-green-400",
    },
  ];

  const ServiceItem = ({ item, index }) => (
    <li
      className="group cursor-pointer"
      onMouseEnter={() => setHoveredItem(`service-${index}`)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <a
        to={item.link}
        className="flex items-center  text-gray-300 hover:text-white transition-colors duration-200 py-1"
      >
        <span>{item.name}</span>
        <ArrowUpRight
          className={`h-4 w-4 ml-2 transition-all duration-300 ${
            hoveredItem === `service-${index}`
              ? "transform rotate-45 translate-x-1 translate-y-1 opacity-60"
              : "transform rotate-0 translate-x-0 translate-y-1 opacity-100"
          }`}
        />
      </a>
    </li>
  );

  const SupportItem = ({ item, index }) => (
    <li
      className="group cursor-pointer"
      onMouseEnter={() => setHoveredItem(`support-${index}`)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Link
        to={item.link}
        className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-1"
      >
        <span>{item.name}</span>
        <ArrowUpRight
          className={`h-4 w-4 ml-2 transition-all duration-300 ${
            hoveredItem === `support-${index}`
              ? "transform rotate-45 translate-x-1 translate-y-1 opacity-60"
              : "transform rotate-0 translate-x-0 translate-y-1 opacity-100"
          }`}
        />
      </Link>
    </li>
  );

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">HealthNepal</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting Nepal with world-class healthcare. Your health, our
              priority.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
                 {socialLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`bg-slate-600  p-3 rounded-full transition-colors duration-200 ${item.hover_color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5 text-white" />
              </Link>
            ))}

            </div>

           
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <ServiceItem key={index} item={service} index={index} />
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((supportItem, index) => (
                <SupportItem key={index} item={supportItem} index={index} />
              ))}
            </ul>
          </div>

          {/* Emergency Contacts Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Emergency Contacts</h4>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors duration-200"
                >
                  <div className="text-gray-300 text-sm mb-1">
                    {contact.title}
                  </div>
                  <div className={`text-2xl font-bold ${contact.color}`}>
                    {contact.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Health Links Nepal. All rights reserved. Made with{" "}
              <span className="text-red-500">Team Bug Eagles</span> for Nepal.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Available in:</span>
              <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                English
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                नेपाली
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-semibold mb-2">
                Stay Updated with Health News
              </h5>
              <p className="text-gray-400 text-sm">
                Get the latest health alerts and medical updates delivered to
                your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border border-slate-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 flex-1 md:w-64"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    icon: Facebook,
    link: "https://www.facebook.com",
    hover_color: "hover:bg-blue-600",
  },
  {
    icon: Twitter,
    link: "https://www.twitter.com",
    hover_color: "hover:bg-blue-400",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com",
    hover_color: "hover:bg-pink-600",
  },
];
