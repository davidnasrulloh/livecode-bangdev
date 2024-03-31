import { useParams } from "react-router-dom"

type Props = {}

const PortfolioDetailsPageView = (props: Props) => {

  const { slug } = useParams()
  // console.log(slug)

  return (
    <div>
      PortfolioDetailsPageView
      <div>
        Nama : {slug}
      </div>
    </div>
  )
}

export default PortfolioDetailsPageView