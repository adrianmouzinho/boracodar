import { Search } from 'lucide-react'

export function Header() {
  return (
    <header 
      className="relative min-h-[33.25rem] bg-[#F8F8FF] grid place-content-center overflow-hidden before:content-[''] before:bg-ilustra-01 before:w-[25.4375rem] before:h-[21.5625rem] before:absolute before:top-0 before:left-0 before:-z-0 after:content-[''] after:bg-ilustra-02 after:w-[25.875rem] after:h-[20.625rem] after:absolute after:-bottom-3 after:right-0 after:-z-0"
    >
      <div className="flex flex-col items-center gap-10 w-fit z-10">
        <div className="max-w-[40.4375rem] text-center">
          <span className="font-medium leading-[1.6] tracking-widest text-red-500">FIND YOUR BLOCK</span>
          <h1 className="font-bold text-5xl leading-tight mt-[1.125rem]">
            Encontre os <span className="text-violet-600">melhores blocos</span> de carnaval de 2023
          </h1>
        </div>

        <form className="flex items-center p-10 gap-6 w-full bg-white border border-zinc-200 rounded-xl">
          <div className="">
            <label htmlFor="name">Pesquise por nome</label>
            <Search className="text-[#E45858] text-2xl" />
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Pesquise por nome"
            />
          </div>

          <div className="">
            <label htmlFor="city">Selecione uma cidade</label>
            <select name="" id="">
              <option value="0">Selecione uma cidade</option>
            </select>
          </div>

          <button 
            type="submit"
            className="px-8 py-3 bg-violet-600 rounded-md font-bold text-sm leading-6 uppercase text-white"
          >
            Buscar agora
          </button>
        </form>
      </div>
    </header>
  )
}