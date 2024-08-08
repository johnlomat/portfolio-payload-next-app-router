import Image from 'next/image'
import { Tooltip, Flowbite } from 'flowbite-react'
import TooltipTheme from '@/components/themes/flowbite-react/TooltipTheme'
import { TechnologyProps } from '@/types/TechnologyProps'

const TechStack = ({
  technology: {
    title,
    image_details: { alt, url, width, height },
  },
}: TechnologyProps) => (
  <div className="relative flex items-center justify-center">
    <Flowbite theme={{ theme: TooltipTheme }}>
      <Tooltip content={title}>
        <Image src={url} alt={alt} width={width} height={height} />
      </Tooltip>
    </Flowbite>
  </div>
)

export default TechStack
