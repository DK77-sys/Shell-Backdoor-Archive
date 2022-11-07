import React, { useState, useEffect } from "react"
import shellJson from "../shell.json"
import CusBar from "./CusBar"
import Particle from "./Particle"
import ReactPaginate from "react-paginate"
import ModalImage from "react-modal-image"
import { Table } from "react-bootstrap"
import { Title } from "../utils/GeneralFunction"

export default function Shell() {
  Title("Shell Backdoor")
  const [shell, setShell] = useState(shellJson.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const shellsPerpage = 8
  const pagesVisited = pageNumber * shellsPerpage

  const displayShells = shell
    .slice(pagesVisited, pagesVisited + shellsPerpage)
    .map((data, index) => {
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
                <Table>
                  <tbody>
                    <tr>
                      <td>Version</td>
                      <td>{data.version ? data.version : "-"}</td>
                    </tr>
                    <tr>
                      <td>Username</td>
                      <td>{data.username ? data.username : "-"}</td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>{data.password ? data.password : "-"}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a
                    href={data.download_url}
                    className="btn btn-outline-primary"
                  >
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
      const data = await shellJson
      setShell(data)
    }
    read()
  }, [])

  const pageCount = Math.ceil(shell.length / shellsPerpage)

  return (
    <>
      <Particle />
      <CusBar />
      <br />
      <div className="app">
        <div className="container">
          <div className="row">
            {displayShells ? (
              displayShells
            ) : (
              <p className="text-center text-white">No Data Available</p>
            )}
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
      </div>
    </>
  )
}
