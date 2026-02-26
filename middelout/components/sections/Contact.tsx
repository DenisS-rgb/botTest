"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#0066FF] to-[#B9FF66] py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="text-white">
            <h2 className="text-[clamp(48px,5vw,64px)] font-inter font-bold leading-[1.21] mb-6">
              Conectează-te
            </h2>

            <p className="text-[20px] font-inter font-normal leading-[1.21] mb-12 max-w-[705px]">
              Completează formularul și te contactăm pentru o discuție inițială.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black text-xl">
                  📞
                </div>
                <span className="font-pontano font-semibold text-[24px] leading-[1.28] text-black">
                  +40 729 818 463
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black text-xl">
                  ✉️
                </div>
                <span className="font-pontano font-semibold text-[24px] leading-[1.28] text-black">
                  office@middleout.com
                </span>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="mt-12 w-48 h-48 bg-gradient-to-br from-yellow-200/50 to-yellow-400/50 rounded-full opacity-60 hidden lg:block"></div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border-[3px] border-black rounded-[20px] shadow-2xl p-8">
            {/* Decorative header circles */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-poppins font-normal text-[14px] leading-[21px] text-black mb-3">
                  Nume
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[46px] px-4 bg-[#F7F7F7] rounded-[20px] border-none outline-none focus:ring-2 focus:ring-black font-poppins"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-poppins font-normal text-[14px] leading-[21px] text-black mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[46px] px-4 bg-[#F7F7F7] rounded-[20px] border-none outline-none focus:ring-2 focus:ring-black font-poppins"
                  required
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block font-poppins font-normal text-[14px] leading-[21px] text-black mb-3">
                  Ce serviciu te interesează
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-[46px] px-4 bg-[#F7F7F7] rounded-[20px] border-none outline-none focus:ring-2 focus:ring-black font-poppins text-[#B2B2B2] appearance-none"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="web-dev">Dezvoltare web</option>
                    <option value="hosting">Hosting & infrastructură</option>
                    <option value="consulting">Consultanță IT</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block font-poppins font-normal text-[14px] leading-[21px] text-black mb-3">
                  Buget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-[46px] px-4 bg-[#F7F7F7] rounded-[20px] border-none outline-none focus:ring-2 focus:ring-black font-poppins"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-poppins font-normal text-[14px] leading-[21px] text-black mb-3">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full h-[165px] px-4 py-3 bg-[#F7F7F7] rounded-[20px] border-none outline-none focus:ring-2 focus:ring-black resize-none font-poppins"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[56px] bg-black text-white rounded-[30px] font-poppins font-medium text-[20px] leading-[30px] hover:bg-gray-800 transition-colors"
              >
                Trimite solicitarea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
