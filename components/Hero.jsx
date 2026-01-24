"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
    );

    gsap.to(imageRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden text-white bg-[#0c0c0c]"
    >
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* LEFT — TEXT */}
          <div ref={textRef} className="relative md:w-1/2 mt-16">
            {/* META */}
            <p className="mb-6 text-xl tracking-widest uppercase opacity-50 hover:opacity-70 transition-opacity duration-300 cursor-default">
              Personal Portfolio — 2026
            </p>

            {/* SIGNATURE BACKGROUND */}
            <div className="pointer-events-none absolute -top-10 left-0 w-[420px] opacity-20">
              <Image
                src="/logo/signature.png"
                alt="Signature"
                width={800}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* FOREGROUND TEXT */}
            <p className="text-2xl sm:text-3xl uppercase tracking-widest opacity-70 cursor-default">
              Galih Parlambang Yekti
            </p>

            <p className="mt-8 max-w-lg text-base leading-relaxed opacity-70 text-justify cursor-default">
              A fresh graduate with a growing interest in frontend development.
              I enjoy learning new things, experimenting with interfaces, and
              currently deepening my skills in Next.js and backend fundamentals.
            </p>
            <p className="mt-4 text-xs tracking-widest opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
              Available for internship / junior role
            </p>
            <p className="mt-4 text-xs tracking-widest opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default">
              Based in Indonesia
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div
            ref={imageRef}
            className="
              relative md:w-1/2
              w-[360px] sm:w-[480px] md:w-[620px] lg:w-[720px]
              aspect-[3/4]
              md:-mr-32
            "
          >
            <Image
              src="/logo/galih.png"
              alt="Portrait"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
