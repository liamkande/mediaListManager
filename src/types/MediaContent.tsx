export enum MediaType {
    Movie = "movie",
    TVShow = "tv-show",
    Game = "game",
  }
  
  export interface SingleData {
    title: string
    type: string
    genre: string
    releaseYear: number
    rating: number
  }
  
  export interface ListElement {
    id: number
    title: string
    type: string
    genre: string
    releaseYear: string
    rating: string
  }

  export interface ListsProps {
    alldata: ListElement[]
    singledata: SingleData
    getList: (e: React.MouseEvent<HTMLButtonElement>, id: number) => Promise<void>
    updateList: (
      e: React.MouseEvent<HTMLButtonElement>,
      id: number
    ) => Promise<void>
    deleteList: (
      e: React.MouseEvent<HTMLButtonElement>,
      id: number
    ) => Promise<void>
    handleChange: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => void
  }
  
  export interface DeleteListProps {
    elementId: number;
    singledata: SingleData;
    getList: (e: any, id: number) => void;
    deleteList: (e: any, id: number) => void;
  }