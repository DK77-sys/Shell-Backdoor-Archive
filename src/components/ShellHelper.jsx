import React, { useState, useEffect } from "react"
import HelperJson from "../shellhelper.json"
import CusBar from "./CusBar"
import Particle from "./Particle"
import { Title } from "../utils/GeneralFunction"
import ReactPaginate from "react-paginate"
import ModalImage from "react-modal-image"

export default function ShellHelper() {
  Title("Shell Helper")

  const [Helper, setHelper] = useState("")
  const [pageNumber, setPageNumber] = useState(0)

  const helpersPerpage = 8
  const pagesVisited = pageNumber * helpersPerpage

  const displayHelper = HelperJson.slice(
    pagesVisited,
    pagesVisited + helpersPerpage
  ).map((data, index) => {
    return (
      <div key={index} className="col-md-3">
        <div className="card mb-4 box-shadow bg-black">
          <ModalImage
            className="card-img-top"
            small={data.image_url}
            large={data.image_url}
            hideDownload={true}
            smallSrcSet={data.img_url}
            alt={data.title}
          />
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <a href={data.download_url} className="btn btn-outline-primary">
                  Download
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={data.raw_url}
                  className=" btn btn-outline-primary"
                >
                  Raw
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    const read = async () => {
      const data = await HelperJson
      setHelper(data)
    }
    read()
  }, [])

  const pageCount = Math.ceil(Helper.length / helpersPerpage)

  return (
    <>
      <Particle />
      <CusBar />
      <br />
      <div className="app">
        <div className="container">
          <div className="row">
            {displayHelper ? displayHelper : <p>Kosong</p>}
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  )
}
