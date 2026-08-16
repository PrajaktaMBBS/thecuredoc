import profileImg from "../assets/images/WhatsApp-Image-2025-09-06-at-22.48.06.jpeg";
import collage1 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.46.24.jpeg";
import collage2 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.44.01.jpeg";
import collage3 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.43.59.jpeg";
import collage4 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.43.56.jpeg";
import collage5 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.37.00.jpeg";
import collage6 from "../assets/images/WhatsApp-Image-2025-09-09-at-16.43.55.jpeg";

function About() {
  const benefits = [
    {
      title: "Happiness",
      description:
        "My clients report feeling happier and more energized after completing their coaching program for health and wellness.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Success in Habit Formation",
      description:
        "Clients successfully adopt and sustain healthy habits over the long term, thanks to tailored strategies and consistent support.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Improved Nutrition Knowledge",
      description:
        "Clients leave the program with a deeper understanding of nutrition and how to make better food choices.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  const conditions = [
    "Diabetes Type 1 & 2",
    "Infertility & Menopause",
    "Cardiovascular disease, including heart attacks and heart failure",
    "Kidney failure and dialysis",
    "Autoimmune disease",
    "Rheumatoid Arthritis",
    "Crohn's",
    "Gallstones",
    "Digestive issues",
    "Skin conditions",
    "COPD and asthma",
    "Obesity",
    "PCOS/PCOD",
    "Peripheral Vascular Disease (PVD)",
    "Thyroid diseases",
    "Hairfall",
    "Many More",
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Dr. Prajakta
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Taking an individualized, root cause approach to health.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 md:p-8">
                <div className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto aspect-square mx-auto mb-6 overflow-hidden rounded-xl">
                  <img
                    src={profileImg}
                    alt="Dr. Prajakta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900">
                  Dr. Prajakta
                </h3>
                <p className="text-center text-blue-600 font-medium text-sm md:text-base">
                  MBBS, Holistic Wellness Practitioner & Disease Reversal Expert
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My Philosophy
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg font-medium text-gray-800 italic">
                  "The aim of the medicine is to prevent disease and prolong
                  life, the ideal of medicine is to eliminate the need of a
                  physician."
                </p>
                <p>
                  I believe that one size does NOT fit all. I take a holistic
                  approach to nutrition using evidence-based integrative and
                  functional medicine. This means helping you feel your best by
                  targeting the root cause of your concerns and supporting you
                  in building maintainable nutrition and lifestyle habits for
                  long-term health and wellness.
                </p>
                <p>
                  I have also helped my mom heal her hypertension, endometriosis
                  and asthma on a Fruitarian lifestyle. This personal experience
                  drives my passion for helping others achieve similar
                  transformations through natural healing methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Glimpse into the Journey
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Real moments of health, wellness, and transformation.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage1} alt="Journey Moment 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage2} alt="Journey Moment 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage3} alt="Journey Moment 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage4} alt="Journey Moment 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage5} alt="Journey Moment 5" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg break-inside-avoid">
              <img src={collage6} alt="Journey Moment 6" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Benefits
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Supporting you in achieving and maintaining a healthy, balanced
              life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Me
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Choosing me as your health coach means choosing a partner who is
              dedicated to your success. I stay current with the latest research
              and trends in nutrition to provide you with evidence-based advice.
              My approach is compassionate, non-judgmental, and focused on
              helping you find what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg md:rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
                My Approach
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Evidence-based integrative medicine</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Root cause analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Individualized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Compassionate, non-judgmental support</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg md:rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
                Commitment to Excellence
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Stay current with latest research</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Personalized strategies for each client</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Long-term habit formation support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Dedicated to your success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conditions Addressed
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              My clients have reported benefits from this protocol in addressing
              the following conditions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Take the first step towards better health by scheduling a
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/919145773110"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center text-sm md:text-base"
            >
              Contact on WhatsApp
            </a>
            <a
              href="/services"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-sm md:text-base"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
