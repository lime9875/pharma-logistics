import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";

import abstractRing from "@/assets/abstract-ring.jpg";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs & Testimonials — Pharma Logistics" },
      {
        name: "description",
        content:
          "What customers say about Pharma Logistics, and answers to common questions about cold chain storage, GDP compliance and pharmaceutical distribution.",
      },
      { property: "og:title", content: "FAQs & Testimonials — Pharma Logistics" },
      {
        property: "og:description",
        content:
          "Customer testimonials and answers about cold chain storage, GDP compliance and pharmaceutical distribution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faqs,
});

const TESTIMONIALS = [
  {
    quote:
      "Their commitment to cold chain integrity and precise temperature control has given us total confidence in our supply chain. A truly dependable logistics partner.",
    highlight:
      "Their strict adherence to GDP and climate-controlled storage gives us total peace of mind for our temperature-sensitive vaccines and pharmaceuticals.",
    name: "Quality Assurance Lead",
    org: "BioLife Solutions",
  },
  {
    quote:
      "Their automated dashboard and live tracking gave us complete visibility over our medical stock. They turned our complex distribution process into a seamless operation.",
    highlight: null,
    name: "Elena Rostova",
    org: "Quality Assurance Lead, BioLife Solutions",
  },
  {
    quote:
      "We've worked with other logistics providers before, but their strict compliance, real-time monitoring, and flawless execution truly set them apart in pharma distribution.",
    highlight: null,
    name: "Gabriel Shelby",
    org: "Owner, Stipple Unlimited",
  },
];

const FAQS = [
  {
    q: "What temperature ranges do you support?",
    a: "We operate validated ambient (15°C–25°C), refrigerated (2°C–8°C) and frozen storage zones, each with continuous automated monitoring and alarmed excursion response.",
  },
  {
    q: "Are your facilities GDP compliant?",
    a: "Yes. Our warehouses and transport operations follow Good Distribution Practice guidelines, with full documentation, regular audits and qualified personnel at every step.",
  },
  {
    q: "How do you track batches and expiry dates?",
    a: "Our warehouse management system enforces FEFO (First Expired, First Out) rotation with barcode-level batch tracking, automated expiry alerts and recall-ready traceability reports.",
  },
  {
    q: "Can I monitor my inventory in real time?",
    a: "Absolutely. Every client gets access to a live dashboard showing inventory status, temperature history, order progress and compliance reports — updated continuously.",
  },
  {
    q: "What happens during a temperature excursion?",
    a: "Alarms trigger immediately and our 24/7 response team isolates affected stock, documents the event, and works with your quality team on disposition decisions.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {/* Testimonials band */}
      <section className="band-blue relative overflow-hidden pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
          <h1 className="text-outline-glow animate-fade-up text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl">
            What Customers Say
          </h1>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={t.name + i}
                className="animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <Quote className="size-6 text-frost/70" />
                <blockquote className="mt-4 font-mono text-sm leading-relaxed text-frost">
                  {t.quote}
                </blockquote>
                {t.highlight && (
                  <p className="mt-4 font-mono text-sm font-bold uppercase leading-relaxed tracking-wide text-primary-foreground">
                    {t.highlight}
                  </p>
                )}
                <figcaption className="mt-5 font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground">
                  {t.name}
                  <span className="mt-1 block text-xs font-normal normal-case text-frost/80">
                    {t.org}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="relative mx-auto max-w-4xl px-5 py-20 md:py-28">
        <img
          src={abstractRing}
          alt=""
          aria-hidden
          className="animate-float pointer-events-none absolute -left-32 top-10 w-64 opacity-50 mix-blend-screen"
        />
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className="card-glass overflow-hidden rounded-3xl">
                <button
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-mono text-sm font-bold uppercase tracking-wide text-primary-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-ice transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="px-7 pb-6 font-mono text-sm leading-relaxed text-frost/90">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            Still have questions?
          </p>
          <Link
            to="/contact"
            className="btn-cta hover:btn-cta-hover mt-4 inline-block rounded-xl px-8 py-3 font-mono text-sm font-bold tracking-widest"
          >
            PARTNER WITH US
          </Link>
        </div>
      </section>
    </div>
  );
}
