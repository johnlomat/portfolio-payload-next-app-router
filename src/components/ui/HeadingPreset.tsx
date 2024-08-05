export const HeadingTwo = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div
      className={`${!className ? 'border-neutral-900 text-neutral-900' : className} inline-block border-4 px-5 py-3 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] md:px-12`}
    >
      <h2>{title}</h2>
    </div>
  )
}
