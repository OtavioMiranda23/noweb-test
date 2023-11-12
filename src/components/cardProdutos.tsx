export interface ICardProducts {
  title: string;
  picture: string;
  oldPrice?: string;
  price: string;
  installmentAmount?: string;
  installmentValue?: string;
  tag: string;
}

export default function CardProducts(props: ICardProducts) {
  return (
    <div className="flex flex-col shadow-xl text-opacity-15 max-w-[263px] rounded-xl">
      <div className="relative">
        <img src={props.picture} alt={props.title} />
        <div className="absolute bg-slate-200 top-4 rounded-r-lg px-4 font-medium text-base">
          {props.tag}
        </div>
      </div>
      <div className="bg-[#202332] mx-4 rounded-xl mt-[-12px] z-10">aaaa</div>
      <div className="bg-white  ">
        <div className="mb-8 flex justify-center text-center">
          <strong className="text-2xl font-medium break-words px-2">
            {props.title}
          </strong>
        </div>
        <div className="flex justify-between text-xl">
          <span className="w-1/2 py-2 px-2 line-through">{props.oldPrice}</span>
          <span className="bg-[#FBAF17] w-1/2 flex justify-center rounded-bl-2xl rounded-tl-2xl items-center py-2 px-2 ">
            {props.price}
          </span>
        </div>
        <div className="flex justify-center mt-8">
          <span className="bg-[#F7F7F7] px-8 pt-4 rounded-t-2xl">
            ou em {props.installmentAmount} de R$ {props.installmentValue}
          </span>
        </div>
      </div>
    </div>
  );
}
