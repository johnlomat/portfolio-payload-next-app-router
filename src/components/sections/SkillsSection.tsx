import { HeadingTwo } from '@/components/ui/HeadingPreset'
import SkillItem from '@/components/ui/SkillItem'
import { TechnologyProps } from '@/types/TechnologyProps'

const SkillsSection = async () => {
  const skillsData = await fetch(`${process.env.PAYLOAD_SITE_URL}/api/skills`, {
    next: {
      revalidate: 60,
    },
  }).then(async (response) => (await response.json()).docs)

  const usingNow = skillsData.find((skill: any) => skill.title == 'Using now')
  const learning = skillsData.find((skill: any) => skill.title == 'Learning')
  const otherSkills = skillsData.find((skill: any) => skill.title == 'Other skills')

  return (
    <section className="py-24 font-montserrat" id="skills">
      <div className="container flex flex-wrap space-y-6">
        <div className="flex w-full flex-col items-center space-y-20">
          <HeadingTwo title="Skills" />

          <div className="w-full max-w-[52.75rem] text-left">
            <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
              <h3>Using now:</h3>
            </div>
            <div className="flex flex-wrap gap-y-12">
              {usingNow.technologies.map((skill: TechnologyProps, index: number) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="w-full max-w-[52.75rem] text-left">
            <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
              <h3>Learning:</h3>
            </div>
            <div className="flex flex-wrap gap-y-12">
              {learning.technologies.map((skill: TechnologyProps, index: number) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="w-full max-w-[52.75rem] text-left">
            <div className="mb-10 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] text-neutral-900 lg:text-left">
              <h3>Other skills:</h3>
            </div>
            <div className="flex flex-wrap gap-y-12">
              {otherSkills.technologies.map((skill: TechnologyProps, index: number) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
