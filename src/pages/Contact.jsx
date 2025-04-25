import { HiOutlineMail } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Items from "../components/Items";
import { socialLinks } from "../utils/Constants";

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const email = "contact@rajeevpuri.com.np";
  const emailCode = `const contactMe = {
  email: "${email}",
  status: "Open to opportunities",
  response_time: "24 hours",
};`;

  const notify = (message, type = "success") => {
    toast.dismiss();
    toast[type](message, {
      duration: 3000,
      position: "left",
      style: {
        background: type === "success" ? "#4caf50" : "#f44336",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#fff",
        secondary: type === "success" ? "#4caf50" : "#f44336",
      },
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      notify("Email copied to clipboard! 📋");
    } catch (err) {
      console.error("Failed to copy email:", err);
      notify("Failed to copy email.", "error");
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="project" className="w-full p-10">
      <div className="max-w-6xl mx-auto">
        <Items
          Number="04"
          title="Contact Me"
          des="Let's collaborate and bring your ideas to life. Feel free to reach out through any of these channels."
        />
        <div className="relative" ref={ref}>
          {/* Header Section */}
          <h1 className="text-4xl m-4 text-center  font-bold">
            Like the work I do?{" "}
            <a href={`mailto:${email}`} className="text-blue-500 underline">
              Contact
            </a>
          </h1>

          {/* Mac-themed Window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] max-w-6xl mx-auto"
          >
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-slate-700/50 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-mono text-slate-400">
                contact.jsx
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Email Section */}
              <div className="space-y-6">
                <div className="rounded-xl p-6 font-mono text-sm border border-slate-700/50 ">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">{`// Contact Information`}</span>
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-md text-xs text-slate-400 hover:text-blue-400 border border-slate-700/50"
                    >
                      Copy Email
                    </motion.button>
                  </div>
                  <pre className="text-blue-400">
                    <code>{emailCode}</code>
                  </pre>
                </div>

                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group "
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-700/50 bg-slate-900/50">
                    <HiOutlineMail className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-lg text-slate-200">
                      Send Email
                    </div>
                    <div className="text-sm text-slate-400">{email}</div>
                  </div>
                </motion.a>
              </div>

              {/* Right Column - Social Links */}
              <div className="space-y-4">
                {socialLinks.slice(0, 3).map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group ${link.color}`}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700/50 bg-slate-800/50 group-hover:bg-slate-900/50 transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-lg text-slate-200">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {link.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
