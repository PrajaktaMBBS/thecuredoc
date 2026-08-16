import { Link } from "react-router-dom";
import heroImg from "../assets/images/IMG_8749.jpg";
import profileImg from "../assets/images/prajakta.jpeg";
import supportImg from "../assets/images/pexels-tima-miroshnichenko-5452199.jpg";
import smile1 from "../assets/images/WhatsApp-Image-2025-09-06-at-23.18.59.jpeg";
import smile2 from "../assets/images/WhatsApp-Image-2025-09-06-at-23.18.58.jpeg";
import smile3 from "../assets/images/WhatsApp-Image-2025-09-06-at-23.18.56.jpeg";
import smile4 from "../assets/images/WhatsApp-Image-2025-09-06-at-23.18.54.jpeg";

function Home() {
  const qualifications = [
    { icon: "🩺", text: "MBBS" },
    { icon: "🌱", text: "Healed my own PCOS on Fruitarian lifestyle" },
    { icon: "✓", text: "BLS and ACLS certified by IAP" },
    { icon: "🌿", text: "Natural Hygiene integrated medicine approach" },
  ];

  const whatINeed = [
    "Open Communication (Just like your friend)",
    "Consistent updates on our daily set targets",
    "Make time for our weekly call",
    "Positive affirmations faith in your body & Mother Nature",
    "My goal is to bring out the truth about health & help you achieve it",
    "Easiest plans to suit your work schedule",
    "Being your biggest cheerleader",
    "Helping you with my medical knowledge & disease reversal experience",
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Disease Reversal Coaching with Dr. Prajakta
              </h1>
              <p className="text-xl mb-8 text-white font-semibold italic">
                "Your health is my passion."
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
                Transform your health through personalized nutrition and
                sustainable habits. I've guided hundreds of clients to better
                well-being by focusing on small, manageable changes that lead to
                lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://wa.me/9172750338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center text-sm sm:text-base"
                >
                  Start Your Journey
                </a>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center text-sm sm:text-base"
                >
                  View Programs
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={heroImg}
                alt="Dr. Prajakta"
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Specializations
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Expert credentials and personal experience in holistic healing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg md:rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                  {qual.icon}
                </div>
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  {qual.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Change Your Life Through Professional Health Coaching
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                I help clients transform their health through personalized
                nutrition and sustainable habits. I've guided over hundreds of
                clients to better well-being by focusing on small, manageable
                changes that lead to lasting results.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                My approach combines evidence-based medicine with genuine
                empathy and understanding. I practice the Natural Hygiene
                integrated medicine approach to help my clients achieve disease
                reversal.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 md:p-8">
              <div className="w-full max-w-xs md:max-w-sm mx-auto mb-4 md:mb-6 overflow-hidden rounded-xl border-4 border-white shadow-lg aspect-square">
                <img
                  src={profileImg}
                  alt="Dr. Prajakta"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-blue-800 font-semibold text-base md:text-lg">
                Dr. Prajakta Patil
              </p>
              <p className="text-center text-blue-600 text-sm md:text-base">
                MBBS, Disease Reversal Expert
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Need From Your Side
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Success is a partnership. Here's what I ask from you to ensure the
              best results:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whatINeed.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg md:rounded-xl p-5 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-semibold text-xs md:text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthy Smiles
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              United by a commitment to change, these individuals reversed
              lifestyle disorders through sustainable habits
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={smile1} alt="Healthy Smile 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={smile2} alt="Healthy Smile 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={smile3} alt="Healthy Smile 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={smile4} alt="Healthy Smile 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/testimonials"
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center text-sm md:text-base"
            >
              View More Success Stories
              <svg
                className="w-4 h-4 md:w-5 md:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step towards better health today. Book a free
            consultation to learn how disease reversal coaching can transform
            your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/9172750338"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              Book Free Consultation
            </a>
            <Link
              to="/services"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
