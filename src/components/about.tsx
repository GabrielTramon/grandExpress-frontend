'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="w-full bg-zinc-50 py-16 px-6 md:px-12mt slide-left-to-right">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold text-amber-950 mb-6">About Us</h2>
          <p className="text-md text-gray-900 text-justify">
            At Grand Express Delivery, we empower Dublin’s local businesses with fast, reliable, and same-day delivery services. Our mission is to help you grow by ensuring your products reach customers quickly and efficiently — often faster than major couriers like DPD, DHL, and even Amazon.
            We’re more than just a delivery company — we’re your logistics partner. With a focus on speed, reliability, and customer satisfaction, we ensure every package is handled with care and delivered on time. Let’s grow together with delivery services that truly make a difference.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/banner2.png" // coloque sua imagem na pasta public
            alt="Equipe trabalhando junta"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
