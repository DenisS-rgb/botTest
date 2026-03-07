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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <section
          id="contact"
          className="relative overflow-hidden bg-[#0066FF]"
      >
        {/* BLUE TOP + DIAGONAL WHITE */}
        <div className="relative min-h-[860px] ">
          <div
              className="absolute inset-x-0 bottom-0 h-[62%] bg-[#FFF]"
              style={{
                clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 100%)",
              }}
          />

          {/* LEFT DECOR */}
          <img
              src="/icons/star-green.svg"
              alt=""
              className="pointer-events-none absolute left-[95px] top-[58px] z-10 w-[88px]"
          />

          <img
              src="/icons/sun.svg"
              alt=""
              className="pointer-events-none absolute z-0"
          />

          <img
              src="/icons/star-black.svg"
              alt=""
              className="pointer-events-none absolute left-[15px] top-[132px] z-10 w-[124px]"
          />

          {/* CONTENT */}
          <div className="relative z-20 mx-[35px] px-10 pt-[34px] pb-[20px]">
            {/* HEADER */}
            <div className="mb-[54px] text-center text-white">
              <h2 className="text-[52px] font-bold leading-none md:text-[60px]">
                Conectează-te
              </h2>

              <p className="mt-3 text-[14px] text-white/90 md:text-[15px]">
                Completează formularul și te contactăm pentru o discuție inițială.
              </p>
            </div>

            <div className="grid items-start gap-[80px] lg:grid-cols-[620px_1fr]">
              {/* FORM WINDOW */}
              <div className="relative mt-[60px]">
                <div className="overflow-hidden rounded-[14px] w-[531px] min-h-[775px] border-[2.5px] border-black bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] flex flex-col">

                  {/* window header */}
                  <div className="flex h-[55px] items-center justify-end border-b-[2px] border-black bg-[#CEC7F4] px-4">
                    <div className="flex items-center gap-[28px] text-black">
                      <span className="text-[32px] leading-none">─</span>
                      <span className="text-[32px] leading-none">□</span>
                      <span className="text-[32px] leading-none">×</span>
                    </div>
                  </div>

                  {/* form body */}
                  <div className="flex-1 px-6 py-6">
                    <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between">

                      <div className="space-y-5">

                        {/* Nume */}
                        <div>
                          <label className="mb-1 block text-[13px] font-medium text-black">
                            Nume
                          </label>

                          <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="h-[44px] w-full rounded-[12px] bg-[#F1F1F1] px-4 text-[14px] outline-none"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="mb-1 block text-[13px] font-medium text-black">
                            Email
                          </label>

                          <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="h-[44px] w-full rounded-[12px] bg-[#F1F1F1] px-4 text-[14px] outline-none"
                          />
                        </div>

                        {/* Service */}
                        <div>
                          <label className="mb-1 block text-[13px] font-medium text-black">
                            Ce serviciu te interesează
                          </label>

                          <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="h-[44px] w-full rounded-[12px] bg-[#F1F1F1] px-4 text-[14px] text-[#9A9A9A] outline-none"
                          >
                            <option value="">Select project type</option>
                            <option value="web">Web development</option>
                            <option value="hosting">Hosting</option>
                            <option value="consulting">Consulting</option>
                          </select>
                        </div>

                        {/* Budget */}
                        <div>
                          <label className="mb-1 block text-[13px] font-medium text-black">
                            Buget
                          </label>

                          <input
                              type="text"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="h-[44px] w-full rounded-[12px] bg-[#F1F1F1] px-4 text-[14px] outline-none"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <label className="mb-1 block text-[13px] font-medium text-black">
                            Mesaj
                          </label>

                          <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="min-h-[170px] w-full resize-none rounded-[12px] bg-[#F1F1F1] px-4 py-3 text-[14px] outline-none"
                          />
                        </div>

                      </div>

                      {/* button */}
                      <button
                          type="submit"
                          className="mt-6 h-[52px] w-full rounded-[30px] bg-black text-[16px] font-medium text-white transition hover:bg-gray-800 active:scale-[0.98]"
                      >
                        Trimite solicitarea
                      </button>

                    </form>
                  </div>

               </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="relative flex min-h-[420px] flex-col justify-center pt-[70px] lg:pt-[130px]">
                <div className="ml-0 max-w-[340px] lg:ml-[150px] mt-[250px]">
                  <div className="mb-6 flex items-center gap-4 text-black">
                    <div className="flex h-[32px] w-[32px] items-center justify-center">
                      <img
                          src="/icons/phone.svg"
                          alt=""
                          className=""
                      />
                    </div>
                    <span className="text-[25px] font-medium">+40 729 818 463</span>
                  </div>

                  <div className="flex items-center gap-4 text-black">
                    <div className="flex h-[32px] w-[32px] items-center justify-center">
                      <img
                          src="/icons/mail.svg"
                          alt=""
                          className="]"
                      />
                    </div>
                    <span className="text-[25px] font-medium">office@middleout.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}