import Link from 'next/link'
import { Open_Sans, Montserrat } from 'next/font/google'
import { Button, Modal } from 'flowbite-react'
import serialize from '@/components/richtext/serialize'
import TechStack from '@/components/ui/TechStack'
import { ProjectProps } from '@/types/ProjectProps'
import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const ProjectModal = ({
  title,
  project_overview,
  website_type,
  key_features,
  tech_stacks,
  demo_link,
  screenshot_link,
  isOpen,
  onClose,
}: ProjectProps) => {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header className={open_sans.className}>{title}</Modal.Header>
      <Modal.Body className={open_sans.className}>
        <div className="space-y-6">
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>
              Project Overview
            </div>
            <div>{serialize(project_overview)}</div>
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>Type</div>
            <div>{website_type}</div>
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>Key Features</div>
            {serialize(key_features)}
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'mb-1 uppercase text-cyan-700')}>
              Tech Stack
            </div>
            <div className="grid grid-cols-4 flex-wrap gap-6 md:grid-cols-8">
              {tech_stacks.map((tech, index) => (
                <TechStack key={index} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        {demo_link && (
          <Button
            as={Link}
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              montserrat.className,
              'border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900',
            )}
          >
            Demo
          </Button>
        )}
        {screenshot_link && (
          <Button
            as={Link}
            href={screenshot_link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              montserrat.className,
              'border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900',
              {
                'border border-gray-200 bg-white uppercase text-gray-900 hover:border-gray-300 hover:bg-gray-200':
                  demo_link,
              },
            )}
          >
            Screenshot
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal
