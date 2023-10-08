import { getCharacters } from "@/redux/features/charactersSlice"
// import { getCurrentCharacter, setCurrentCharacter } from "@/redux/features/currentSlice"
import {
  getCurrentCharacter,
  setCurrentCharacter,
} from "../redux/features/currentSlice"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import serverSearchParams from "../lib/serverSearchParams"
import axios from "axios"

const page = (data: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  dispatch(setCurrentCharacter(data?.data?.data?.results[0]))
  const current: any = useSelector(getCurrentCharacter)
  console.log(current)
  return (
    <>
      <div>detail page</div>
      <div>{current.current.name}</div>
    </>
  )
}

export default page

export async function getServerSideProps(context: any) {
  const endpoint = serverSearchParams()
  const charId = context.query
  let ID = charId.id

  const { data } = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${ID}?${endpoint}`
  )
  return {
    props: {
      data,
    },
  }
}
