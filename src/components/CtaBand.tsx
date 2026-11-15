import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Let's build a cleaner, greener operation together.",
  text = "Tell us about your facility and we'll recommend the right system — from colour-coded tools to chemical-free ozone cleaning.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest-900 px-8 py-16 sm:px-16">
        <Image quality={85} src="/images/bg5.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-leaf-500/40 blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-medium !text-white sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg text-white/75">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact" className="btn-primary">
              Request a consultation →
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
