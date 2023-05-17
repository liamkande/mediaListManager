import React from "react"
import UpdateList from "./UpdateList"
import DeleteMedia from "./DeleteMedia"
import { ListsProps } from "./types/MediaContent"

const Lists: React.FC<ListsProps> = ({
  alldata,
  singledata,
  getList,
  updateList,
  handleChange,
  deleteList,
}) => {
  const rows = alldata.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.type}</td>
      <td>{element.genre}</td>
      <td>{element.releaseYear}</td>
      <td>{element.rating}</td>
      <td>
        <UpdateList
          elementId={element.id}
          singledata={singledata}
          getList={getList}
          updateList={updateList}
          handleChange={handleChange}
        />
      </td>
      <td>
        <DeleteMedia
          elementId={element.id}
          singledata={singledata}
          getList={getList}
          deleteList={deleteList}
        />
      </td>
    </tr>
  ))

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>Genre</th>
          <th>Release Year</th>
          <th>Rating</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default Lists
