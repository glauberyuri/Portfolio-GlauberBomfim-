'use client'
import Image from 'next/image'
import { TechBadge } from '@/app/components/tech-badge'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/all'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
const MOCK_CONTACTS = [
  {
    url: 'https://github.com/glauberyuri',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/glauber-iury-franca-bomfim/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://wa.me/5538988090387',
    icon: <TbBrandWhatsapp />,
  },
]
export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row pb-10 sm:pb-32 py-32 lg:pb-[110px]">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Glauber Bomfim</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Versátil e competente, capaz de se adaptar a diferentes tecnologias
            e ambientes de trabalho. Pronto para enfrentar novos desafios e
            desafios e contribuir para o sucesso de projetos web.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center flex-col sm:gap-5 sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de Perfil do Glauber Bomfim"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
