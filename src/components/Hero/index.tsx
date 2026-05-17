import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Southern California&apos;s Trusted Plumbing &amp; Trenchless Pipe Repair Experts
                </h1>
                <p className="mx-auto mb-4 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Licensed, bonded, and insured. Serving Los Angeles County &amp; Orange County with residential, commercial, and municipal plumbing services. 24/7 emergency plumbing available.
                </p>
                <p className="mx-auto mb-9 max-w-[600px] text-lg font-bold text-white sm:text-xl">
                  Call Now: <a href="tel:3234102068" className="underline hover:text-gray-2">(323) 410-2068</a>
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-bold text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Get a Free Estimate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-md border border-white px-7 py-[14px] text-center text-base font-bold text-white transition duration-300 ease-in-out hover:bg-white/10"
                    >
                      Our Services
                    </Link>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    CA License #1135475
                  </span>
                  <span className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    4.9★ (1,400+ Reviews)
                  </span>
                  <span className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    24/7 Emergency Service
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src="/images/hero/hero-image.jpg"
                    alt="A-1 Total Service Plumbing - Professional plumbing services in Los Angeles and Orange County"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="485"
              height="470"
              viewBox="0 0 485 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 0 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 70 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 20 350)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 430 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 360 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 410 350)"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </span>
          <span className="absolute right-0 bottom-0 z-[-1]">
            <svg
              width="485"
              height="470"
              viewBox="0 0 485 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 0 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 70 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 20 350)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 430 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 360 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 410 350)"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
