import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#Product" },
  { name: "Office", href: "#office" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-4xl font-bold text-white">
            ENAGIC
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Enagic is a world leader in water ionizer technology,
            delivering innovative health solutions that improve the
            quality of everyday life through clean and alkaline water.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 duration-300"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 duration-300"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {footerLinks.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 hover:text-red-500 cursor-pointer duration-300"
              >
                <FaArrowRight className="text-sm" />
                <a href={item.href}>{item.name}</a>
              </li>
            ))}

          </ul>

        </div>

        {/* Products */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Our Products
          </h3>

          <ul className="space-y-4">

            {[
              "Leveluk K8",
              "SD501",
              "JRIV",
              "Anespa",
              "Ukon",
              "Super 501",
              "Accessories",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-red-500 cursor-pointer duration-300"
              >
                <FaArrowRight className="text-sm" />
                {item}
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <p>
              1st Floor 11-12, Coral Tower, Narendra Nagar, Sodala, Jaipur, Rajasthan, 302019

              </p>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="text-red-500" />
              {/* <p>+91 7023320977</p> */}
              <a href="tel:+917023320977">Call us at +91 7023320977</a>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-red-500" />
             <a href="mailto:info@localpintu.com">Email us at info@localpintu.com</a>
            </div>

          </div>

          {/* Newsletter */}

          <div className="mt-10">

            <h4 className="text-xl text-white mb-4">
              Subscribe Newsletter
            </h4>

            <div className="flex">

              <input
                type="email"
                placeholder="Your Email"
                className="w-full !px-4 py-3 rounded-l-lg bg-gray-800 outline-none"
              />

              <button className="bg-red-600 px-5 rounded-r-lg hover:bg-red-700 duration-300">
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-800"></div>

      {/* Bottom */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-400 text-center md:text-left">
          © 2026 ENAGIC. All Rights Reserved.
        </p>

        <div className="flex gap-8 text-sm">

          <a href="#" className="hover:text-red-500">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-red-500">
            Terms & Conditions
          </a>

          <a href="#" className="hover:text-red-500">
            Sitemap
          </a>

        </div>

      </div>

    </footer>
  );
}
