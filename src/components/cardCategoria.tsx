export interface ICardCategory {
    title: string,
    picture: string,
    isDropdown?: boolean
}
export default function CardCategoria({title, picture, isDropdown}: ICardCategory) {
    const width = isDropdown ? "w-[68px]" : "w-[258px]";
    const height = isDropdown ? "h-[68px]" : "h-[258px]";
    const orientation = isDropdown ? "flex-row-reverse" : "flex-col";
    const justifyBet = isDropdown ? "justify-between" : "";
    const margin = isDropdown ? "" : "-m-24";
    const centerTitle = isDropdown ? "flex justify-start w-full items-center" : "";
    const objectFit = isDropdown ? "object-cover" : "object-scale-down";
    return (
        <div className={`gap-5 ${margin} flex ${orientation} ${justifyBet}`}>
            <div className={`${centerTitle}`}>
                <span className="flex justify-center text-[#FBAF17] uppercase font-bold text-[1.375rem]">{title}</span>
            </div>
            <div className={`flex justify-center rounded-3xl p-6 bg-[#FBAF17] ${width} ${height}`}>
                <img className={`${objectFit}`} src={picture} alt={title} />
            </div>

        </div>
    )
}