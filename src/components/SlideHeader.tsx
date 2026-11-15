export function SlideHeader({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-6 md:mb-8">
      <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-hospice-gold uppercase mb-2">
        {eyebrow}
      </p>
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-hospice-green-dark leading-tight">
        {title}
      </h2>
    </div>
  )
}
