export default function App() {
  return (
    <header className="flex max-h-12">
      <div className="w-1/2 flex ">
        <div>
          <img className="h-full " src="./src/assets/Group13.png" alt="" />
        </div>
        <div className="m-auto">
          <img className="max-h-8" src="./src/assets/Frame.png" alt="" />
        </div>
      </div>
      <div className="w-1/2 px-32 h-auto flex items-center rounded-bl-full rounded-tl-full bg-yellow-500">
        <ul className="flex gap-8">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categorias</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Localização</a>
          </li>
          <li>
            <button>Contato</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
