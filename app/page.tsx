import { HeroSection } from '@/app/components/pages/home/hero-section'
import { KnownTechs } from '@/app/components/pages/home/known-techs'
import { HighlightedProjects } from '@/app/components/pages/home/highlighted-projects'
import { WorkExperience } from '@/app/components/pages/home/work-experience'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

const getPageData = async () => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}
export default async function Home() {
  const response = getPageData()
  console.log(response)
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
