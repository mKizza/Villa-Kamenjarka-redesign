function About() {
  return (
    <section id="about" className="relative h-[100svh] w-full overflow-hidden">
      {/* BACKGROUND */}
      <img
        src="/images/about/kamenjarka-about.webp"
        alt="Villa Kamenjarka"
        className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* SMALL TITLE */}
      <div className="absolute top-10 left-7 z-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/60 md:w-10 lg:w-12" />

          <p className="m-0 text-[9px] tracking-[0.35em] text-white/80 uppercase md:text-[11px] lg:text-[13px]">
            O Villi Kamenjarka
          </p>
        </div>

        <p className="mt-3 ml-11 text-[8px] tracking-[0.25em] text-white/55 uppercase md:text-[10px] lg:ml-15 lg:text-[11px]">
          Široki Brijeg • Hercegovina
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="absolute inset-x-0 bottom-7 left-3 z-20 px-7 text-white">
        <h2 className="m-0 font-serif text-[43px] leading-[0.95] tracking-[-0.02em] md:text-[55px] lg:text-[70px]">
          Mjesto gdje
          <br />
          kamen čuva
          <br />
          <span className="italic text-white/75">priču.</span>
        </h2>

        <p className="mt-6 max-w-[340px] text-[13px] leading-[1.7] text-white/75 md:max-w-[440px] md:text-[15px] lg:max-w-[520px] lg:text-[17px]">
          Villa Kamenjarka je seosko utočište u srcu Hercegovine koje spaja
          tradicionalni šarm kamene kuće s udobnošću modernog odmora.
        </p>

        {/* STATS */}
        <div className="mt-7 grid grid-cols-3 border-t border-white/30 pt-5">
          <div className="text-center">
            <p className="m-0 font-serif text-[27px] md:text-[32px] lg:text-[38px]">
              8+2
            </p>

            <p className="mt-1 text-[7px] tracking-[0.2em] text-white/60 uppercase md:text-[8px] lg:text-[10px]">
              Gostiju
            </p>
          </div>

          <div className="text-center">
            <p className="m-0 font-serif text-[27px] md:text-[32px] lg:text-[38px]">
              3
            </p>

            <p className="mt-1 text-[7px] tracking-[0.2em] text-white/60 uppercase md:text-[8px] lg:text-[10px]">
              Spavaće sobe
            </p>
          </div>

          <div className="text-center">
            <p className="m-0 font-serif text-[27px] md:text-[32px] lg:text-[38px]">
              3
            </p>

            <p className="mt-1 text-[7px] tracking-[0.2em] text-white/60 uppercase md:text-[8px] lg:text-[10px]">
              Kupatila
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
