import profileImg from "../assets/images/WhatsApp-Image-2025-09-06-at-22.48.06.jpeg";

function Blog() {
  const blogPost = {
    title: "Why Anyone with Chronic Illnesses Should Go on 1:1 Support",
    author: "Dr. Prajakta Patil (MBBS)",
    date: "August 16, 2026",
    category: "Health Philosophy",
    content: [
      {
        type: "intro",
        text: "I will tell you why anyone with chronic illnesses should go on 1:1 support?",
      },
      {
        type: "points",
        items: [
          "Our goal is not to keep you dependent on prescriptions but to guide your body toward real healing, so you don't have to keep coming back again and again.",
          "We focus on reducing your reliance on drugs by addressing the root causes of illness, rather than masking symptoms.",
          "We take time to teach you deeply about your own health and support you step by step, until you feel confident and free from fear.",
          "Our consultations are in-depth and personal—30 minutes to 1 hour of genuine analysis—unlike the quick 5-minute model of standard practice.",
          "We stand beside you during every stage of detox and healing, even when others may discourage you or make you doubt yourself.",
          "We believe in a different kind of medical care—not consultations for writing doses, but for guiding real, lasting transformation.",
        ],
      },
      {
        type: "paragraph",
        text: "I would always see it as an investment to learn about health, but would not pay a single penny for any drug. Personally, even if I consult only 10 patients a month, I am at peace—because I choose to work with those who truly want to heal, embrace truth, and commit to curing themselves.",
      },
      {
        type: "paragraph",
        text: "There are many doctors in the world, but very few who can dedicate this kind of time and energy. For me, medicine was never about chasing money—it was about serving people with honesty and care.",
      },
      {
        type: "paragraph",
        text: "I've walked the difficult path myself—through health struggles, long waits in clinics, and failed attempts at real cure. That journey shaped me into the doctor I am today, and I don't want anyone else to feel alone in theirs.",
      },
      {
        type: "conclusion",
        text: 'What I offer is not a "quick fix." Healing takes time, patience, and guidance. That is why 1:1 coaching for chronic illness is so powerful—it gives you truth, support, and the confidence to walk through every challenge.',
      },
    ],
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Health Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl">
            Insights from Dr. Prajakta on holistic healing and disease reversal.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-lg md:rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 md:mb-6">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                  {blogPost.category}
                </span>
                <span className="text-xs text-gray-500">{blogPost.date}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                {blogPost.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gray-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src={profileImg}
                    alt="Dr. Prajakta"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base text-gray-900">
                    {blogPost.author}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    MBBS, Holistic Wellness Practitioner
                  </p>
                </div>
              </div>

              <div className="prose prose-sm md:prose-lg max-w-none">
                {blogPost.content.map((section, index) => {
                  if (section.type === "intro") {
                    return (
                      <p
                        key={index}
                        className="text-base md:text-lg text-gray-800 font-medium mb-6 md:mb-8 leading-relaxed"
                      >
                        {section.text}
                      </p>
                    );
                  }

                  if (section.type === "points") {
                    return (
                      <div key={index} className="mb-6 md:mb-8">
                        <ol className="space-y-3 md:space-y-4">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5">
                                <span className="text-blue-600 font-semibold text-xs md:text-sm">
                                  {idx + 1}
                                </span>
                              </span>
                              <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  }

                  if (section.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed"
                      >
                        {section.text}
                      </p>
                    );
                  }

                  if (section.type === "conclusion") {
                    return (
                      <div
                        key={index}
                        className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-blue-600"
                      >
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed italic">
                          {section.text}
                        </p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src={profileImg}
                        alt="Dr. Prajakta"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-900">
                        Dr. Prajakta Patil
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">MBBS</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs md:text-sm text-gray-600 italic">
                      Wishing you wellness, always
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  Ready to Heal?
                </h2>
                <p className="text-sm md:text-base text-blue-100 mb-4 md:mb-6">
                  If you're ready to commit to your healing journey and embrace
                  truth, I'm here to guide you every step of the way.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href="/services"
                    className="bg-white text-blue-600 px-5 md:px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-sm md:text-base"
                  >
                    View Services
                  </a>
                  <a
                    href="https://wa.me/919145773110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-5 md:px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center text-sm md:text-base"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
