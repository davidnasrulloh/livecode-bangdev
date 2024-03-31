import CardUser from "../../components/Card/CardUser"
import useFetchBasic from "../../hooks/use-fetch-basic"
import { UserItem } from "../../types/user"

type Props = {}

const AnimePageView = (props: Props) => {

    const { data, error, loading, fetchData } = useFetchBasic('/user/users')
    // console.log('itemku data', data)

    if(loading){
        return <div>Loading ....</div>
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center py-2">
            {
                data?.map((item: UserItem, index:number)=>{
                    return (
                        <CardUser item={item} number={index + 1}/>
                    )
                })
            }
        </div>
    )
}

export default AnimePageView