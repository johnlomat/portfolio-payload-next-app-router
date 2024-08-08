import Image from 'next/image'
import { TechnologyProps } from '@/types/TechnologyProps'

const SkillItem = ({
  technology: {
    title,
    image_details: { alt, url, width, height },
  },
}: TechnologyProps) => (
  <div className="flex w-1/2 flex-col items-center p-[0.9375rem] sm:p-0 md:w-1/3 lg:w-1/4">
    <div className="mb-4 flex h-[6.25rem] w-[6.25rem] items-center justify-center">
      <Image src={url} alt={alt} width={width} height={height} />
    </div>
    <span className="text-center uppercase text-[#212121]">{title}</span>
  </div>
)

export default SkillItem
