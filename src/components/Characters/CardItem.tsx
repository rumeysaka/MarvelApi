import { useRouter } from "next/router"
import Image from "next/image"

const CardItem = ({ i }: any) => {
  const router = useRouter()
  return (
    <div
      className="card shadow py-4 px-2 bd-highlight m-3"
      style={{ width: "18rem" }}
      onClick={() => {
        router.push({
          pathname: "/[id]",
          query: { id: i.id },
        })
      }}
    >
      <Image
        src={`${i.thumbnail.path}.${i.thumbnail.extension}`}
        className="card-img-top"
        alt="..."
        width={150}
        height={250}
      />
      <div className="card-body">
        <h5 className="card-title">{i.name}</h5>
        <p className="card-text"></p>
      </div>
    </div>
  )
}

export default CardItem
