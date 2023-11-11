import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full object-cover"
          src="./src/assets/principal.png"
          alt=""
        />
      </div>
      <div className="text-white relative flex-col m-4 gap-4 h-full w-1/2 md:m-12 lg:w-1/3 xl:1/4">
        <div className="text-xl tracking-tighter font-medium mb-12 md:font-bold md:text-[3.375rem] xl:text-[4.375rem] md:leading-none ">
          <h1>ILUMINE O SEU DIA A DIA!</h1>
        </div>
        <div className="hidden xl:block tracking-tight leading-loose my-12">
          <span>
            Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a
            dia! Temos produtos para toda sua casa com a melhor qualidade e
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
    </>
  );
}
