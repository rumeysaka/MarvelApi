import { md5 } from "./md5"

const createServerAuthSearchParams = () => {
  const ts = Date.now()
  const publicKey = process.env.PUBLIC_KEY
  const privateKey = process.env.PRIVATE_KEY

  const hash = md5(`${ts}${privateKey}${publicKey}`)

  const endpoint = `ts=${ts}&apikey=${publicKey}&hash=${hash}`
  const baseUrl = `http://gateway.marvel.com/v1/public/characters`
  return { baseUrl, endpoint }
}
export default createServerAuthSearchParams
