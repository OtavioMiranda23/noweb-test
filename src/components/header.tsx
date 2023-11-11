export default function Header() {
    return (
        <header className="flex flex-col  md:flex-row ">
        <div className="w-auto flex py-2 md:w-1/2 md:py-0 ">
          <div className="hidden md:block">
            <img className="h-full " src="./src/assets/Group13.png" alt="" />
          </div>
          <div className="m-auto">
            <img className="max-h-12" src="./src/assets/Frame.png" alt="" />
          </div>
        </div>
        <div className="w-full h-auto flex justify-center md:w-1/2 rounded-bl-full rounded-tl-full bg-[#FBAF17]">
          <ul className="flex md:items-center gap-2">
            <li className="text-xl font-medium">
              <a href="">Home</a>
            </li>
            <li className="text-xl font-normal">
              <a href="">Categorias</a>
            </li>
            <li className="text-xl font-normal">
              <a href="">Sobre</a>
            </li>
            <li className="text-xl font-normal">
              <a href="">Localização</a>
            </li>
            <li className="text-xl font-normal">
              <button>Contato</button>
            </li>
          </ul>
        </div>
      </header>
    )
}