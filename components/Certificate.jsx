"use client";

import Image from "next/image";
import { useState } from "react";
import { XSquareIcon } from "@phosphor-icons/react";

const certificates = [
  {
    title: "English",
    image: "/certi/english.png",
    link: "https://drive.google.com/file/d/1xgk9LFfcnlMXjSgypDAnycpYXwXXZFkW/view?usp=drive_link",
  },
  {
    title: "Microsoft Office",
    image: "/certi/microsoft.png",
    link: "https://drive.google.com/file/d/1lLk0dwcGv0wWzCCpIh3t7waQC4QbL3_O/view?usp=drive_link",
  },
  {
    title: "Red Hat By Red Hat Academy",
    image: "/certi/redhat.png",
    link: "https://drive.google.com/file/d/1YlGA2avnqK3tqCztUFxPUm2CnK23pql8/view?usp=drive_link",
  },
  {
    title: "Coding Camp Software Engineer By RevoU",
    image: "/certi/SE.png",
    link: "https://drive.google.com/file/d/1WVtLPJk_iaKsD86O9Ej-Qdwlsp6KHoSy/view?usp=drive_link",
  },
];

export default function Certificate() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* SECTION */}
      <section
        id="certificate"
        className="py-32 px-6 md:px-12 bg-[#0c0c0c] text-white"
      >
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-xl tracking-widest uppercase opacity-50">
            Certificates
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {certificates.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(item)}
                className="group text-left cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <Image
                    src={
                      item.image
                        ? item.image
                        : "/certificate-placeholder.jpg"
                    }
                    alt={item.title}
                    fill
                    className="object-cover grayscale
                      group-hover:grayscale-0
                      group-hover:scale-105
                      transition-all duration-700"
                  />
                </div>

                <p className="mt-3 text-xs opacity-60">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
            flex items-center justify-center px-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-xs opacity-60 hover:opacity-100 text-red-600 cursor-pointer"
            >
              <XSquareIcon size={32} />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={
                  active.image
                    ? active.image
                    : "/certificate-placeholder.jpg"
                }
                alt={active.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm">{active.title}</p>

              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-80 hover:opacity-100"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
