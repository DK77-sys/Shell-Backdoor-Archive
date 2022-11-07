import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import json from "../privesc"
import CusBar from "./CusBar"
import Particle from "./Particle"
import { Title } from "../utils/GeneralFunction"

export default function Privesc() {
  Title("Priv Esc")
  const [privesc, setPrivesc] = useState("")

  useEffect(() => {
    const read = async () => {
      const data = await json
      setPrivesc(data)
    }
    read()
  }, [])

  return (
    <>
      <Particle />
      <CusBar />
      <br />
      <div className="app">
        <div className="container">
          <div className="row">
            {privesc.data ? (
              privesc.data.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card mb-4 box-shadow bg-black">
                    <img
                      className="card-img-top umg-"
                      src={item.image_url}
                      alt={item.title}
                      data-holder-rendered="true"
                    />
                    <br />
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <Table>
                          <tbody>
                            <tr>
                              <td>Kernel</td>
                              <td>{item.kernel}</td>
                            </tr>
                            <tr>
                              <td>Version</td>
                              <td>{item.version}</td>
                            </tr>
                            <tr>
                              <td>Compile</td>
                              <td>{item.compile}</td>
                            </tr>
                            <tr>
                              <td>Usage</td>
                              <td>{item.usage}</td>
                            </tr>
                          </tbody>
                        </Table>
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
              <p className="text-center text-white">No Data Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
