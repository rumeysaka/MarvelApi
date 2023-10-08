import { Inter } from "next/font/google"
import { setCharacters } from "@/redux/features/charactersSlice"
import { useDispatch } from "react-redux"
import axios from "axios"
import serverSearchParams from "../lib/serverSearchParams"
import Head from "next/head"
import Characters from "../components/Characters/Index"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export default function Home(data: any) {
  const dispatch = useDispatch()
  dispatch(setCharacters(data?.data?.data?.results))

  return (
    <>
      <Head>
        <title>MarvelApi</title>
      </Head>
      <Navbar />
      <Characters />
    </>
  )
}

export async function getServerSideProps() {
  const endpoint = serverSearchParams()

  const { data } = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?limit=10&${endpoint}`
  )

  return {
    props: {
      data,
    },
  }
}
