import { HeroSection } from '@/app/components/pages/home/hero-section'
import { KnownTechs } from '@/app/components/pages/home/known-techs'
import { HighlightedProjects } from '@/app/components/pages/home/highlighted-projects'
import { WorkExperience } from '@/app/components/pages/home/work-experience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
