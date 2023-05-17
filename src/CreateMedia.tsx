import React, { ChangeEvent } from "react"

interface SingleData {
  title: string
  type: string
  genre: string
  releaseYear: number
  rating: number
}

interface CreateListProps {
  singledata: SingleData
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  createList: () => void
}

const CreateList: React.FC<CreateListProps> = ({
  singledata,
  handleChange,
  createList,
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Create New List
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New List
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
                onClick={createList}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateList
