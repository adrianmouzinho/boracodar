import { bloquinhos } from '../mockups/bloquinhos'
import { BloquinhoCard } from './BloquinhoCard'

export function Main() {
  return (
    <main className="max-w-[76rem] mx-auto my-24 max-[660px]:px-8 max-[870px]:my-12">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[2rem] leading-[1.4] mt-[1.125rem] text-dark">Blocos recomendados</h2>

        <div className="flex items-center p-2 border border-zinc-300 rounded-md">
          <button className="py-2 px-6 bg-violet-500 hover:bg-violet-700 rounded-md uppercase font-bold text-sm leading-6 text-white">
            Lista
          </button>
          <button className="py-2 px-6 rounded-md uppercase font-bold text-sm leading-6 text-violet-500">
            Mapa
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-8 max-[500px]:grid-cols-1 max-[660px]:grid-cols-2">
        {bloquinhos.map((bloquinho, i) => {
          return (
            <BloquinhoCard 
              key={`${i}-${bloquinho.title}`}
              imageUrl={bloquinho.imageUrl}
              title={bloquinho.title}
              description={bloquinho.description}
              city={bloquinho.city}
            />
          )
        })}
      </div>
    </main>
  )
}