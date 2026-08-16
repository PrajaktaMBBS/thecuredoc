import { useEffect } from "react";
import whatsapp1 from "../assets/images/WhatsApp-Image-2025-09-07-at-00.33.32.jpeg";
import whatsapp2 from "../assets/images/WhatsApp-Image-2025-09-07-at-00.33.31.jpeg";
import tuio from "../assets/images/tuio.jpg";
import img1 from "../assets/images/pexels-photo-4386467-4386467.jpg";
import img2 from "../assets/images/pexels-mastercowley-1153372.jpg";
import img3 from "../assets/images/5.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/3.png";
import img6 from "../assets/images/1.png";

function Testimonials() {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Patient Testimonial 1",
      initials: "PT",
      color: "bg-blue-200",
      textColor: "text-blue-800",
      rating: 5,
      treatment: "Disease Reversal Program",
      date: "August 2026",
      text: "Dr. Prajakta's disease reversal program transformed my life. Her guidance and support throughout the fruit diet program were exceptional. I feel healthier and more energetic than ever!",
      location: "Pune, India",
    },
    {
      id: 2,
      name: "Patient Testimonial 2",
      initials: "PT",
      color: "bg-green-200",
      textColor: "text-green-800",
      rating: 5,
      treatment: "Mental De-conditioning",
      date: "July 2026",
      text: "The mental de-conditioning course helped me break free from limiting beliefs. Dr. Prajakta's compassionate approach and practical strategies have been life-changing.",
      location: "Mumbai, India",
    },
    {
      id: 3,
      name: "Patient Testimonial 3",
      initials: "PT",
      color: "bg-purple-200",
      textColor: "text-purple-800",
      rating: 5,
      treatment: "Women's Health",
      date: "June 2026",
      text: "After struggling with PCOS for years, Dr. Prajakta's holistic approach helped me manage my symptoms naturally. Her personalized care and constant support made all the difference.",
      location: "Delhi, India",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Patient Testimonials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl">
            Hear from our satisfied patients about their experiences with Dr.
            Prajakta and our dedicated healthcare team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram Reels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our success stories and health tips on Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {[
              "https://www.instagram.com/reel/C5KgF5iJUbZ/",
              "https://www.instagram.com/reel/C5qPggyKbUT/",
              "https://www.instagram.com/reel/C8jv2g1Szaz/",
              "https://www.instagram.com/reel/C8hjFAzKOfb/?igsh=MXAzdTIya2Fmd3J3ag==",
              "https://www.instagram.com/reel/C8jv2g1Szaz/?igsh=aGhxaHhpZ2p0OWVk",
              "https://www.instagram.com/reel/C8o92IRySGa/?igsh=MXZhNXFrbWEwb3F4MA==",
              "https://www.instagram.com/p/C9MLMugSHpX/?igsh=MWZteGh4eTdmb2FpdA==",
              "https://www.instagram.com/reel/C9w8qihIAEP/?igsh=MTdmbDJhMzNtYXQycw==",
              "https://www.instagram.com/reel/C-kaWoxI2is/?igsh=MXMyZzQ2MmpheTVqeg==",
              "https://www.instagram.com/reel/C_IbfGMovEl/?igsh=dnVheDM2Z3Qxcm95",
              "https://www.instagram.com/p/C_dIwumoj-b/?igsh=MTg4OXNqdm4yNDNp",
              "https://www.instagram.com/reel/C_fshely4nB/?igsh=OXZya2FueDYxNzhi",
              "https://www.instagram.com/p/DHTGFNpIkKR/?igsh=MTZ4ZHQ2OG16aWdzdQ==",
              "https://www.instagram.com/reel/C48HpgHqEEP/?igsh=MXg0dTB4OGpjeXhjNw==",
            ].map((url, index) => (
              <blockquote
                key={index}
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              ></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp Conversations
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Real conversations with our patients showing their health journey
              and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div>
                <img
                  src="/testimonial-1.webp"
                  alt="WhatsApp conversation - Disease Reversal Program"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg border-2 border-green-200"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div>
                <img
                  src="/testimonial-2.webp"
                  alt="WhatsApp conversation - Mental De-conditioning"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg border-2 border-green-200"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div>
                <img
                  src="/testimonial-3.webp"
                  alt="WhatsApp conversation - Women's Health"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg border-2 border-green-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Holistic Health Journey
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Discover the transformation through nutrition, exercise, and
              mindful living
            </p>
          </div>

          {/* Collage Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {/* Large image spanning 2 rows */}
            {/* <div className="sm:col-span-1 lg:col-span-2 rounded-lg overflow-hidden">
              <img
                src={img1}
                alt="Healthy lifestyle - Exercise"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div> */}

            {/* Top right images */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={img2}
                alt="Healthy lifestyle"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={tuio}
                alt="Fresh fruits"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            {/* Middle row */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={img3}
                alt="Wellness journey"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={img4}
                alt="Healthy living"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            {/* Bottom row */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={img5}
                alt="Nutrition"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={img6}
                alt="Health transformation"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={whatsapp1}
                alt="Patient testimonial"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={whatsapp2}
                alt="Success story"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
