import Image from 'next/image'

const sections = [
  {
    title: 'login',
    image: '/images/SisNutriLogin.png',
  },
  {
    title: 'Tela de atendimento',
    image: '/images/sisNutriPainel.png',
  },
]
export const ProjectSection = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            alt={`Imagem da sessão ${section.title}`}
            width={1060}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
