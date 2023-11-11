export default function CardProducts() {
  return (
    <div className="flex flex-col shadow-xl text-opacity-15">
      <div>
        <img src="./src/assets/lustreSuspenso.png" alt="" />
      </div>
      <div className="bg-[#202332] mx-4 rounded-xl mt-[-12px]">aaaa</div>
      <div className="bg-white">
        <div className="mb-8 justify">
          <strong className="text-2xl font-medium break-words px-2">
            Lustre suspenso rústico
          </strong>
        </div>
        <div className="flex justify-between text-xl">
          <span className="w-1/2 py-2 px-2 ">R$ 1.500,00</span>
          <span className="bg-[#FBAF17] w-1/2 flex justify-center rounded-bl-2xl rounded-tl-2xl items-center py-2 px-2 ">
            R$ 1.000,00
          </span>
        </div>
        <div className="flex justify-center mt-8">
          <span className="bg-[#F7F7F7] px-8 pt-4 rounded-t-2xl">
            ou em 3x de R$ 333,33
          </span>
        </div>
      </div>
    </div>
  );
}
