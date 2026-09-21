import { HiOutlinePhone, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative h-[100dvh] w-full overflow-hidden bg-[#1d1c19] text-white"
    >
      <div className="flex h-full flex-col px-7 pt-9 pb-7">
        {/* SMALL TITLE */}
        <div className="relative left-3 flex items-center gap-3">
          <span className="h-px w-8 bg-white/40 md:w-10 lg:w-12" />

          <p className="m-0 text-[9px] tracking-[0.35em] text-white/60 uppercase md:text-[11px] lg:text-[13px]">
            Kontakt
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative left-3 flex flex-1 flex-col justify-center pr-3">
          <p className="m-0 mb-4 text-[9px] tracking-[0.3em] text-white/45 uppercase md:text-[11px] lg:text-[13px]">
            Villa Kamenjarka
          </p>

          <h2 className="m-0 font-serif text-[46px] leading-[0.95] tracking-[-0.02em] md:text-[58px] lg:text-[72px]">
            Vaš odmor
            <br />
            počinje
            <br />
            <span className="italic text-white/55">ovdje.</span>
          </h2>

          <p className="mt-6 max-w-[310px] text-[12px] leading-[1.7] text-white/55 md:max-w-[420px] md:text-[14px] lg:max-w-[500px] lg:text-[16px]">
            Za rezervacije, dostupne termine i dodatne informacije slobodno nam
            se javite.
          </p>

          {/* ACTIONS */}
          <div className="mt-9 flex flex-col gap-3">
            <a
              href="tel:+38763274331"
              className="flex h-[58px] w-1/2 items-center justify-between border border-white/25 px-5 text-white no-underline"
            >
              <div className="flex items-center gap-4">
                <HiOutlinePhone size={15} />

                <span className="text-[10px] tracking-[0.22em] uppercase md:text-[11px] lg:text-[13px]">
                  Pozovite nas
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/38763274331"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[58px] w-1/2 items-center justify-between bg-[#eee9df] px-5 text-[#1d1c19] no-underline"
            >
              <div className="flex items-center gap-4">
                <HiOutlineChatBubbleLeftRight size={15} />

                <span className="text-[10px] tracking-[0.22em] uppercase md:text-[11px] lg:text-[13px]">
                  WhatsApp
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/15 pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="m-0 text-[8px] tracking-[0.3em] text-white/35 uppercase md:text-[9px] lg:text-[10px]">
                Lokacija
              </p>

              <p className="mt-2 font-serif text-[15px] text-white/75 md:text-[17px] lg:text-[19px]">
                Široki Brijeg, Hercegovina
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/villakamenjarka/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center border border-white/20 text-white/70"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61563280320579"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center border border-white/20 text-white/70"
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="m-0 text-[7px] tracking-[0.25em] text-white/25 uppercase md:text-[8px] lg:text-[9px]">
              Villa Kamenjarka
            </p>

            <p className="m-0 text-[7px] tracking-[0.25em] text-white/25 uppercase md:text-[8px] lg:text-[9px]">
              Hercegovina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
