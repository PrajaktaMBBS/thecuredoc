import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "BOOK A FREE CALL",
      subtitle: "URGENT - FEW QUERIES TO KNOW IF REVERSAL IS POSSIBLE",
      description: "DM directly on WhatsApp for urgent queries",
      whatsapp: "9145773110",
      cost: "FREE",
      isUrgent: true,
      features: [
        "Quick response via WhatsApp",
        "Assess if reversal is possible for your condition",
        "No commitment required",
      ],
    },
    {
      title: "GENERAL CONSULTATION",
      description: "One-to-one consultation call (online)",
      cost: "2,999 INR",
      features: [
        "1 One-to-One Consultation Call (Online)",
        "Health History Analysis",
        "One Week Diet Plan (Customised)",
        "One Week WhatsApp Support",
      ],
    },
    {
      title: "MENTAL DE-CONDITIONING COURSE",
      description:
        "Strategies to build healthy habits and break mental limitations",
      cost: "1,999 INR",
      features: [
        "3 One-to-One Counselling Calls (Online)",
        "Strategies to Build Healthy Habits",
        "Break the Shackles of Our Mental Limitations",
        "Unleash Your Full Potential",
      ],
    },
    {
      title: "1 MONTH GUIDED FRUIT DIET PROGRAM",
      description: "Comprehensive fruit diet program with daily support",
      cost: "9,999 INR/MONTH",
      internationalCost: "$169 (International/Time zone other than India)",
      features: [
        "4 One-to-One Consultation Calls (Online)",
        "Health History Analysis",
        "Diet Plan (Customisable) & Lifestyle Plan",
        "1 Month Daily WhatsApp Support",
        "Understanding Detox & Management",
        "Mental Support & Regular Follow-up",
        "Medication Tapering (if any)",
        "Myth Busting Backed by Science & Logic",
      ],
    },
    {
      title: "2 MONTHS PACKAGE",
      description: "Long-term sustainable diet plan with lifetime benefits",
      cost: "17,999 INR",
      internationalCost: "$249 (International/Time zone other than India)",
      features: [
        "All Benefits of One Month Program",
        "Long Term Sustainable Diet Plan PDF",
        "Lifetime Free Pass for Query on WhatsApp",
      ],
    },
    {
      title: "WOMEN HEALTH CONSULTATION",
      subtitle: "For PCOD, Obesity, Acne, Hairfall",
      description: "Specialized fruit diet support for women's health issues",
      cost: "6,999 INR",
      features: [
        "Fruit Diet Support (1 Month)",
        "2 One-to-One Sessions (Online)",
        "Regular WhatsApp Follow-up (1 Month)",
        "Detox Guidance",
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Comprehensive dietary and lifestyle support programs designed to
            help you achieve optimal health through natural healing methods.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg md:rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow ${service.isUrgent ? "border-2 border-red-500" : ""}`}
              >
                {service.isUrgent && (
                  <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    URGENT
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-xs md:text-sm text-red-600 font-medium mb-3">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                    {service.cost}
                  </div>
                  {service.internationalCost && (
                    <div className="text-xs md:text-sm text-gray-500">
                      {service.internationalCost}
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs md:text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.whatsapp && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs md:text-sm text-green-800 font-medium mb-1">
                      WhatsApp Direct:
                    </p>
                    <p className="text-green-600 font-bold text-sm md:text-base">
                      {service.whatsapp}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                How to Book
              </h2>

              <div className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                <p className="text-sm md:text-base text-gray-700 text-center">
                  Book the consultation by making the payment of the plan you
                  are interested in and share the payment details on WhatsApp:{" "}
                  <span className="font-bold text-blue-600">9172750338</span>
                </p>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Payment Details
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-gray-500">Name</p>
                      <p className="font-semibold text-sm md:text-base text-gray-900">
                        PRAJAKTA PATIL
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500">
                        Bank Name
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-900">
                        INDIAN BANK
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500">
                        Account Number
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-900">
                        6971823222
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500">
                        IFSC Code
                      </p>
                      <p className="font-semibold text-sm md:text-base text-gray-900">
                        IDIB000P261
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6">
                  <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">
                    UPI Payment Options
                  </h4>
                  <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-sm md:text-base text-gray-700">
                        Google Pay
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-sm md:text-base text-gray-700">
                        Phone Pe
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 font-bold text-sm md:text-base mb-4">
                    9172750338
                  </p>

                  <div className="border-t border-green-200 pt-4 mt-4">
                    <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">
                      Scan QR Code for Payment
                    </h4>
                    <div className="flex justify-center">
                      <img
                        src="/payment-qr.jpg"
                        alt="Payment QR Code"
                        className="w-40 h-40 md:w-48 md:h-48 object-contain border-2 border-green-300 rounded-lg"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 text-center mt-2">
                      Scan to pay via UPI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Please Note
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    These programs do not guarantee cure. I provide dietary &
                    lifestyle support based on my personal experience on this
                    lifestyle & experience with the people I guided.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    We do not suggest this as substitute for your doctor's
                    medical advice.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    The amount deposited is non-refundable & any indiscipline
                    will result in forfeiture of money & discontinuation of
                    program.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the program that suits your needs and take the first step
            towards better health today.
          </p>
          <div className="space-y-4">
            <a
              href="https://wa.me/9172750338"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Contact on WhatsApp to Book
            </a>
            <div className="text-blue-100 text-sm">
              <p>WhatsApp: 9172750338</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
