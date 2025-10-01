import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you'd send to an API here
      const mailtoLink = `mailto:ferdyfirmansyah3026@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ApocalCrk",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ferdyfrms",
    },
    {
      name: "Email",
      url: "mailto:ferdyfirmansyah3026@gmail.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ferdyfrms",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 contact-content">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Let's work together on your next project. I'm available for freelance opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info & Social */}
          <div className="lg:col-span-1 space-y-6 contact-content">
            {/* Quick Contact */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Email</div>
                  <a
                    href="mailto:ferdyfirmansyah3026@gmail.com"
                    className="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors break-all"
                  >
                    ferdyfirmansyah3026@gmail.com
                  </a>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-5">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Location</div>
                  <div className="text-sm text-gray-900 dark:text-white">Pekanbaru, Indonesia</div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-5">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Response Time</div>
                  <div className="text-sm text-gray-900 dark:text-white">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Connect
              </h3>
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm font-medium text-gray-900 dark:text-white group"
                  >
                    <span className="flex items-center justify-between">
                      {social.name}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 contact-content">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 space-y-6 h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                    errors.name
                      ? "border-gray-900 dark:border-white"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors text-gray-900 dark:text-white`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                    errors.email
                      ? "border-gray-900 dark:border-white"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors text-gray-900 dark:text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                    errors.message
                      ? "border-gray-900 dark:border-white"
                      : "border-gray-200 dark:border-gray-700"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors resize-none text-gray-900 dark:text-white`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-100 text-sm text-center">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
