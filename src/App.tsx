import CardProducts, { ICardProducts } from "./components/cardProdutos";
import Header from "./components/header";

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
  return (
    <>
      <Header />

      <div className="relative">
        <div className="text-white absolute flex-col m-4 gap-4 h-full w-1/2 md:m-12 lg:w-1/3 xl:1/4">
          <div className="text-xl tracking-tighter font-medium mb-12 md:font-bold md:text-[3.375rem] xl:text-[4.375rem] md:leading-none ">
            <h1>ILUMINE O SEU DIA A DIA!</h1>
          </div>
          <div className="hidden xl:block tracking-tight leading-loose my-12">
            <span>
              Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia
              a dia! Temos produtos para toda sua casa com a melhor qualidade e
              atendimento da região!
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-[#FBAF17] rounded-2xl text-base font-medium text-[#202332] px-4 py-2">
              VEJA NOSSOS PRODUTOS
            </button>
            <button className="bg-transparent border-[1px] border-white rounded-2xl text-base font-medium text-white px-4 py-2">
              NOS CONHEÇA MELHOR
            </button>
          </div>
          <div className="hidden">
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
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        src="./src/assets/principal.png"
        alt=""
      />
      <section>
        <div className="relative flex justify-center">
          <img src="./src/assets/fundo_card.jpg" />

          <div className="absolute top-12 flex flex-col gap-3">
            <span className="text-3xl font-semibold max-w-[263px] break-words text-center text-white">
              PRODUTOS EM DESTAQUE
            </span>
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
    </>
  );
}
