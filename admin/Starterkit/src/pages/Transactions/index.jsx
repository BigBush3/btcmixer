import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  Button,
  Input,
  Form,
  Label,
  Pagination,
  PaginationItem,
} from "reactstrap"
import { post, del, get, put } from "../../helpers/api_helper"
// Editable
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory from "react-bootstrap-table2-editor"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"

const EditableTables = () => {
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await get("/auth/transactions", {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      })
      setUsers(response)
    })()
  }, [])
  async function cancelHandler(id, ind) {
    const response = await put(
      "/auth/transaction",
      { id, status: "canceled" },
      {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      }
    )
    window.location.reload()
  }
  async function approveHandler(id, ind) {
    const response = await put(
      "/auth/transaction",
      { id, status: "approved" },
      {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      }
    )
    window.location.reload()
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Cryptomix" title="Editable Table" />
          <Row>
            {users.map((item, index) => {
              return (
                <Card>
                  <CardBody>
                    <CardTitle className="h4">transaction info</CardTitle>
                    <div>
                      <p className="card-text">
                        Sender Address: {item.senderAddress}
                      </p>
                    </div>
                    <div>
                      <p>Comission: {item.percentComission}%</p>
                    </div>
                    <div>Token: {item.giveToken.token}</div>
                    {item.status === null ? (
                      <div>
                        <Button
                          onClick={() => cancelHandler(item._id, index)}
                          className="card-link"
                        >
                          Cancel
                        </Button>
                        <Button onClick={() => approveHandler(item._id, index)}>
                          Approve
                        </Button>
                      </div>
                    ) : (
                      <h3>{item.status}</h3>
                    )}
                  </CardBody>
                </Card>
              )
            })}
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditableTables
