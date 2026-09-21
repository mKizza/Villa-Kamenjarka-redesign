import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const links = [
  { name: "Početna", href: "#home", number: "01" },
  { name: "O vili", href: "#about", number: "02" },
  { name: "Sadržaj", href: "#amenities", number: "03" },
  { name: "Galerija", href: "#gallery", number: "04" },
  { name: "Kontakt", href: "#contact", number: "05" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute top-0 right-0 left-0 z-50 px-7 pt-7">
        <div className="flex items-start justify-between">
          {/* LOGO */}
          <a href="#home" className="text-white no-underline">
            <p className="m-0 font-serif text-[17px] tracking-[0.15em] lg:text-[21px]">
              KAMENJARKA
            </p>

            <p className="m-0 mt-1.5 text-[8px] tracking-[0.25em] text-white/70 uppercase lg:text-[9px]">
              Tradicija u svakom detalju
            </p>
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="fixed top-1 right-1 z-[90] flex size-11 shrink-0 items-center justify-center border border-white/50 bg-transparent p-0 text-white lg:hidden"
            aria-label="Otvori izbornik"
          >
            <HiOutlineBars3 size={25} />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-10 lg:flex">
            <a
              href="#home"
              className="text-[13px] tracking-[0.18em] text-white/80 no-underline uppercase transition-colors hover:text-white"
            >
              Početna
            </a>

            <a
              href="#about"
              className="text-[13px] tracking-[0.18em] text-white/80 no-underline uppercase transition-colors hover:text-white"
            >
              O vili
            </a>

            <a
              href="#amenities"
              className="text-[13px] tracking-[0.18em] text-white/80 no-underline uppercase transition-colors hover:text-white"
            >
              Sadržaj
            </a>

            <a
              href="#gallery"
              className="text-[13px] tracking-[0.18em] text-white/80 no-underline uppercase transition-colors hover:text-white"
            >
              Galerija
            </a>

            <a
              href="#contact"
              className="border border-white/50 px-6 py-3.5 text-[13px] tracking-[0.18em] text-white no-underline uppercase transition-colors hover:bg-white hover:text-black"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1d1c19] text-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-7 pt-7 pb-7">
          {/* TOP */}
          <div className="flex items-start justify-between">
            <div>
              <p className="m-0 font-serif text-[17px] tracking-[0.15em]">
                KAMENJARKA
              </p>

              <p className="m-0 mt-1.5 text-[8px] tracking-[0.25em] text-white/45 uppercase">
                Tradicija u svakom detalju
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeMenu}
              className="flex size-11 items-center justify-center border border-white/30 bg-transparent p-0 text-white"
              aria-label="Zatvori izbornik"
            >
              <HiOutlineXMark size={22} />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-1 flex-col justify-center">
            <nav>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center border-b border-white/15 py-4 text-white no-underline"
                >
                  <span className="mr-5 text-[8px] tracking-[0.2em] text-white/30">
                    {link.number}
                  </span>

                  <span className="font-serif text-[34px] leading-none transition-all duration-300 group-hover:italic group-hover:text-white/60">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/15 pt-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="m-0 text-[7px] tracking-[0.3em] text-white/30 uppercase">
                  Lokacija
                </p>

                <p className="mt-2 font-serif text-[14px] text-white/65">
                  Široki Brijeg, Hercegovina
                </p>
              </div>

              <p className="m-0 text-[7px] tracking-[0.25em] text-white/25 uppercase">
                Villa Kamenjarka
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
