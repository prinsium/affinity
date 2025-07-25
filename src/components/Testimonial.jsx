import reviews from "@/app/db/reviews";

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-center">Loved by millions</h2>

      {/* Reviews Section */}
      <section className="bg-transparent py-12 px-4">

        <div className="relative overflow-hidden h-full md:max-h-[500px]">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute z-20 inset-0">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 w-full h-0 md:h-40 bg-gradient-to-b from-[#f0f0ff] to-transparent"></div>
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 w-full h-0 md:h-40 bg-gradient-to-t from-[#f0f0ff] to-transparent"></div>
            {/* Left gradient */}
            <div className="absolute top-0 left-0 h-full w-10 md:w-30 bg-gradient-to-r from-[#f0f0ff] to-transparent"></div>
            {/* Right gradient */}
            <div className="absolute top-0 right-0 h-full w-10 md:w-30 bg-gradient-to-l from-[#f0f0ff] to-transparent"></div>
          </div>

          {/* Marquee container */}
          <div className="overflow-hidden relative z-10">
            {/* Desktop (vertical columns) */}
            <div className="hidden md:flex gap-4 justify-center">
              {/* Column 1: top to bottom */}
              <div className="flex flex-col gap-4 animate-marquee-vertical-down">
                {[...reviews, ...reviews].map((review, i) => (
                  <div
                    key={`col1-${i}`}
                    className="w-[500px] bg-[#ffffff] shadow-md p-4 rounded-lg"
                  >
                    <p className="text-md text-gray-700 italic mb-8">
                      “{review.text}”
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      – {review.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 2: bottom to top */}
              <div className="flex flex-col gap-4 animate-marquee-vertical-up">
                {[...reviews, ...reviews].map((review, i) => (
                  <div
                    key={`col2-${i}`}
                    className="w-[500px] bg-[#ffffff] shadow-md p-4 rounded-lg"
                  >
                    <p className="text-md text-gray-700 italic mb-8">
                      “{review.text}”
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      – {review.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 3: top to bottom */}
              <div className="flex flex-col gap-4 animate-marquee-vertical-down">
                {[...reviews, ...reviews].map((review, i) => (
                  <div
                    key={`col3-${i}`}
                    className="w-[500px] bg-[#ffffff] shadow-md p-4 rounded-lg"
                  >
                    <p className="text-md text-gray-700 italic mb-8">
                      “{review.text}”
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      – {review.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Repeat as needed */}
            </div>

          </div>

          {/* Mobile (horizontal marquee) */}
            <div className="flex flex-row gap-4">
                <div className="flex md:hidden gap-4 animate-marquee-horizontal">
                {[...reviews, ...reviews].map((review, i) => (
                    <div
                    key={`h-${i}`}
                    className="min-w-[300px] bg-[#ffffff] shadow-md p-4 rounded-lg"
                    >
                    <p className="text-sm text-gray-700 italic mb-8">
                        “{review.text}”
                    </p>
                    <p className="text-xs font-semibold text-gray-500">
                        – {review.name}
                    </p>
                    </div>
                ))}
                </div>

                <div className="flex md:hidden gap-4 animate-marquee-horizontal">
                {[...reviews, ...reviews].map((review, i) => (
                    <div
                    key={`h-${i}`}
                    className="min-w-[300px] bg-[#ffffff] shadow-md p-4 rounded-lg"
                    >
                    <p className="text-sm text-gray-700 italic mb-8">
                        “{review.text}”
                    </p>
                    <p className="text-xs font-semibold text-gray-500">
                        – {review.name}
                    </p>
                    </div>
                ))}
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}
