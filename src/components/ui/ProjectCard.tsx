'use client'

import Image from 'next/image'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { ProjectProps } from '@/types/ProjectProps'
import ProjectModal from '@/components/ui/ProjectModal'

const ProjectCard = ({
  title,
  featured_image,
  project_overview,
  website_type,
  key_features,
  tech_stacks,
  demo_link,
  screenshot_link,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const ProjectModalData = {
    title,
    project_overview,
    website_type,
    key_features,
    tech_stacks,
    demo_link,
    screenshot_link,
  }

  return (
    <>
      <div className="group relative flex w-full md:w-1/2 lg:w-1/3">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black/20 transition-all ease-in-out group-hover:bg-white/10"></div>
        <Button
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-neutral-950 bg-cyan-700 font-montserrat font-bold uppercase text-white opacity-0 transition ease-in-out hover:bg-cyan-900 hover:text-white group-hover:opacity-100"
          onClick={handleOpenModal}
        >
          Details
        </Button>
        {featured_image ? (
          <Image
            src={featured_image.url}
            width={featured_image.width}
            height={featured_image.height}
            alt={featured_image.alt}
            className="text-white grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}
      </div>
      {isModalOpen && (
        <ProjectModal {...ProjectModalData} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default ProjectCard
