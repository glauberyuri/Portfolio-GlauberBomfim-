import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from '@/app/components/pages/home/known-techs/known-tech'
import { TbBrandNextjs } from 'react-icons/all'

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
              startDate: '2023-06-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}
