import { useEffect, useRef } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  const formRef = useRef(null);

  const [state, handleSubmit] = useForm("xjgqlgqa");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("✅ Message sent successfully!");

      formRef.current.reset();
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      toast.error("Unable to send message.");
    }
  }, [state.errors]);

  return (
    <section
      id="contact"
      className="py-28 bg-[#18181B] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Contact"
          title="Let's Build Something Amazing Together"
          description="I'm available for freelance work, internships and full-time opportunities."
          center
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-2xl text-[#C8A165]" />
              <span className="text-gray-300">
                hammadzulfiqar648@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-2xl text-[#C8A165]" />
              <span className="text-gray-300">
                03262502752
              </span>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-2xl text-[#C8A165]" />
              <span className="text-gray-300">
                Lahore, Pakistan
              </span>
            </div>

          </div>

          {/* Contact Form */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#262626]
                border
                border-transparent
                focus:border-[#C8A165]
                focus:outline-none
                transition
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#262626]
                border
                border-transparent
                focus:border-[#C8A165]
                focus:outline-none
                transition
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#262626]
                border
                border-transparent
                focus:border-[#C8A165]
                focus:outline-none
                transition
              "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                p-4
                rounded-xl
                bg-[#262626]
                border
                border-transparent
                focus:border-[#C8A165]
                focus:outline-none
                resize-none
                transition
              "
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="
                w-full
                py-4
                rounded-xl
                bg-[#C8A165]
                text-black
                font-semibold
                hover:bg-[#b89252]
                transition-all
                duration-300
                hover:shadow-lg
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
            >
              {state.submitting ? (
                <div className="flex justify-center items-center gap-3">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}