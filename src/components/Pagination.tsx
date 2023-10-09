import { Link } from "next/link"
import serverRequestParams from "../lib/serverRequestParams"
import axios from "axios"
import { useEffect } from "react"

const Pagination = (currPage: Object) => {
  let page = Number(currPage.page)
  const n = 20

  return (
    <div className="d-flex justify-content-center pt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href={`?page=${page - 1}`}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {[...Array(n)].map((e, i) => (
            <li class="page-item">
              <a class="page-link" href={`?page=${i + 1}`}>
                {i + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a class="page-link" href={`?page=${page + 1}`} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
