import { Children } from '@/types/SlateChildrenProps'
import { TechnologyProps } from '@/types/TechnologyProps'

export interface ProjectProps {
  title: string
  featured_image?: FeaturedImage
  project_overview: Children
  website_type: string
  key_features: Children
  tech_stacks: TechnologyProps[]
  demo_link?: string
  screenshot_link?: string
  isOpen?: boolean
  onClose?: () => void
}

export interface FeaturedImage {
  url: string
  alt: string
  width: number
  height: number
}
