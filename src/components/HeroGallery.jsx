import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const images = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/hero/hero-3.webp",
  "/images/hero/hero-4.webp",
];

function HeroGallery() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((current) => (current + 1) % images.length);
  }

  function previousSlide() {
    setCurrent((current) => (current - 1 + images.length) % images.length);
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* IMAGE */}
      <img
        key={current}
        src={images[current]}
        alt={`Villa Kamenjarka ${current + 1}`}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      {/* BOTTOM GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* TEXT */}
      <div className="pointer-events-none absolute inset-0 left-3 z-20 flex items-center px-5 text-white">
        <div>
          <p className="m-0 mb-3 text-[10px] tracking-[0.35em] text-white/80 uppercase md:text-[12px] lg:text-[14px]">
            Dobrodošli u
          </p>

          <h1 className="m-0 font-serif text-[44px] leading-[0.9] md:text-[58px] lg:text-[76px]">
            Villa
            <br />
            Kamenjarka
          </h1>

          <p className="m-0 mt-5 text-[9px] tracking-[0.25em] text-white/80 uppercase md:text-[11px] lg:text-[13px]">
            Tradicija • Odmor • Doživljaj
          </p>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute inset-x-0 bottom-5 left-3 z-50 flex items-center justify-between px-5">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Prethodna slika"
            className="flex h-11 w-11 touch-manipulation items-center justify-center border border-white/50 bg-transparent p-0 text-white cursor-pointer"
          >
            <HiOutlineArrowLeft size={19} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Sljedeća slika"
            className="flex h-11 w-11 touch-manipulation items-center justify-center border border-white/50 bg-transparent p-0 text-white cursor-pointer"
          >
            <HiOutlineArrowRight size={19} />
          </button>
        </div>

        {/* COUNTER */}
        <div className="text-[10px] tracking-[0.25em] text-white md:text-[11px] lg:text-[12px]">
          {String(current + 1).padStart(2, "0")}

          <span className="mx-2 text-white/40">/</span>

          {String(images.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default HeroGallery;
