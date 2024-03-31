import { Link } from "react-router-dom"
import { UserItem } from "../../types/user"

type Props = {
    item: UserItem
    number: number
}

const CardUser = ({ item, number }: Props) => {

    console.log(item)
    
    return (
        <Link to={`/anime/${item.id}`} className="cursor-pointer">
            <div className="w-full">
                <div className="w-[12rem] h-auto">
                    <img className="w-full h-full" src={item.avatar} alt={`ini avatar ${number}`} />
                </div>
                <div className="w-full">
                    <h5>{item?.name}</h5>
                </div>
            </div>
        </Link>
    )
}

export default CardUser