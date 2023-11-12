import CardCategoria, { ICardCategory } from "./components/cardCategoria";
import CardProducts, { ICardProducts } from "./components/cardProdutos";
import Footer from "./components/footer";
import Header from "./components/header";
import { Link as ScrollLink } from "react-scroll";

export default function App() {
  const dataCardProducts = [
    {
      title: "Lustre suspenso rústico",
      picture: "./src/assets/cardProducts/lustreSuspenso.png",
      oldPrice: "1.500",
      price: "1.000",
      installmentAmount: "3x",
      installmentValue: "333,33",
      tag: "Lustres",
    },
    {
      title: "Lâmpada",
      picture: "./src/assets/cardProducts/lampada.png",
      oldPrice: "1.500",
      price: "1.000",
      installmentAmount: "3x",
      installmentValue: "333,33",
      tag: "Lustres",
    },
    {
      title: "Lustre suspenso rústico",
      picture: "./src/assets/cardProducts/lustreSuspRus.png",
      oldPrice: "1.500",
      price: "1.000",
      installmentAmount: "3x",
      installmentValue: "333,33",
      tag: "Lustres",
    },
    {
      title: "Kit de ferramentas",
      picture: "./src/assets/cardProducts/kitFerramentas.png",
      oldPrice: "100,00",
      price: "80,00",
      installmentAmount: "2x",
      installmentValue: "40,00",
      tag: "Ferramentas",
    },
    {
      title: "Garfos de mesa inox",
      picture: "./src/assets/cardProducts/garfos.png",
      oldPrice: "15,00",
      price: "8,00",
      tag: "Utensílios domésticos",
    },
    {
      title: "Lustre suspenso rústico",
      picture: "./src/assets/cardProducts/chuveiro.png",
      oldPrice: "120,00",
      price: "100,00",
      installmentAmount: "4x",
      installmentValue: "25,00",
      tag: "Acessórios",
    },
    {
      title: "Ventilador 2 em 1, mesa e parede",
      picture: "./src/assets/cardProducts/ventilador.png",
      oldPrice: "50,00",
      price: "30,00",
      tag: "Utensílios domésticos",
    },
    {
      title: "Lustre suspenso rústico",
      picture: "./src/assets/cardProducts/tomada.png",
      oldPrice: "20,00",
      price: "30,00",
      tag: "Acessórios",
    },
  ];
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
  return (
    <>
      <Header />
      {/* Hero */}
      <div className="relative">
        <div className="text-white absolute flex-col m-4 gap-4 h-full w-1/2 md:mx-28 md:my-6 lg:my-8 2xl:my-24  lg:w-1/3 xl:1/4">
          <div className="text-xl tracking-tighter font-medium mb-6 md:font-bold md:text-[3.375rem] xl:text-[4.375rem] md:leading-none ">
            <h1>ILUMINE O SEU DIA A DIA!</h1>
          </div>
          <div className="hidden xl:block tracking-tight leading-loose my-2 2xl:my-12">
            <span>
              Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia
              a dia! Temos produtos para toda sua casa com a melhor qualidade e
              atendimento da região!
            </span>
          </div>
          <div className="flex flex-col gap-2 max-w-[550px] md:max-w-[359px]">
            <button className=" btn hover:brightness-110 bg-[#FBAF17] rounded-2xl py-2 text-sm md:text-base font-medium text-[#202332] px-4 lg:py-4">
              VEJA NOSSOS PRODUTOS
            </button>
            <button className=" btn hover:brightness-110 bg-transparent border-[1px] py-2 border-white rounded-2xl text-sm md:text-base font-medium text-white lg:px-4 lg:py-4">
              NOS CONHEÇA MELHOR
            </button>
          </div>
          <ScrollLink to="products" smooth={true} duration={500}>
            <div className="flex w-full gap-2 pt-4 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 5.19531C18.4061 5.19531 19.1406 5.92985 19.1406 6.83594V24.2032L26.1837 17.1602C26.8244 16.5195 27.8631 16.5195 28.5038 17.1602C29.1446 17.8009 29.1446 18.8397 28.5038 19.4804L18.6601 29.3242C18.0194 29.9649 16.9806 29.9649 16.3399 29.3242L6.49615 19.4804C5.85544 18.8397 5.85544 17.8009 6.49615 17.1602C7.13685 16.5195 8.17564 16.5195 8.81634 17.1602L15.8594 24.2032V6.83594C15.8594 5.92985 16.5939 5.19531 17.5 5.19531Z"
                  fill="white"
                />
              </svg>
              <span>Role para ver mais</span>
            </div>
          </ScrollLink>
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        src="./src/assets/principal.png"
        alt=""
      />

      {/* Products */}
      <section id="products" className="md:mx-[121px] 2xl:mx-[240px]">
        <div className="flex justify-center w-full">
          <img src="./src/assets/fundo_card.jpg" />
        </div>
        <div className="-mt-32  flex flex-col justify-center ">
          <span className="text-xl md:text-3xl font-semibold max-w-[263px] break-words text-center mx-auto flex pb-4 text-white">
            PRODUTOS EM DESTAQUE
          </span>
          <div className="flex flex-wrap gap-8 justify-center ">
            {dataCardProducts.map((product: ICardProducts, i: number) => (
              <CardProducts
                key={i}
                title={product.title}
                picture={product.picture}
                oldPrice={product.oldPrice}
                price={product.price}
                installmentAmount={product.installmentAmount}
                installmentValue={product.installmentValue}
                tag={product.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[912px] ">
        <div className="relative h-[456px] bg-[#202332]">
          <div className="absolute top-2 left-1/3">
            <img src="./src/assets/bolinhaMeio.png" alt="" />
          </div>
          <span className="text-3xl text-white font-bold flex justify-center py-14">
            CATEGORIAS
          </span>
        </div>
        <div className="h-1/2 -mt-80 z-20 relative flex flex-wrap justify-center items-center md:mx-[121px] 2xl:mx-[240px]">
          {dataCardCategory.map((cat: ICardCategory, i: number) => (
            <div className="m-28" key={i}>
              <CardCategoria
                isDropdown={false}
                title={cat.title}
                picture={cat.picture}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="flex-col bg-[#F7F7F7] py-32 ">
        <div className="flex justify-center pb-8">
          <span className="text-4xl text-[#202332] font-bold">
            SUA MELHOR OPÇÃO
          </span>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2">
            <img src="./src/assets/suaMelhor.png" alt="Foto da loja" />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center lg:justify-between gap-4">
            <p className="mx-12 text-justify lg:mx-2 text-lg leading-9 tracking-wider	">
              Desde 1970 somos especializados em materiais elétricos, sendo uma
              das principais distribuidoras do setor. Oferecemos os melhores
              produtos, com o preço que cabe no seu bolso e atende todas as
              necessidades do seu dia a dia. Aqui você irá encontrar lustres,
              luminárias, utilidades domésticas, ferramentas, acessórios,
              lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada
              padrão Eletropaulo, materiais elétricos em geral, equipamentos de
              segurança e comunicação.
            </p>
            <button className="btn hover:brightness-110 m-auto lg:m-0 w-full md:w-80 h-12 md:h-14 bg-[#202332] text-white rounded-2xl uppercase">
              Saiba mais sobre nós
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <img
            src="./src/assets/ultimoBanner.png"
            alt="Imagem mulher com celular"
          />
          <button className="btn hover:brightness-110 absolute font-bold text-lg top-1/2 left-2/4 m-auto lg:m-0 max-w-32 md:w-80 h-12 md:h-14 bg-[#FBAF17] text-[#202332] rounded-2xl uppercase">
            ACIONE NOSSO TELEVENDAS
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
