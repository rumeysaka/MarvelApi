import { getCharacters } from "@/redux/features/charactersSlice"
import {
  getCurrentCharacter,
  setCurrentCharacter,
} from "../redux/features/currentSlice"
import { useDispatch } from "react-redux"
import serverSearchParams from "../lib/serverSearchParams"
import axios from "axios"
import Detail from "@/components/Characters/Detail"

const page = (data: any) => {
  const dispatch = useDispatch()
  dispatch(setCurrentCharacter(data?.data?.data?.results[0]))

  return <Detail />
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
