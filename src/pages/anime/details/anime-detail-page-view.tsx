import { useParams } from "react-router-dom"
import useFetchBasic from "../../../hooks/use-fetch-basic"

type Props = {}

const AnimeDetailsPageView = (props: Props) => {
  const {id} = useParams()
  const { data, error, loading, fetchData } = useFetchBasic(`/user/users/${id}`)
  console.log(data)
  return (
    <div>AnimeDetailsPageView</div>
  )
}

export default AnimeDetailsPageView