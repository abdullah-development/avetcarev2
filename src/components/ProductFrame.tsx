import Image from "next/image";

/** Shows a product photo whole (never cropped) inside a clean bordered frame. */
export default function ProductFrame({
  src,
  alt,
  sizes,
  className = "",
  pad = "p-6 sm:p-8",
  hover = false,
  priority = false,
  cover = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  pad?: string;
  hover?: boolean;
  priority?: boolean;
  /** Fill the frame (for lifestyle photos) instead of showing a cut-out product whole. */
  cover?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-sand-200 bg-gradient-to-br from-white to-sand-50 shadow-[inset_0_0_0_6px_white] ${className}`}
    >
      <div className={`absolute inset-0 ${cover ? "" : pad}`}>
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            quality={90}
            className={`${cover ? "object-cover" : "object-contain mix-blend-multiply"} ${hover ? "transition duration-700 group-hover:scale-105" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
