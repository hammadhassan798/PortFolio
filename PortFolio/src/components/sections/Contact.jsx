import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.message);
      }

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 bg-[#18181B] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Contact"
          title="Let's Build Something Amazing Together"
          description="I'm available for freelance work, internships and full-time opportunities."
          center
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <FaEnvelope className="text-2xl text-[#C8A165]" />
              <span>hammadzulfiqar648@gmail.com</span>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-2xl text-[#C8A165]" />
              <span>03262502752</span>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-2xl text-[#C8A165]" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#262626]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#262626]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#262626]"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#262626]"
            />

            <button
              type="submit"
              disabled={loading}
              className="
    w-full
    py-4
    rounded-xl
    bg-[#C8A165]
    text-black
    font-semibold
    hover:bg-[#b89252]
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
  "
            >
              {loading ? (
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
