import { useState } from "react";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineXMark,
} from "react-icons/hi2";

const images = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
  "/images/gallery/gallery-5.webp",
  "/images/gallery/gallery-6.webp",
];

const imagesBackground = [
  "/images/gallery/gallery-background1.webp",
  "/images/gallery/gallery-background2.webp",
  "/images/gallery/gallery-background3.webp",
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function openImage(index) {
    setCurrent(index);
    setOpen(true);
  }

  function nextImage() {
    setCurrent((current) => (current + 1) % images.length);
  }

  function previousImage() {
    setCurrent((current) => (current - 1 + images.length) % images.length);
  }

  return (
    <>
      <section
        id="gallery"
        className="relative h-[100svh] w-full overflow-hidden bg-[#1d1c19]"
      >
        <div className="flex h-full flex-col px-7 pt-9 pb-7">
          {/* SMALL TITLE */}
          <div className="relative left-3 flex items-center gap-3">
            <span className="h-px w-8 bg-white/40 md:w-10 lg:w-12" />

            <p className="m-0 text-[9px] tracking-[0.35em] text-white/60 uppercase md:text-[11px] lg:text-[13px]">
              Galerija
            </p>
          </div>

          {/* HEADING */}
          <h2 className="relative left-3 mt-5 font-serif text-[39px] leading-[0.95] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]">
            Pogledajte
            <br />
            <span className="italic text-white/55">Villu Kamenjarka.</span>
          </h2>

          {/* IMAGES */}
          <div className="mt-7 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2">
            {/* BIG IMAGE */}
            <button
              type="button"
              onClick={() => openImage(0)}
              className="relative row-span-2 overflow-hidden border-0 bg-transparent p-0"
            >
              <img
                src={images[0]}
                alt="Villa Kamenjarka"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="absolute bottom-4 left-4 text-[8px] tracking-[0.25em] text-white/70 md:text-[10px] lg:text-[11px]">
                01
              </span>
            </button>

            {/* TOP RIGHT */}
            <button
              type="button"
              onClick={() => openImage(1)}
              className="relative overflow-hidden border-0 bg-transparent p-0"
            >
              <img
                src={imagesBackground[1]}
                alt="Villa Kamenjarka"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 text-[8px] tracking-[0.25em] text-white/70 md:text-[10px] lg:text-[11px]">
                02
              </span>
            </button>

            {/* BOTTOM RIGHT */}
            <button
              type="button"
              onClick={() => openImage(2)}
              className="relative overflow-hidden border-0 bg-transparent p-0"
            >
              <img
                src={images[2]}
                alt="Villa Kamenjarka"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="m-0 font-serif text-[28px] md:text-[36px] lg:text-[44px]">
                    +{images.length - 3}
                  </p>

                  <p className="mt-1 text-[7px] tracking-[0.25em] text-white/65 uppercase md:text-[9px] lg:text-[10px]">
                    Fotografije
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* BOTTOM */}
          <div className="mt-5 flex items-center justify-between">
            <p className="m-0 max-w-[180px] text-[9px] leading-[1.6] text-white/45 md:max-w-[260px] md:text-[11px] lg:max-w-[340px] lg:text-[13px]">
              Zavirite u svaki kutak Ville Kamenjarka.
            </p>

            <button
              type="button"
              onClick={() => openImage(0)}
              className="border-b border-white/40 bg-transparent px-0 py-2 text-[8px] tracking-[0.25em] text-white uppercase md:text-[10px] lg:text-[11px]"
            >
              Otvori galeriju
            </button>
          </div>
        </div>
      </section>

      {/* FULLSCREEN GALLERY */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black">
          <img
            src={images[current]}
            alt="Villa Kamenjarka"
            className="h-full w-full object-contain"
          />

          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 flex size-11 items-center justify-center border border-white/40 bg-black/20 p-0 text-white cursor-pointer"
            aria-label="Zatvori galeriju"
          >
            <HiOutlineXMark size={22} />
          </button>

          {/* CONTROLS */}
          <div className="absolute right-6 bottom-7 left-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousImage}
                className="flex size-11 items-center justify-center border border-white/40 bg-black/30 p-0 text-white cursor-pointer"
              >
                <HiOutlineArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="flex size-11 items-center justify-center border border-white/40 bg-black/30 p-0 text-white cursor-pointer"
              >
                <HiOutlineArrowRight size={18} />
              </button>
            </div>

            <p className="m-0 text-[9px] tracking-[0.25em] text-white/70 md:text-[10px] lg:text-[12px]">
              {String(current + 1).padStart(2, "0")}
              <span className="mx-2 text-white/30">/</span>
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
