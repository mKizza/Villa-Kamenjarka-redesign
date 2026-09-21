import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const amenities = [
  {
    title: "Privatni bazen",
    image: "/images/amenities/bazen.webp",
    description:
      "Mjesto za osvježenje, sunčanje i potpuni odmor tijekom toplih hercegovačkih dana.",
  },
  {
    title: "Ljetna kuhinja",
    image: "/images/amenities/ljetna-kuhinja.webp",
    description: "Kamin, kuhinja i prostor za zajedničke obroke na otvorenom.",
  },
  {
    title: "Sport i rekreacija",
    image: "/images/amenities/nogomet.webp",
    description:
      "Cageball, stolni tenis, stolni nogomet i pikado za aktivan odmor.",
  },
  {
    title: "Za najmlađe",
    image: "/images/amenities/igraliste.webp",
    description:
      "Prostor za igru s trampolinom, ljuljačkama, toboganom i drugim sadržajima.",
  },
  {
    title: "Teretana",
    image: "/images/amenities/teretana.webp",
    description:
      "Prostor za trening i održavanje svakodnevne rutine i tijekom odmora.",
  },
];

function Amenities() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((current) => (current + 1) % amenities.length);
  }

  function previousSlide() {
    setCurrent(
      (current) => (current - 1 + amenities.length) % amenities.length,
    );
  }

  const amenity = amenities[current];

  return (
    <section
      id="amenities"
      className="relative h-[100dvh] w-full overflow-hidden bg-[#eee9df]"
    >
      <div className="flex h-full flex-col px-7 pt-9 pb-7">
        {/* SECTION TITLE */}
        <div className="relative left-3 flex items-center gap-3">
          <span className="h-px w-8 bg-black/40 md:w-10 lg:w-12" />

          <p className="m-0 text-[9px] tracking-[0.35em] text-black/60 uppercase md:text-[11px] lg:text-[13px]">
            Sadržaj
          </p>
        </div>

        {/* HEADING */}
        <h2 className="relative left-3 mt-5 font-serif text-[39px] leading-[0.95] tracking-[-0.02em] text-[#24211d] md:text-[52px] lg:text-[64px]">
          Sve što vam treba
          <br />
          za <span className="italic text-black/55">potpuni odmor.</span>
        </h2>

        {/* IMAGE */}
        <div className="relative mt-7 min-h-0 flex-1 overflow-hidden">
          <img
            key={amenity.image}
            src={amenity.image}
            alt={amenity.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* IMAGE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* NUMBER */}
          <p className="absolute top-5 left-5 m-0 text-[9px] tracking-[0.25em] text-white/70 md:text-[11px] lg:text-[12px]">
            {String(current + 1).padStart(2, "0")}
          </p>

          {/* IMAGE TEXT */}
          <div className="absolute right-5 bottom-5 left-5 text-white">
            <h3 className="m-0 font-serif text-[31px] leading-none md:text-[40px] lg:text-[48px]">
              {amenity.title}
            </h3>

            <p className="mt-3 max-w-[290px] text-[11px] leading-[1.6] text-white/70 md:max-w-[400px] md:text-[13px] lg:max-w-[500px] lg:text-[15px]">
              {amenity.description}
            </p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousSlide}
              className="flex size-11 items-center justify-center border border-black/25 bg-transparent p-0 text-black cursor-pointer"
              aria-label="Prethodni sadržaj"
            >
              <HiOutlineArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex size-11 items-center justify-center border border-black/25 bg-transparent p-0 text-black cursor-pointer"
              aria-label="Sljedeći sadržaj"
            >
              <HiOutlineArrowRight size={18} />
            </button>
          </div>

          {/* PROGRESS */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] tracking-[0.2em] text-black/70 md:text-[10px] lg:text-[11px]">
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-14 bg-black/15">
              <div
                className="h-px bg-black transition-all duration-300"
                style={{
                  width: `${((current + 1) / amenities.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-[9px] tracking-[0.2em] text-black/40 md:text-[10px] lg:text-[11px]">
              {String(amenities.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
