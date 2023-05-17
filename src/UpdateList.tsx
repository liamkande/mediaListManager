import React from "react"

interface SingleData {
  title: string
  type: string
  genre: string
  releaseYear: number
  rating: number
}

interface UpdateListProps {
  elementId: number
  singledata: SingleData
  getList: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  updateList: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    singledata: SingleData
  ) => void
}

const UpdateList: React.FC<UpdateListProps> = ({
  elementId,
  getList,
  updateList,
  singledata,
  handleChange,
}) => {
  const modalIdentifier = `update${elementId}`
  const dataTarget = `#${modalIdentifier}`

  const handleGetList = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      getList(e, elementId)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateList = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      updateList(e, elementId, singledata)
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
        Update
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
                Update List
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
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="type"
                name="type"
                value={singledata.type}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="genre"
                name="genre"
                value={singledata.genre}
                onChange={handleChange}
              />
              <br />
              <input
                type="number"
                placeholder="releaseYear"
                name="releaseYear"
                value={singledata.releaseYear}
                onChange={handleChange}
              />
              <br />
              <input
                type="number"
                placeholder="rating"
                name="rating"
                value={singledata.rating}
                onChange={handleChange}
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
                onClick={handleUpdateList}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateList
