// export default function Office(){

// return(

// <section className="py-20">

// <div className="max-w-6xl mx-auto">

// <h2 className="text-center text-5xl font-bold mb-12">
// Our Office
// </h2>

// <div className="grid md:grid-cols-2 gap-10">

// <div>

// <h3 className="text-3xl font-bold">
// ENAGIC INDIA
// </h3>

// <p className="mt-5 text-lg">
// Office Address

// <br/><br/>

// 123 Business Park

// Mumbai

// India

// 400001

// </p>

// <p className="mt-5">

// Phone : +91 9876543210

// </p>

// <p>

// Email : info@enagic.com

// </p>

// </div>

// <div>

// <iframe

// title="map"

// className="w-full h-96 rounded-xl"

// src="https://www.google.com/maps/embed?...">

// </iframe>

// </div>

// </div>

// </div>

// </section>

// )

// }




import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Office() {
  return (
    <section id="office" className="mb-15 bg-gray-100">

      <div className="max-w-7xl  mx-auto px-5">

        <div className="text-center mb-14" >

          <h2 className="text-4xl  pt-1  pb-3 md:text-5xl font-bold">
            Visit Our Office
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 !mt-5">
            We'd love to welcome you to our office.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-white rounded-3xl shadow-xl !p-10">

            <h3 className="text-3xl font-bold !my-8 text-gray-800">
              ENAGIC INDIA
            </h3>

            <div className="!space-y-8">

              <div className="flex gap-5">

                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">

                  <FaMapMarkerAlt className="text-red-600 text-xl" />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Office Address
                  </h4>

                  <p className="text-gray-600">
                    123 Business Park,
                    <br />
                    Mumbai, Maharashtra,
                    <br />
                    India - 400001
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">

                  <FaPhoneAlt className="text-red-600" />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>

                  {/* <p className="text-gray-600">
                    +91 9876543210
                  </p> */}

              <a href="tel:+91 7023320977">Call us at +91 7023320977</a>


                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">

                  <FaEnvelope className="text-red-600" />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    info@enagicindia.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">

                  <FaClock className="text-red-600" />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Office Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe
              title="Google Map"
              className="w-full h-[500px]"
              src="https://www.google.com/maps/embed?pb="
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}