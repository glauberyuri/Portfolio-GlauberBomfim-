import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { Button } from '@/app/components/button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe, HiArrowNarrowLeft } from 'react-icons/all'
import { Link } from '@/app/components/link'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-red-50"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(/images/sisNutriPainel.png) no-repeat  center/cover',
        }}
      />
      <SectionTitle
        title="SisNutri"
        subtitle="projetos"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Sistema de Gestão de Alimentos Hospitalares é uma solução de software
        abrangente desenvolvida usando Laravel, projetada especificamente para
        agilizar e aprimorar o processo de pedido e gerenciamento de serviços de
        alimentação em hospitais.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Laravel" />
        <TechBadge name="PHP" />
        <TechBadge name="Jquery" />
        <TechBadge name="JavaScript" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="www.github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositorio
          </Button>
        </a>
        <a href="www.github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft />
        Volta os projetos
      </Link>
    </section>
  )
}
