import { createFileRoute, Link } from "@tanstack/react-router";
import { Thermometer, PackageCheck, Radar } from "lucide-react";

import heroWarehouse from "@/assets/hero-warehouse.jpg";
import abstractRing from "@/assets/abstract-ring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pharma Logistics — Cold Chain & Inventory Management" },
      {
        name: "description",
        content:
          "High-standard cold chain storage and pharmaceutical inventory management. Safety, precision and compliance across every step of medical distribution.",
      },
      { property: "og:title", content: "Pharma Logistics — Cold Chain & Inventory Management" },
      {
        property: "og:description",
        content:
          "High-standard cold chain storage and pharmaceutical inventory management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PAIN_POINTS = [
  {
    icon: Thermometer,
    title: "Challenged by cold chain complexity?",
    body: "We provide dedicated temperature-controlled storage solutions, monitoring environmental factors continuously to guarantee product stability and full regulatory compliance.",
  },
  {
    icon: PackageCheck,
    title: "Struggling with inventory inaccuracies?",
    body: "Every supply chain is unique. Our advanced warehouse systems enforce strict FEFO stock rotation and real-time tracking tailored to your specific batch and expiry management needs.",
  },
  {
    icon: Radar,
    title: "Need real-time shipment visibility?",
    body: "We operate with total operational transparency, delivering live inventory status, automated order updates, and continuous compliance reports through an intuitive dashboard.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="band-blue relative overflow-hidden pt-24 md:pt-28">
        <img
          src={abstractRing}
          alt=""
          aria-hidden
          className="animate-float pointer-events-none absolute -right-24 -top-16 w-72 opacity-80 mix-blend-screen md:w-96"
        />
        <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2 md:items-end md:pb-24">
          <div className="card-glass animate-fade-up rounded-[2.5rem] p-8 md:p-12">
            <p className="font-mono text-xs tracking-[0.3em] text-frost">
              CREATIVE STUDIO + LAB
            </p>
            <h1 className="text-outline-glow mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl">
              Pharma
              <br />
              Logistics
            </h1>
            <p className="mt-8 max-w-sm font-mono text-sm leading-relaxed tracking-wide text-frost">
              HIGH-STANDARD COLD CHAIN & INVENTORY MANAGEMENT
            </p>
            <Link
              to="/services"
              className="btn-cta hover:btn-cta-hover mt-10 inline-block rounded-xl px-8 py-3 font-mono text-sm font-bold tracking-widest"
            >
              LEARN MORE
            </Link>
          </div>

          <div className="animate-fade-up overflow-hidden rounded-[2.5rem] border border-border shadow-2xl [animation-delay:150ms]">
            <img
              src={heroWarehouse}
              alt="Temperature-controlled pharmaceutical warehouse with stocked shelving"
              width={1024}
              height={1280}
              className="h-72 w-full object-cover md:h-[30rem]"
            />
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <h2 className="animate-fade-up text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          Ensuring safety, precision, and compliance across every step of medical
          distribution.
        </h2>
      </section>

      {/* Pain-point cards */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map((card, i) => (
            <article
              key={card.title}
              className="card-glass animate-fade-up rounded-[2rem] p-8"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <card.icon className="size-8 text-ice" />
              <h3 className="mt-5 font-mono text-lg font-bold uppercase leading-snug tracking-wide text-primary-foreground">
                {card.title}
              </h3>
              <p className="mt-4 font-mono text-sm leading-relaxed text-frost/90">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
