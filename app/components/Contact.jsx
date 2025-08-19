import { HiOutlineMail } from "react-icons/hi";
import * as motion from "motion/react-client";
import Items from "./Items";
import { socialLinks } from "../utils/Constants";

function Contact() {
  const email = "contact@rajeevpuri.com.np";
  const emailCode = `{
    name: "Rajeev Puri",
    email: "${email}",
    title: "BSc Student && Software Engineer" ,
    gitHub: "https://github.com/razeevascx"
    website: "https://rajeevpuri.com.np",
}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="contact"
      className="w-full p-5"
    >
      <div className="max-w-6xl mx-auto">
        <Items
          Number="03"
          title="Contact Me"
          des="Let's collaborate and bring your ideas to life. Feel free to reach out through any of these channels."
        />
        <div className="relative">
          <div className="border-dashed border-2  p-6 font-mono text-sm  border-slate-700/50   hover:border-blue-400/50 transition-all duration-300 group">
            <span className="text-slate-400 ">{`// Contact Information`}</span>
            <pre className="text-blue-400 justify-normal text-lg font-serif font-bold tracking-wider whitespace-pre-wrap break-words">
              <code>{emailCode}</code>
            </pre>
          </div>

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
