export interface ICardCategory {
    title: string,
    picture: string,
}
export default function CardCategoria({title, picture}: ICardCategory) {
    return (
        <div className="gap-5 -m-24 flex flex-col ">
            <div>
                <span className="flex justify-center text-[#FBAF17] uppercase font-bold text-[1.375rem]">{title}</span>
            </div>
            <div className="flex justify-center rounded-3xl p-6 bg-[#FBAF17] w-[263px] h-[258px]">
                <img className="object-scale-down" src={picture} alt={title} />
            </div>

        </div>
    )
}