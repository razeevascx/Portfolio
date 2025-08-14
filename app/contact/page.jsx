"use client";
import { HiOutlineMail } from "react-icons/hi";
import * as motion from "motion/react-client";
import { toast } from "react-hot-toast";
import Items from "../components/Items";
import { socialLinks } from "../utils/Constants";

function Contact() {
  const email = "contact@rajeevpuri.com.np";
  const emailCode = `{
    "name" = "Rajeev Puri",
    "title" = "BSc Computer Science Student && Software Engineer" ,
    "email" = "${email}",
    "website" = "https://rajeevpuri.com.np",
    "gitHub" = "https://github.com/razeevascx"
}`;

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

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="project"
      className="w-full p-5"
    >
      <div className="max-w-6xl mx-auto">
        <Items
          Number="03"
          title="Contact Me"
          des="Let's collaborate and bring your ideas to life. Feel free to reach out through any of these channels."
        />
        <div className="relative">
          {/* Mac-themed Window */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] max-w-6xl mx-auto ">
            {/* Window Header */}
            <div className="px-4 py-3 border-b border-slate-700/50 flex items-center">
              <div className="flex-1 text-center text-sm font-mono text-slate-400">
                BusinessCard.json
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8  md:grid-cols-2">
              <div className="rounded-xl p-6 font-mono text-sm border border-slate-700/50   hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">{`// Contact Information`}</span>

                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 rounded-md text-xs text-slate-400 hover:text-blue-400 border border-slate-700/50"
                  >
                    {" "}
                    <HiOutlineMail className="ml-2 h-4 w-4 text-blue-400" />
                  </motion.button>
                </div>
                <pre className="text-blue-400 justify-normal text-lg font-mono whitespace-pre-wrap break-words">
                  <code>{emailCode}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group "
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700/50 bg-slate-800/50 group-hover:bg-slate-900/50 transition-colors">
                <HiOutlineMail className="text-2xl text-blue-400" />
              </div>
              <div>
                <div className="font-medium text-lg text-slate-200">
                  Send Email
                </div>
                <div className="text-sm text-slate-400">{email}</div>
              </div>
            </motion.a>
            {socialLinks
              .filter((link) => link.name !== "Mail")
              .map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group  ${link.hoverColor}`}
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
      </div>
    </motion.section>
  );
}

export default Contact;
