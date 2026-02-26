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
    // Add your form submission logic here
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
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-6xl font-bold text-black mb-8">
              Conectează-te
            </h2>

            <p className="text-xl text-black mb-12">
              Completează formularul și te contactăm pentru o discuție inițială.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  📞
                </div>
                <span className="text-2xl font-semibold text-black">
                  +40 729 818 463
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  ✉️
                </div>
                <span className="text-2xl font-semibold text-black">
                  office@middleout.com
                </span>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="mt-12 w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50"></div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-2xl">
            {/* Decorative header */}
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-normal text-black mb-3">
                  Nume
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-normal text-black mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none"
                  required
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-normal text-black mb-3">
                  Ce serviciu te interesează
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-dev">Dezvoltare web</option>
                  <option value="hosting">Hosting & infrastructură</option>
                  <option value="consulting">Consultanță IT</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-normal text-black mb-3">
                  Buget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-normal text-black mb-3">
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-black outline-none resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-[30px] font-medium text-xl hover:bg-gray-800 transition-colors"
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
