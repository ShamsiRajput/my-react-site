import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FiPhoneCall, FiMail, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <p className="text-[#050505] font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </p>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Let’s Create
              <br />
              <span className="text-[#F59E0B]">
                Something Amazing
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              We build modern websites, apps, and digital experiences
              that help brands grow faster and look premium online.
            </p>

            {/* Contact Cards */}
            <div className="mt-12 space-y-5">
              
              <a
                href="https://wa.me/923114909975"
                className="group flex items-center justify-between bg-white border border-gray-100 hover:border-[#F59E0B]/40 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-2xl">
                    <FiPhoneCall />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      WhatsApp
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      0311 4909975
                    </h3>
                  </div>
                </div>

                <FiArrowUpRight className="text-2xl text-gray-400 group-hover:text-[#F59E0B] transition-all" />
              </a>

              <a
                href="mailto:coffeecodehub@gmail.com"
                className="group flex items-center justify-between bg-white border border-gray-100 hover:border-[#F59E0B]/40 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] text-2xl">
                    <FiMail />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email Address
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      coffeecodehub@gmail.com
                    </h3>
                  </div>
                </div>

                <FiArrowUpRight className="text-2xl text-gray-400 group-hover:text-[#F59E0B] transition-all" />
              </a>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-5">
                Follow Us
              </p>

              <div className="flex gap-4">
                {[
                  FaFacebookF,
                  FaInstagram,
                  FaLinkedinIn,
                  FaXTwitter,
                  FaGithub,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="h-14 w-14 rounded-2xl bg-white border border-gray-200 hover:bg-[#F59E0B] hover:text-white hover:border-[#F59E0B] flex items-center justify-center text-xl text-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

      <form className="space-y-5">

  {/* Name */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Full Name
    </label>

    <input
      type="text"
      placeholder="Enter your name"
      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all focus:border-[#F59E0B] focus:bg-white"
    />
  </div>

  {/* Email */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Email Address
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all focus:border-[#F59E0B] focus:bg-white"
    />
  </div>

  {/* Services Checkboxes */}
  <div>
    <label className="text-sm font-medium text-gray-700 block mb-3">
      Select Services
    </label>

    <div className="grid grid-cols-2 gap-3">

      {[
        "WordPress Website",
        "React Website",
        "Mobile App",
        "UI/UX Design",
        "Logo Design",
        "Video Editing",
        "Social Media Marketing",
        "Branding & Strategy",
      ].map((service, index) => (
        <label
          key={index}
          className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 cursor-pointer hover:border-[#F59E0B] hover:bg-amber-50 transition-all"
        >
          <input
            type="checkbox"
            className="w-4 h-4 accent-[#F59E0B]"
          />

          <span className="text-sm text-gray-700 font-medium leading-tight">
            {service}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Project Details
    </label>

    <textarea
      rows="4"
      placeholder="Tell us about your project..."
      className="mt-2 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition-all resize-none focus:border-[#F59E0B] focus:bg-white"
    ></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="group w-full rounded-2xl bg-[#F59E0B] py-3.5 text-base font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 hover:shadow-xl"
  >
    <span className="flex items-center justify-center gap-2">
      Send Message
      <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </span>
  </button>

</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;