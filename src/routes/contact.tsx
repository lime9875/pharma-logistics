import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pharma Logistics" },
      {
        name: "description",
        content:
          "Get in touch with Pharma Logistics — Pharma Logistics Park, Zone 4, Cairo, Egypt. Call +20 2 1234 5678 or email contact@pharmalogistics.com.",
      },
      { property: "og:title", content: "Contact — Pharma Logistics" },
      {
        property: "og:description",
        content:
          "Get in touch with Pharma Logistics in Cairo, Egypt for cold chain and pharmaceutical distribution services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Pharma Logistics Park, Zone 4, Cairo, Egypt",
  },
  { icon: Phone, label: "+20 2 1234 5678" },
  { icon: Mail, label: "contact@pharmalogistics.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <section className="band-blue-soft pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
          <h1 className="text-outline-glow animate-fade-up max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-7xl">
            Have questions?
            <br />
            Get in touch
          </h1>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {CONTACT_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className="animate-fade-up flex items-center gap-4"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card/60 text-ice">
                    <item.icon className="size-5" />
                  </span>
                  <p className="font-mono text-sm leading-relaxed text-frost">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="card-glass animate-fade-up rounded-[2rem] p-8 [animation-delay:150ms]">
              {sent ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-12 text-ice" />
                  <h2 className="mt-4 font-mono text-lg font-bold uppercase tracking-wide text-primary-foreground">
                    Message sent
                  </h2>
                  <p className="mt-2 font-mono text-sm text-frost/90">
                    Our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-frost">
                      Name
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="rounded-xl border border-input bg-background/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-frost">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="rounded-xl border border-input bg-background/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-frost">
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="resize-none rounded-xl border border-input bg-background/40 px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                      placeholder="Tell us about your storage or distribution needs"
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn-cta hover:btn-cta-hover mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-mono text-sm font-bold tracking-widest"
                  >
                    SEND MESSAGE <Send className="size-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
