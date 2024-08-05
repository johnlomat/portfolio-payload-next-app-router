interface ProjectCardProps {
  title: string
  featured_image?: {
    url: string
    alt: string
    width: number
    height: number
  }
  project_overview: any[]
  website_type: string
  key_features: any[]
  tech_stacks: any[]
  demo_link?: string
  screenshot_link?: string
  isOpen?: boolean
  onClose?: () => void
}

export default ProjectCardProps
