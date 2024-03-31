import { useParams } from "react-router-dom"

type Props = {}

const AnimeDetailsPageView = (props: Props) => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>AnimeDetailsPageView</div>
  )
}

export default AnimeDetailsPageView