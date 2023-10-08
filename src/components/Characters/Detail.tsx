import { useSelector } from "react-redux"
import { getCurrentCharacter } from "@/redux/features/currentSlice"
import Image from "next/image"
import { useState } from "react"

const Detail = () => {
  let current: any = useSelector(getCurrentCharacter)
  const [ratio, setRatio] = useState(5 / 3) // default to 16:9
  current = current.current
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <h2 className="d-flex justify-content-center text-light py-5">
        {current?.name}
      </h2>
      <div className="d-flex justify-content-center align-content-center">
        <div className="card shadow-lg">
          <h5 className="card-header">Marvel Character</h5>
          <div className="d-flex ">
            <Image
              src={`${current?.thumbnail.path}.${current?.thumbnail.extension}`}
              className="card-img-top"
              alt="..."
              layout="responsive"
              width={300}
              height={300} // 16:10 aspect ratio
              objectFit="cover"
            />
            <div className="card-body">
              <h5 className="card-title">{current?.name}</h5>
              <p className="card-text">{current.description}</p>
              <div className="card-footer">
                <h5 className="mb-3">
                  {current.comics.available} Comics Available!
                </h5>
                <div className="ps-1">
                  {current?.comics?.items?.map((i: any) => (
                    <p>{i.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
