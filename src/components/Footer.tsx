
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
            xNerds is a forward-thinking company dedicated to delivering innovative technology solutions and exceptional service to drive your success.</p>
            <div className="bg-gradient-to-r from-primary to-primary-light p-4 rounded-lg">
              <p className="font-semibold text-white">Let's build something great together.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-primary-light transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@xnerds.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-light transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>info@xnerds.com</span>
              </a>
              <p className="text-gray-400">+92-323-4314748</p>
              <p className="text-gray-400">Lahore, Pakistan</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Github, href: "https://github.com/XnerdsORG", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/xnerds-solutions/posts/", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-primary-light transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 xNerds Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
