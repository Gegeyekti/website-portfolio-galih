"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);
  const logosRef = useRef([]);

  const techs = [
    {
      name: "HTML",
      slug: "html",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      slug: "css",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      slug: "js",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "React", slug: "react", url: "https://react.dev" },
    { name: "TypeScript", slug: "ts", url: "https://www.typescriptlang.org" },
    { name: "Next.js", slug: "next", url: "https://nextjs.org" },
  ];

  useEffect(() => {
    // Animasi teks
    gsap.from(textRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    // Animasi logo stagger
    logosRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        },
      );
    });
  }, []);

  return (
    <section id="about" className="relative py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* LEFT LOGOS */}
        <div className="flex flex-row md:flex-col items-center gap-4 sm:gap-5 md:gap-6">
          {techs.map((tech) => (
            <a
              key={tech.slug}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tech.name}
              className="group transition-transform hover:scale-110"
            >
              <Image
                src={`/logo/${tech.slug}.png`}
                alt={`/${tech.name} logo`}
                width={48}
                height={48}
                className=" w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition"
              />
            </a>
          ))}
        </div>

        {/* RIGHT TEXT */}
        <div ref={textRef} className="md:w-3/4">
          <p className="text-xl uppercase tracking-widest opacity-50">
            About Me
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-light leading-tight">
            Passionate Frontend Developer
            <br />
            Exploring Next.js & Modern Web
          </h2>

          <p className="mt-8 text-base leading-relaxed opacity-70">
            I am a fresh graduate with a strong interest in frontend
            development. Currently, I am focusing on learning Next.js while
            gradually exploring backend technologies. I enjoy discovering new
            tools and concepts, constantly improving my skills, and applying
            them to build clean and functional interfaces. In my free time, I
            like following football news and exploring the official websites of
            football clubs, which inspires me and sparks new ideas for web
            design.
          </p>

          {/* CTA Button */}
          <a
            href="/cv/CV_GALIH PARLAMBANG YEKTI_V2.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-green-200 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
