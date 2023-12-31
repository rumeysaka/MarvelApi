import { getCharacters } from "@/redux/features/charactersSlice"
import {
  getCurrentCharacter,
  setCurrentCharacter,
} from "../redux/features/currentSlice"
import { useDispatch } from "react-redux"
import serverRequestParams from "../lib/serverRequestParams"
import axios from "axios"
import Detail from "@/components/Characters/Detail"

const page = (data: any) => {
  const dispatch = useDispatch()
  dispatch(setCurrentCharacter(data?.data?.data?.results[0]))

  return <Detail />
}

export default page

export async function getServerSideProps(context: any) {
  const { baseUrl, endpoint } = serverRequestParams()
  const charId = context.query
  let ID = charId.id

  const { data } = await axios.get(`${baseUrl}/${ID}?${endpoint}`)
  return {
    props: {
      data,
    },
  }
}
;[]
