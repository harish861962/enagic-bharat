import React, { useState } from "react";
import { toast } from 'react-toastify';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const CONTACT_API_URL = "https://enagic-bharat.onrender.com/api/contact";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
const [timeSlot, setTimeSlot] = useState("");
const [pincode, setPincode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    console.log(CONTACT_API_URL);
    

    const formData = {
      name,
      email,
      phone,
      city,
      message,
      pincode,
      timeSlot
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    console.log(formData);

    console.log("Before Fetch");

//     try {
//       setIsSubmitting(true);

//       const res = await fetch(CONTACT_API_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// });
// console.log("After Fetch");

//       const data = await res.json().catch(() => ({
//         success: false,
//         message: "Invalid server response",
//       }));
//       console.log("Status:", res.status);

//       if (!res.ok) {
//         throw new Error(data.message || "Message failed");
//       }
      

//       if (data.success) {
//         toast.success("Message Sent Successfully");
//         setName("");
//         setEmail("");
//         setPhone("");
//         setCity("");
//         setMessage("");
//         setPincode("");
//         setTimeSlot("");
//       } else {
//         toast.warn(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Contact form submission failed:", error);
//       toast.error(
//         error.name === "AbortError"
//           ? "Server response time out ho gaya. Please thodi der baad try karein."
//           : error.message || "Something went wrong"
//       );
//     } finally {
//       clearTimeout(timeoutId);
//       setIsSubmitting(false);
//     }

try {
  console.log("Before Fetch");

  const res = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log("After Fetch");
  console.log("Status:", res.status);

  const text = await res.text();
  console.log("Response:", text);

} catch (err) {
  console.log("FETCH ERROR");
  console.log(err);
}
  };


  return (
    <section id="contact" className="bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our Enagic experts
            for product information, demo bookings and customer support.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaPhoneAlt className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Call Us
                </h3>

                <a href="tel:+91 7023320977"> +91 7023320977</a>


              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaEnvelope className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <a href="mailto:info@localpintu.com"> info@localpintu.com</a>
              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaMapMarkerAlt className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Office
                </h3>

                <p className="text-gray-600 mt-2">
                  1st Floor 11-12, Coral Tower, Narendra Nagar, Sodala, Jaipur, Rajasthan, 302019
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-5">

              <div className="bg-red-100 h-14 w-14 rounded-full flex items-center justify-center">

                <FaClock className="text-red-600 text-xl" />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Mon - Sat
                  <br />
                  9:00 AM - 7:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold">
              Send Message
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              Fill the form and we'll contact you shortly.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />
               

                <input
                  type="text"
                  placeholder="Address"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                 <input
                  type="tel"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  required
                  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
                />

                 <select
  value={timeSlot}
  onChange={(e) => setTimeSlot(e.target.value)}
  required
  className="border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 bg-white"
>
  <option value="">Select Time Slot</option>
  <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
  <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
  <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM</option>
  <option value="08:00 PM - 10:00 PM">08:00 PM - 10:00 PM</option>
</select>

              </div>

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-red-500"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-black transition  text-white px-10 py-4 rounded-xl font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

        {/* Map */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb="
            className="w-full h-[450px]"
            loading="lazy"
          ></iframe>

        </div>

        {/* Social */}

        <div className="mt-16 text-center">

          <h2 className="text-3xl font-bold">
            Follow Us
          </h2>

          <div className="flex justify-center gap-6 mt-8">

            <a
              href="#"
              className="h-14 w-14 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="h-14 w-14 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
