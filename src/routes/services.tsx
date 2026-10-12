import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import pharmacyShelves from "@/assets/pharmacy-shelves.jpg";
import abstractRing from "@/assets/abstract-ring.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Pharma Logistics" },
      {
        name: "description",
        content:
          "Cold chain control, inventory integrity and monitoring dashboards — seamless pharmaceutical supply chains through intelligent cold chain storage and compliant distribution networks.",
      },
      { property: "og:title", content: "Our Services — Pharma Logistics" },
      {
        property: "og:description",
        content:
          "Cold chain control, inventory integrity and monitoring dashboards for pharmaceutical supply chains.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const SERVICE_PILLS = [
  "COLD CHAIN CONTROL",
  "INVENTORY INTEGRITY",
  "MONITORING DASHBOARDS",
];

const PACKAGES = [
  {
    name: "Standard Storage / Basic",
    features: [
      "Ambient & temperature-controlled storage",
      "Basic inventory tracking & barcode logging",
      "Standard FEFO stock dispatching",
    ],
  },
  {
    name: "Cold Chain & Distribution",
    features: [
      "Dedicated 2°C – 8°C cold chain storage",
      "Real-time automated temperature monitoring",
      "Batch tracking & expiry management",
      "Validated cold chain distribution",
    ],
  },
  {
    name: "Integrated Supply Chain",
    features: [
      "Full end-to-end pharmaceutical logistics",
      "24/7 climate monitoring & emergency response",
      "Custom compliance reporting & audits",
    ],
  },
];

function Services() {
  return (
    <div>
      {/* Intro band */}
      <section className="band-blue-soft relative overflow-hidden pt-28 md:pt-36">
        <div className="mx-auto max-w-4xl px-5 pb-16 text-center md:pb-24">
          <h1 className="text-outline-glow animate-fade-up text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl">
            Optimize your operations.
          </h1>
          <p className="animate-fade-up mx-auto mt-8 max-w-xl font-mono text-sm leading-relaxed text-frost [animation-delay:120ms]">
            We build seamless pharmaceutical supply chains through intelligent cold
            chain storage and compliant distribution networks.
          </p>
          <p
            dir="rtl"
            lang="ar"
            className="animate-fade-up mx-auto mt-6 max-w-xl text-lg font-semibold leading-relaxed text-primary-foreground [animation-delay:200ms]"
          >
            نقوم بتمكين وتعزيز سلاسل التوريد الدوائية عبر حلول التخزين البارد الذكي
            وشبكات التوزيع الممتثلة للمواصفات.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          OUR SERVICES
        </h2>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            {SERVICE_PILLS.map((pill, i) => (
              <div
                key={pill}
                className="pill-gradient animate-fade-up w-fit rounded-full px-10 py-4 font-mono text-sm font-bold tracking-widest"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {pill}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-sm font-bold text-ice transition-colors hover:text-foreground"
            >
              REQUEST A CONSULTATION <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={abstractRing}
              alt=""
              aria-hidden
              className="animate-float pointer-events-none absolute -bottom-10 -right-10 w-48 opacity-70 mix-blend-screen"
            />
            <div className="overflow-hidden rounded-[2.5rem] border border-border shadow-2xl">
              <img
                src={pharmacyShelves}
                alt="Pharmacy shelves stocked with medicine and healthcare products"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-80 w-full object-cover md:h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="band-blue-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <h2 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Our packages
          </h2>
          <p className="mt-4 max-w-md font-mono text-sm leading-relaxed text-frost">
            Select the right operational package tailored to your pharmaceutical
            storage and distribution scale.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg, i) => (
              <article
                key={pkg.name}
                className="card-glass animate-fade-up rounded-[2rem] p-8"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <h3 className="font-mono text-lg font-bold uppercase leading-snug tracking-wide text-primary-foreground">
                  {pkg.name}
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 font-mono text-sm leading-relaxed text-frost/90"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ice" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
