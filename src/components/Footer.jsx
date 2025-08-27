import { Link } from "react-router-dom";
import { Github, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/param2603-ui", label: "github" },
    { icon: MessageCircle, href: "https://wa.me/918866779476", label: "message" },
    { icon: Instagram, href: "https://www.instagram.com/codex__digital/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/param-acharya-1b9774370/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 border-t border-slate-700 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
            >
              Codex Digital
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Transforming ideas into digital reality. We create stunning web experiences
              that drive results and exceed expectations.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-700 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 text-white transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>team.codexdigital@gmail.com</p>
              <p> +91 8866779476 <br/>+91 8320241898</p>
              <p>
                Bhavnagar<br />
                Gujarat, India 364001
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="border-t border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-300">
            © {currentYear} Codex Digital. All rights reserved.<br />Design & Develop by Codex Digital
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
