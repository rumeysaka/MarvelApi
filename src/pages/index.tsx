import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { getCharacters, setCharacters } from "@/redux/features/charactersSlice"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"
import Link from "next/link"
import serverSearchParams from "../lib/serverSearchParams"

const inter = Inter({ subsets: ["latin"] })

export default function Home(data: any) {
  const dispatch = useDispatch()

  dispatch(setCharacters(data?.data?.data?.results))
  const characters: any = useSelector(getCharacters)

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        {characters?.characters.map((i: any) => (
          <Link href={`/${i.id}`}>
            <div>{i.name}</div>
          </Link>
        ))}
      </main>
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
