import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const email = "hey@rajeevpuri.com.np";
  const emailCode = `const contactMe = {
  email: "${email}",
  status: "Open to opportunities",
  response_time: "24 hours",
};`;

  const notify = (message, type = "success") => {
    toast.dismiss();
    toast[type](message, {
      duration: 2000,
      position: "bottom-center",
      style: {
        color: "#fff",
        borderRadius: "10px",
        border: "1px solid rgba(148, 163, 184, 0.1)",
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
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative" ref={ref}>
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <motion.h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-3">
                Contact
              </motion.h2>
              <motion.h3 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">
                Let&apos;s Work Together
              </motion.h3>
              <motion.p className="max-w-2xl mx-auto text-slate-400 text-lg">
                I&apos;m currently available for freelance work and full-time
                positions. If you have a project that needs coding, I&apos;d
                love to hear about it.
              </motion.p>
            </motion.div>

            {/* Mac-themed Window */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] max-w-4xl mx-auto"
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
                {/* Left Column - Code Display */}
                <div className="rounded-xl p-6 font-mono text-sm border border-slate-700/50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">{`// Contact Information`}</span>
                    <motion.button
                      onClick={handleCopyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-md text-xs text-slate-400 hover:text-blue-400 border border-slate-700/50"
                    >
                      <HiOutlineMail className="text-lg text-blue-400" />
                    </motion.button>
                  </div>
                  <pre className="text-blue-400">
                    <code>{emailCode}</code>
                  </pre>
                </div>

                {/* Right Column - Contact Links */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Let&apos;s Connect
                  </h3>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <motion.a
                      href={`mailto:${email}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700/50">
                        <HiOutlineMail className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-slate-400">{email}</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://instagram.com/razeev.asnx"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700/50">
                        <BsInstagram className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">Instagram</div>
                        <div className="text-sm text-slate-400">
                          Connect with me
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/razeevascx"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700/50">
                        <BsGithub className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <div className="font- medium">GitHub</div>
                        <div className="text-sm text-slate-400">
                          Explore my projects
                        </div>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

  
      <Toaster />
    </div>
  );
}

export default Contact;
