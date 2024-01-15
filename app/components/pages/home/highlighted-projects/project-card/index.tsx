import Image from 'next/image'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/all'
export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Projetos Refeitorio"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt="Icon Green"
          />
          SisNutri
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex id
          laudantium nihil odio, temporibus vel vitae! Blanditiis delectus dolor
          error, facilis maxime mollitia natus nostrum nulla vel vitae!
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>
        <Link href="/projects/sis-nutri">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
