import { cn } from '@/lib/utils'

export const HeadingTwo = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div
      className={cn(
        'inline-block border-4 border-neutral-900 px-5 py-3 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 md:px-12',
        className,
      )}
    >
      <h2>{title}</h2>
    </div>
  )
}
