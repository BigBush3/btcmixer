import React, { useState, useEffect } from "react"
import { Button, Card, Form, Input, Label, Modal } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { get, post } from "../../helpers/api_helper"

function Wallet() {
  const [modal, setModal] = useState(false)
  const [address, setAddress] = useState("")
  const [arrayAddress, setArrayAddress] = useState([])

  const toggler = () => {
    setModal(!modal)
  }

  const submitHandler = async () => {
    await post(
      "/auth/address",
      {
        address: address,
      },
      {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      }
    )
    setModal(!modal)
  }

  const deleteAddress = async index => {
    if (confirm("Yes?")) {
      const lst = arrayAddress[index]
      await post(
        "/auth/addressd",
        { ids: lst },
        {
          Headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("authUser")).token
            }`,
          },
        }
      )
      arrayAddress.splice(index, 1)
      window.location.reload()
    }
  }

  useEffect(() => {
    ;(async () => {
      const response = await get("/auth/address", {
        Headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("authUser")).token
          }`,
        },
      })
      console.log(response)
      setArrayAddress(response)
    })()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs maintitle="Cryptomix" title="Wallet" />
          <div>
            <Button type="submit" onClick={() => toggler()}>
              Add address
            </Button>
          </div>
          <br />
          <div>
            {arrayAddress ? (
              arrayAddress.map((elem, index) => {
                return (<Card>
                  <div>{elem.address}</div>
                  <div>
                    <Button onClick={() => deleteAddress(index)}>
                      Delete
                    </Button>
                  </div>
                </Card>)
              })
            ) : (
              <Card>Address not found</Card>
            )}
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
              Add Address
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
                <Label>BTC Address</Label>
                <Input
                  type="text"
                  value={address}
                  required
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

export default Wallet
