"use client";

import { contactForm } from "@/constants";
import React, { useState } from "react";
import Header from "../header";
import { Button } from "../ui/button";
import Image from "next/image";

const ContactForm = () => {
  const contacts = contactForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const getContactIcon = (name: string) => {
    if (name.toLowerCase().includes("email") || name.toLowerCase().includes("administrator")) {
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    }
    return (
      <Image
        src="/icons/phone.svg"
        alt="Phone"
        width={20}
        height={20}
        className="object-contain"
      />
    );
  };

  const isEmail = (text: string) => {
    return text.includes("@");
  };

  const isPhone = (text: string) => {
    return /[\d\s\+\-\(\)]/.test(text) && text.length > 5;
  };

  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8 xl:px-20 text-[#111] bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Header content="Get in Touch" />
          <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form Section */}
          <section className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#111] mb-2">
                Leave us a message
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base">
                Fill out the form below and we'll get back to you promptly.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-6"
            >
              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#111]"
                  >
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full outline-none border border-neutral-200 h-12 px-4 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#111]"
                  >
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none border border-neutral-200 h-12 px-4 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#111]"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full outline-none border border-neutral-200 px-4 py-3 resize-none rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <div className="w-full flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </section>

          {/* Contact Information Section */}
          <section className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#111] mb-2">
                Get to us now
              </h2>
              <p className="text-neutral-600 text-sm lg:text-base">
                Reach out to our team members directly through the channels below.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="group p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <div className="text-primary">
                        {getContactIcon(contact.name)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl lg:text-2xl text-primary font-bold mb-3">
                        {contact.name}
                      </h3>
                      <div className="flex flex-col gap-2.5">
                        {contact.fields?.map((field, i) => {
                          const isEmailField = isEmail(field);
                          const isPhoneField = isPhone(field);
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2.5 text-neutral-600"
                            >
                              {isEmailField && (
                                <svg
                                  className="w-4 h-4 text-primary flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              )}
                              {isPhoneField && (
                                <svg
                                  className="w-4 h-4 text-primary flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              )}
                              {isEmailField ? (
                                <a
                                  href={`mailto:${field}`}
                                  className="hover:text-primary transition-colors duration-200 break-all"
                                >
                                  {field}
                                </a>
                              ) : isPhoneField ? (
                                <a
                                  href={`tel:${field.replace(/\s/g, "")}`}
                                  className="hover:text-primary transition-colors duration-200"
                                >
                                  {field}
                                </a>
                              ) : (
                                <span>{field}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
