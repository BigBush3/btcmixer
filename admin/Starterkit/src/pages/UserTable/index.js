import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, CardTitle, Modal, Button } from "reactstrap"
import { post, del, get, put } from "../../helpers/api_helper"
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory from "react-bootstrap-table2-editor"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"

const EditableTables = () => {
  function beforeSaveCell(oldValue, newValue, row, column, done) {
    console.log(oldValue, newValue, row, column, done)
    return { async: true }
  }

  const clickHandler = row => {
    console.log(row)
  }
  const columns = [
    {
      dataField: "_id",
      text: "Id",
    },
    {
      dataField: "username",
      text: "User",
    },
    {
      dataField: "role",
      text: "Role",
    },
    {
      dataField: "newPassword",
      text: "Password(only setting new)",
    },
  ]
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await get("/auth/users", {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      })
      setUsers(response)
    })()
  }, [])
  useEffect(() => {
    console.log(selectedUsers)
  }, [selectedUsers])
  const deleteHandler = async () => {
    if (selectedUsers.length !== 0) {
      if (confirm("Вы точно хотите удалить")) {
        let lst = []
        for (let i = 0; i < selectedUsers.length; i++) {
          const userIndex = selectedUsers[i]
          lst.push(users[userIndex]._id)
          setUsers([...users.splice(userIndex, 1)])
        }
        await post(
          "/auth/users",
          { ids: lst },
          {
            Headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("authUser")).token
              }`,
            },
          }
        )
      }
    }
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Cryptomix" title="Editable Table" />
          <Button onClick={deleteHandler}>Delete</Button>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Users table </CardTitle>

                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="_id"
                      data={users}
                      columns={columns}
                      selectRow={{
                        mode: "checkbox",
                        onSelect: (row, isSelect, rowIndex, e) => {
                          if (isSelect) {
                            setSelectedUsers([...selectedUsers, rowIndex])
                          } else {
                            if (selectedUsers.length === 1) {
                              setSelectedUsers([])
                            } else {
                              setSelectedUsers([
                                ...selectedUsers.splice(
                                  selectedUsers.indexOf(rowIndex),
                                  1
                                ),
                              ])
                            }
                          }
                        },
                      }}
                      cellEdit={cellEditFactory({
                        mode: "click",
                        beforeSaveCell,
                      })}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EditableTables
