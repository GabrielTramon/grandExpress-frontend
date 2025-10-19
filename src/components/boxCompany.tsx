"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BoxCompany() {
  const companies = [
    {
      name: "Gourmet Fuel",
      logo: "/gf-logo.png",
      url: "https://gourmetfuel.com/?srsltid=AfmBOoovnHLmxce8PRdcsscGZf5l77V41JeGKsyvHbB_zoYPuGGXejzT",
    },
    {
      name: "Hopeless Botanics",
      logo: "/hopeless-logo.png",
      url: "https://hopelessbotanics.ie",
    },
    {
      name: "ABM BBQ",
      logo: "/abbq-logo.png",
      url: "https://abmbbq.nl",
    },
    {
      name: "Eat Up",
      logo: "/eatUpLogo.jpg",
      url: "https://www.instagram.com/eatupmeals_",
    },
    {
      name: "Just Fit",
      logo: "/justFitLogo.png",
      url: "https://justfitnutrition.eu",
    },
  ];

  return (
    <section className="mt-8 md:mt-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center slide-left-to-right">
        Corporate partners
      </h1>

      {/* Versão mobile */}
      <div className="flex flex-col gap-4 items-center md:hidden">
        {companies.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs"
          >
            <div className="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md hover:border-orange-300">
              <div className="relative h-16 w-32">
                <Image
                  alt={c.name}
                  src={c.logo}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3 text-center text-gray-700">
                {c.name}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* Versão desktop com Swiper */}
      <div className="hidden md:block py-2">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
          className="px-2"
        >
          {companies.map((c) => (
            <SwiperSlide key={c.name} className="py-2">
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md hover:border-orange-300 h-40 mx-auto max-w-[200px]">
                  <div className="relative h-20 w-full mb-3 fade-in">
                    <Image
                      alt={c.name}
                      src={c.logo}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-center text-gray-700 line-clamp-2">
                    {c.name}
                  </h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}