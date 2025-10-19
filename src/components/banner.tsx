import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-center pt-[15vh] px-4 fade-in">
      <div className="w-full max-w-[1300px]">
        {/* Banner para desktop */}
        <div className="hidden md:block">
          <Image
            src="/banner.png"
            alt="Banner Desktop"
            className="w-full h-auto object-cover rounded-2xl"
            priority
            width={1200}
            height={900}
          />
        </div>

        {/* Banner para mobile */}
        <div className="block md:hidden ">
          <Image
            src="/bannerMobile.png"
            alt="Banner Mobile"
            className="w-full h-auto object-cover rounded-2xl"
            priority
            width={600}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
