"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
  LinkedinLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        "service_wvdep6h",
        "template_z4m1wcr",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "e0CWX0yAZh3RAET4x",
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-xl tracking-widest uppercase opacity-50">
          Contact
        </p>

        <h2 className="text-2xl md:text-3xl font-light">Let’s get in touch.</h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="grid gap-6 max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-white transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 text-xl tracking-wide opacity-70 hover:opacity-100 transition hover:text-green-500 disabled:opacity-40 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-green-500 mt-2">
                Message sent successfully. Thank you!
              </p>
            )}

            {error && (
              <p className="text-sm text-red-500 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* SOCIALS */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm opacity-60">Or find me on</p>

            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/galih-yekti-a725b22a4/"
                target="_blank"
                className="transition hover:text-[#0A66C2] hover:scale-110"
              >
                <LinkedinLogoIcon size={44} />
              </a>

              <a
                href="https://www.instagram.com/galilact/"
                target="_blank"
                className="transition hover:text-pink-500 hover:scale-110"
              >
                <InstagramLogoIcon size={44} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100009598893661"
                target="_blank"
                className="transition hover:text-[#1877F2] hover:scale-110"
              >
                <FacebookLogoIcon size={44} />
              </a>

              <a
                href="https://www.tiktok.com/@buggazi"
                target="_blank"
                className="transition hover:scale-110 hover:text-gray-800"
              >
                <TiktokLogoIcon size={44} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WATERMARK */}
      <p className="mt-24 text-center text-xs tracking-widest opacity-30">
        © {new Date().getFullYear()} galihyekti
      </p>
    </section>
  );
}
