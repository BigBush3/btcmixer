import React, { useEffect, useState } from "react"
// Editable
import BootstrapTable from "react-bootstrap-table-next"
import {
  Button, Card,
  CardBody,
  CardTitle, Col, Form, Input, Label, Modal, Row
} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { get, post } from "../../helpers/api_helper"


const EditableTables = () => {
  const [modal, setModal] = useState(false)
  const [tokenName, setTokenName] = useState("")
  const [networkName, setNetworkName] = useState("")
  const [address, setAddress] = useState("")
  const [tokenImage, setTokenImage] = useState("")
  const [imageValue, setImageValue] = useState("")

  function beforeSaveCell(oldValue, newValue, row, column, done) {
    console.log(oldValue, newValue, row, column, done)
    return { async: true }
  }
  const toggler = () => {
    setModal(!modal)
  }

  const clickHandler = row => {
    console.log(row)
  }
  const imageFormatter = () => {
    return (<div><Button>Text</Button></div>);
  }
  const columns = [
    {
      dataField: "_id",
      text: "Id",
    },
    {
      dataField: "image",
      text: "Image",
      dataFormat: imageFormatter
    },
    {
      dataField: "network",
      text: "Network",
    },
    {
      dataField: "token",
      text: "Token",
    },
    {
      dataField: "address",
      text: "Address",
    },
  ]
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  useEffect(() => {
    (async () => {
      const response = await get("/auth/tokens", {
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
          "/auth/token",
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
  const submitHandler = async () => {
    await post(
      "/auth/tokens",
      {
        network: networkName,
        token: tokenName,
        address: address,
        image: tokenImage
      },
      {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      }
    )
    setUsers(
      users.push({
        network: networkName,
        token: tokenName,
        address: address,
        image: tokenImage
      })
    )
    setModal(!modal)
  }
  const onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0]
      setImageValue(e.target.value)
      setTokenImage({ image: URL.createObjectURL(img) })
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Cryptomix" title="Editable Table" />
          <Button onClick={deleteHandler}>Delete</Button>
          <Button onClick={toggler}>Add token</Button>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Tokens table</CardTitle>
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
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          toggler()
        }}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myModalLabel">
            Сreate Token
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggler}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Form onSubmit={submitHandler}>
            <div>
              <Label>Token name</Label>
              <Input
                type="text"
                value={tokenName}
                required
                onChange={e => setTokenName(e.target.value)}
              />
            </div>
            <div>
              <Label>Network name</Label>
              <Input
                type="text"
                value={networkName}
                required
                onChange={e => setNetworkName(e.target.value)}
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                type="text"
                value={address}
                required
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div>
              <Label>Token image</Label>
              <br />
              <Input
                type="file"
                value={imageValue}
                required
                onChange={e => {
                  onImageChange(e)
                  setImageValue(e.target.value)
                }}
              />
            </div>
            <br />
            <div>
              <Button type="submit"> Submit</Button>
            </div>
          </Form>
        </div>
        {/* <div className="modal-footer">
                            <button
                              type="button"
                              onClick={() => {
                                toggler()
                              }}
                              className="btn btn-secondary waves-effect"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary waves-effect waves-light"
                            >
                              Save changes
                            </button>
                          </div> */}
      </Modal>
    </React.Fragment>
  )
}

export default EditableTables
