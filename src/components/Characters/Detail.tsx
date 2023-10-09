import { useSelector } from "react-redux"
import { getCurrentCharacter } from "@/redux/features/currentSlice"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Detail = () => {
  let current: any = useSelector(getCurrentCharacter)

  current = current.current
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <h2 className="d-flex justify-content-center text-light py-5">
        {current?.name}
      </h2>
      <div className="d-flex justify-content-center align-content-center">
        <div className="card d-flex shadow-lg" style={{ width: "800px" }}>
          <h5 className="card-header text-center shadow-sm ">
            Marvel Character
          </h5>
          <div className="d-flex justify-content-center align-content-center py-5">
            <img
              className="shadow rounded"
              src={`${current?.thumbnail.path}.${current?.thumbnail.extension}`}
              alt="..."
              style={{ width: "500px", height: "500px" }}
            />
          </div>
          <div className="px-4 pb-1 text-center">
            <p className="card-text">{current.description}</p>
          </div>

          <div className="d-flex justify-content-center py-4 mb-1">
            {current?.comics?.available != 0 && (
              <h5>{current.comics.available} Comics &nbsp; </h5>
            )}
            {current?.series?.available != 0 && (
              <h5>{current.series.available} Series &nbsp; </h5>
            )}{" "}
            {current?.stories?.available != 0 && (
              <h5>{current.stories.available} Stories &nbsp; </h5>
            )}
            {current?.events?.available != 0 && (
              <h5>{current.events.available} Events &nbsp;</h5>
            )}
          </div>

          <div class="accordion" id="accordionExample">
            <div className="ps-1">
              {current?.comics?.available != 0 && (
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5>Comics</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {current?.comics?.items?.map((i: any) => (
                        <p>{i.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {current?.series?.available != 0 && (
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <h5>Series</h5>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {current?.series?.items?.map((i: any) => (
                        <p>{i.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {current?.stories?.available != 0 && (
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <h5>Stories</h5>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {current?.stories?.items?.map((i: any) => (
                        <p>{i.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {current?.events?.available != 0 && (
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      <h5>Events</h5>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      {current?.events?.items?.map((i: any) => (
                        <p>{i.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
