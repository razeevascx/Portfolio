import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajeevpuri/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rajeevpuri',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rajeevpuri',
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:contact@rajeevpuri.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Footer Content */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 max-w-md mx-auto">
              Building digital experiences with code and creativity.
              Transforming ideas into elegant solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          {/* Copyright */}
          <div className="p-2 border-t border-gray-800">
            <div className="text-center space-y-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Rajeev Puri. All rights
                reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
