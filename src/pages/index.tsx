import { Inter } from "next/font/google"
import { setCharacters } from "@/redux/features/charactersSlice"
import { useDispatch } from "react-redux"
import axios from "axios"
import serverSearchParams from "../lib/serverSearchParams"
import Head from "next/head"
import Characters from "../components/Characters/Index"
import Navbar from "../components/Navbar"
import Pagination from "../components/Pagination"

const inter = Inter({ subsets: ["latin"] })

export default function Home(data: any, wholeList: any) {
  const dispatch = useDispatch()
  dispatch(setCharacters(data?.data?.data?.results))

  return (
    <>
      <Head>
        <title>MarvelApi</title>
      </Head>
      <Navbar />
      <Characters />
      <Pagination />
    </>
  )
}

export async function getServerSideProps(context) {
  const query = context.query.page
  const { baseUrl, endpoint } = serverSearchParams()
  const offset = (query - 1) * 10

  const { data } = await axios.get(
    `${baseUrl}?limit=10&offset=${offset}&${endpoint}`
  )

  return {
    props: {
      data,
    },
  }
}
