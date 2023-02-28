import { SearchForm } from './SearchForm'

export function Header() {
  return (
    <header 
      className="relative min-h-[33.25rem] bg-zinc-100 grid place-content-center overflow-hidden before:content-[''] before:bg-ilustra-01 before:w-[25.4375rem] before:h-[21.5625rem] before:absolute before:top-0 before:left-0 before:-z-0 after:content-[''] after:bg-ilustra-02 after:w-[25.875rem] after:h-[20.625rem] after:absolute after:-bottom-3 after:right-0 after:-z-0 max-[1024px]:before:bg-no-repeat max-[1024px]:before:bg-30vw max-[1024px]:after:bg-no-repeat max-[1024px]:after:bg-30vw after:bg-right-bottom after:bg-no-repeat"
    >
      <div className="flex flex-col items-center gap-10 w-fit z-10 max-[870px]:p-12">
        <div className="max-w-[40.4375rem] text-center">
          <span className="font-medium leading-[1.6] tracking-widest text-salmon">FIND YOUR BLOCK</span>
          <h1 className="font-bold text-5xl leading-tight mt-[1.125rem] text-dark">
            Encontre os <span className="text-violet-500">melhores blocos</span> de carnaval de 2023
          </h1>
        </div>

        <SearchForm />
      </div>
    </header>
  )
}