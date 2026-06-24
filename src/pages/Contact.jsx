import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log(data);

      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-32 max-w-4xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800"
            placeholder="Name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800"
            placeholder="Email"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800"
            placeholder="Subject"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 rounded bg-slate-800"
            placeholder="Message"
          />

          <button type="submit" className="bg-cyan-500 px-8 py-3 rounded font-semibold">
            Send Message
          </button>

        </form>
      </motion.div>
    </section>
  );
}

export default Contact;