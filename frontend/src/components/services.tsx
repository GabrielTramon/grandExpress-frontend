import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white border-y-2 border-gray-300 py-10 px-4 slide-right-to-left">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Serviço 1 */}
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <Image
            src="/fastIcon.png"
            alt="Fast Delivery"
            width={120}
            height={100}
            className="mx-auto mb-2"
          />
          <p className="text-gray-600">
            We ensure your packages arrive within a few days — combining speed, efficiency, and reliability for your business needs.
          </p>
        </div>


        {/* Serviço 2 */}
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-2">Wide Coverage</h3>
          <Image src="/mapIcon.png" alt="Wide Coverage" width={100} height={100} className="mx-auto mb-4 mt-5" />
          <p className="text-gray-600">
            We serve all major areas of Dublin — from D1 to D24 and beyond — with reliable, fast routes every day.
          </p>
        </div>

        {/* Serviço 3 */}
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
          <Image src="/safeIcon.png" alt="Safe Delivery" width={90} height={100} className="mx-auto mb-4 mt-5" />
          <p className="text-gray-600 mt-3">
            Your deliveries are in trusted hands. We ensure every package is handled with care and delivered responsibly.
          </p>
        </div>

      </div>
    </section>
  );
}
