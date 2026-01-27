"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Budget Tracker",
    tech: "Next.js • Tailwind",
    image: "/portfolio/budget.png",
    desc: "Budget Tracker is a full-stack budget management application built with Next.js, TypeScript, and Tailwind CSS. The backend is powered by Express.js and Sequelize ORM, enabling structured data management and API-based communication. The project focuses on implementing CRUD operations, RESTful APIs, and a responsive UI, with guidance from educational content by Dea Afrizal on YouTube.",
    url: "https://budget-tracker-galih.vercel.app/",
  },
  {
    title: "Digital Clock",
    tech: "React • Javascript",
    image: "/portfolio/digitalclock.PNG",
    desc: "Digital Clock is a beginner-level React project created to practice fundamental concepts such as component-based architecture, state management, and real-time data rendering using JavaScript. This project marks my first experience working with the React library. ",
    url: "https://galihyekti-digitalclock-react.vercel.app/",
  },
  {
    title: "Warungku",
    tech: "HTML • CSS • BootStrap",
    image: "/portfolio/warungku_v1.png",
    desc: "I try to built a profile website for a small business (UMKM) using Bootstrap. The project emphasizes responsive design, clear content structure, and a clean user interface suitable for small business needs. ",
    url: "https://profile-toko.vercel.app/",
  },
  {
    title: "Suitmedia | Intern",
    tech: "NextJs • JavaScript",
    image: "/portfolio/suitmedia.png",
    desc: "This website was created as an attempt to complete an internship entrance test, where I explored my abilities in building responsive and functional web applications.",
    url: "https://suitmedia-frontend-test-one.vercel.app/",
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Scroll reveal cards */
      gsap.from(".project-card", {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      /* Parallax image */
      gsap.utils.toArray(".project-image").forEach((img) => {
        gsap.fromTo(
          img,
          { y: -40 },
          {
            y: 40,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-xl tracking-widest uppercase opacity-50">
          Portfolio
        </p>

        <div className="grid md:grid-cols-2 gap-20">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <div className="project-image absolute inset-0">
                  <Image
                    src={project.image || "/project-placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale
            group-hover:grayscale-0
            group-hover:scale-105
            transition-all duration-700"
                  />
                </div>
              </div>

              {/* TEXT */}
              <p className="mt-4 text-xl tracking-wide hover:text-green-300">{project.title}</p>
              <p className="mt-1 text-m opacity-60">{project.tech}</p>
              <p className="mt-1 text-m opacity-60">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
