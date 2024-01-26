import { SectionTitle } from '@/app/components/section-title'
import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { ProjectCard } from '@/app/components/pages/home/highlighted-projects/project-card'
import { HiArrowNarrowRight } from 'react-icons/all'
import { Link } from '@/app/components/link'

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Meus Projetos" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
