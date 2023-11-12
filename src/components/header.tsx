import { useState } from "react";
import CardCategoria, { ICardCategory } from "./cardCategoria";


export default function Header() {
  const dataCardCategory = [
    {
      title: "LÂMPADAS",
      picture: "./src/assets/category/catlampada.png",
    },
    {
      title: "LUSTRES",
      picture: "./src/assets/category/lustres.png",
    },
    {
      title: "LUMINÁRIAS",
      picture: "./src/assets/category/luminarias.png",
    },
    {
      title: "DECORAÇÕES",
      picture: "./src/assets/category/decoracoes.png",
    },
    {
      title: "ACESSÓRIOS",
      picture: "./src/assets/category/chuveiros.png",
    },
    {
      title: "FERRAMENTAS",
      picture: "./src/assets/category/ferramentas.png",
    },
    {
      title: "UTENSÍLIOS DOMÉSTICOS",
      picture: "./src/assets/category/utensilios.png",
    },
    {
      title: "UTENSÍLIOS DOMÉSTICOS",
      picture: "./src/assets/category/cabos.png",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

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
          <li
            className={`text-xl font-normal ${showDropdown ? "relative" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Categorias</a>
            {showDropdown && (
              <div className="dropdown-content">
                {dataCardCategory.map((cat: ICardCategory, i: number) => (
                  <div className="m-2" key={i}>
                    <CardCategoria
                      title={cat.title}
                      picture={cat.picture}
                      isDropdown={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </li>
          <li className="text-xl font-normal">
            <a href="">Sobre</a>
          </li>
          <li className="hidden md:block text-xl font-normal">
            <a href="">Localização</a>
          </li>
          <li className="text-xl font-normal">
            <button>Contato</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
