import React, { useState, useEffect } from "react"
import CreateMedia from "./CreateMedia"
import MediaLists from "./MediaList"
import "./App.css"
import { SingleData } from "./types/MediaContent"

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [singledata, setSingledata] = useState<SingleData>({
    title: "",
    type: "",
    genre: "",
    releaseYear: 0,
    rating: 0,
  })
  const [alldata, setAllData] = useState<any[]>([])
  const [filteredData, setFilteredData] = useState<any[]>([])

  const getLists = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3000/media")
      const jsonData = await response.json()
      setIsLoading(false)
      setAllData(jsonData)
    } catch (error) {
      console.warn(error)
    }
  }

  const newFilteredData = alldata
    .filter((data) =>
      data.title.toLowerCase().includes(singledata.title.toLowerCase())
    )
    .filter((data) => singledata.type === "" || data.type === singledata.type)

  useEffect(() => {
    getLists()
  }, [])

  useEffect(() => {
    setFilteredData(newFilteredData)
  }, [alldata])

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFilteredData(newFilteredData)
    setSingledata((prevState) => {
      if (name === "title") {
        return { ...prevState, title: value }
      }
      if (name === "type") {
        return { ...prevState, type: value }
      }
      if (name === "genre") {
        return { ...prevState, genre: value }
      }
      if (name === "releaseYear") {
        return { ...prevState, releaseYear: parseInt(value) }
      }
      if (name === "rating") {
        const ratingValue = parseInt(value, 10)
        const ratingInRange = Math.min(Math.max(ratingValue, 0), 10)
        return { ...prevState, rating: ratingInRange }
      }
      return prevState
    })
  }

  const createList = async () => {
    try {
      await fetch("http://localhost:3000/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singledata),
      })
      setSingledata({
        title: "",
        type: "",
        genre: "",
        releaseYear: 0,
        rating: 0,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getList = async (e: any, id: number) => {
    try {
      setSingledata({
        title: "Loading...",
        type: "Loading...",
        genre: "Loading...",
        releaseYear: 0,
        rating: 0,
      })

      const response = await fetch(`http://localhost:3000/media/${id}`)
      const result = await response.json()

      setSingledata({
        title: result.title,
        type: result.type,
        genre: result.genre,
        releaseYear: result.releaseYear,
        rating: result.rating,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateList = async (e: any, id: number) => {
    try {
      await fetch(`http://localhost:3000/media/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singledata),
      })

      setSingledata({
        title: "",
        type: "",
        genre: "",
        releaseYear: 0,
        rating: 0,
      })

      getLists()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteList = async (e: any, id: number) => {
    try {
      await fetch(`http://localhost:3000/media/${id}`, {
        method: "DELETE",
      })

      setSingledata({
        title: "",
        type: "",
        genre: "",
        releaseYear: 0,
        rating: 0,
      })

      getLists()
    } catch (error) {
      console.log(error)
    }
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setSingledata((prevState) => ({
      ...prevState,
      type: value,
    }))
    setFilteredData(
      alldata
        .filter((data) =>
          data.title.toLowerCase().includes(singledata.title.toLowerCase())
        )
        .filter((data) => value === "" || data.type === value)
    )
  }

  return (
    <div className="App">
      <div className="container">
        <span className="title-bar">
          <button type="button" className="btn btn-primary" onClick={getLists}>
            Get Lists
          </button>
          <CreateMedia
            singledata={singledata}
            createList={createList}
            handleChange={handleChange}
          />
        </span>
        <br />
        <input
          type="text"
          placeholder="Search by title"
          name="title"
          value={singledata.title}
          onChange={handleChange}
        />
        <select name="type" value={singledata.type} onChange={handleTypeChange}>
          <option value="">All Types</option>
          <option value="movie">Movie</option>
          <option value="Tv-show">TV Show</option>
          <option value="game">Game</option>
        </select>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <MediaLists
            alldata={filteredData}
            singledata={singledata}
            getList={getList}
            updateList={updateList}
            deleteList={deleteList}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  )
}

export default App
