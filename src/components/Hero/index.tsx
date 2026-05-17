import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 pt-44 pb-12 sm:pt-48 sm:pb-16 lg:pt-52">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">
                We fix phumbing problems
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-8">
                Licensed, bonded, and insured. Serving Los Angeles County &amp; Orange County with residential, commercial, and municipal plumbing services. 24/7 emergency plumbing available.
              </p>

              <div className="mt-8 sm:mt-10">
                <div className="relative p-2 sm:border sm:border-gray-400 sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                  <a
                    href="tel:3234102068"
                    className="block w-full px-4 py-4 text-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent text-lg font-medium"
                  >
                    Call Now: (323) 410-2068
                  </a>
                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <Link
                      href="/contact"
                      className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600"
                    >
                      Get Free Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/hero/hero-image.jpg"
              alt="A-1 Total Service Plumbing - Professional plumbing services in Los Angeles and Orange County"
              width={845}
              height={600}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
