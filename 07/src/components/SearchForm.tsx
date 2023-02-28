import { useState } from 'react'
import { ChevronDown, MapPin, Search } from 'lucide-react'

const options = [
  { value: '', city: 'Selecione uma cidade' },
  { value: 'imperatriz', city: 'Imperatriz' },
  { value: 'florianopolis', city: 'Florianópolis' },
  { value: 'recife', city: 'Recife' },
  { value: 'sao-paulo', city: 'São Paulo' },
]

export function SearchForm() {
  const [selectedCity, setSelectedCity] = useState(options[0].value)

  return (
    <form className="flex items-stretch p-10 gap-6 w-full bg-white border border-zinc-300 rounded-xl max-[870px]:flex-col">
      <div className="flex items-center p-3 gap-3 h-12 bg-zinc-200 rounded-md">
        <label htmlFor="name" className="sr-only">Pesquise por nome</label>
        <Search size={20} className="text-salmon" />
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder="Pesquise por nome"
          className="w-full sm:w-[18.125rem] text-zinc-500 placeholder:text-zinc-500"
        />
      </div>

      <div className="relative flex items-center p-3 gap-3 h-12 bg-zinc-200 rounded-md">
        <label htmlFor="city" className="sr-only">Selecione uma cidade</label>
        <MapPin size={20} className="text-salmon" />
        <select 
          name="city" 
          id="city"
          className="w-full sm:w-[18.125rem] text-zinc-500 z-10"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {options.map(option => {
            return (
              <option 
                key={option.value}
                value={option.value}
                className="text-base"
              >
                {option.city}
              </option>
            )
          })}
        </select>

        <ChevronDown className="absolute right-3 text-zinc-400 text-2xl z-0" />
      </div>

      <button 
        type="submit"
        className="px-8 py-3 bg-violet-500 hover:bg-violet-700 rounded-md font-bold text-sm leading-6 uppercase text-white transition-colors w-full"
      >
        Buscar agora
      </button>
    </form>
  )
}