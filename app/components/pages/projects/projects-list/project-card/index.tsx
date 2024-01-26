import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          unoptimized
          alt="Thumbnail do Projeto"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500">
          SisNutri
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Sistema de Gestão de Alimentos Hospitalares é uma solução de software
          abrangente desenvolvida usando Laravel, projetada especificamente para
          agilizar e aprimorar o processo de pedido e gerenciamento de serviços
          de alimentação em hospitais.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Laravel, PHP, JavaScript, Jquery
        </span>
      </div>
    </div>
  )
}
