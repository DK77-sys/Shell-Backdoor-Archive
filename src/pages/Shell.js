import React, { useEffect, useState } from "react"
import CusBar from "../components/CusBar"
import json from "../shell"

export default function Shell() {
  const [shell, setShell] = useState("")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [shellPerpage, setShellPerpage] = useState(10)

  useEffect(() => {
    const read = async () => {
      setLoading(true)
      const data = await json
      setShell(data)
      setLoading(false)
    }
    read()
  }, [])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <CusBar />
      <br />
      <div className="app">
        <div className="container">
          <div className="row">
            {shell.data ? (
              shell.data.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top img-thumbnail"
                      src={item.image_url}
                      alt={item.title}
                      data-holder-rendered="true"
                    />
                    <br />
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <a href={item.link} className="btn btn-primary">
                            Download
                          </a>
                          <a href={item.link} className=" btn btn-primary">
                            Raw
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No Data Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
