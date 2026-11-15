import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-forest-950 px-6 pt-20 text-center">
      <div>
        <p className="font-display text-8xl text-lime-300">404</p>
        <h1 className="mt-4 text-4xl !text-white">This page has been swept away.</h1>
        <p className="mt-4 text-white/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back home</Link>
          <Link href="/products" className="btn-ghost">View products</Link>
        </div>
      </div>
    </section>
  );
}
