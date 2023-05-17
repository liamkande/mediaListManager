import React from "react"
import { DeleteListProps } from "./types/MediaContent"

const DeleteList: React.FC<DeleteListProps> = ({
  elementId,
  singledata,
  getList,
  deleteList,
}) => {
  const modalIdentifier = `delete${elementId}`
  const dataTarget = `#${modalIdentifier}`

  const handleGetList = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      getList(e, elementId)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteList = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      deleteList(event, elementId)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target={dataTarget}
        onClick={handleGetList}
      >
        Delete
      </button>
      <div
        className="modal fade"
        id={modalIdentifier}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                Delete List
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="title"
                name="title"
                value={singledata.title}
                disabled
              />
              <br />
              <input
                type="text"
                placeholder="type"
                name="type"
                value={singledata.type}
                disabled
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleDeleteList}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteList
