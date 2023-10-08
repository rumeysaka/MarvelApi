import { getCharacters } from "@/redux/features/charactersSlice"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import CardItem from "./CardItem"

function Index() {
  const characters: any = useSelector(getCharacters)
  return (
    <div className="container-fluid py-10">
      <h2 className="d-flex justify-content-center text-light py-5">
        MARVEL CHARACTERS
      </h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center mx-10">
        {characters?.characters.map((item: any) => (
          <CardItem i={item} />
        ))}
      </div>
    </div>
  )
}

export default Index
