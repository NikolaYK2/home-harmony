import {createSlice} from "@reduxjs/toolkit";
import chair from '@/assets/img/item/chairs/chair-grey.jpg'
import chairInt from '@/assets/img/item/chairs/chair-grey-inter.jpg'


type ItemMainType = {
  id:number,
  title: string,
  img: string[],
  description: string,
  category:string,
  price:string,
}
type InitialStateType={
  items: ItemMainType[]
}
const initialState: InitialStateType = {
  items: [
    {
      id:1,
      title: 'Chair grey',
      img: [ chairInt, chair,],
      description: 'Nice chair, to by, not pass',
      category:'chairs',
      price:'49.99',
    },
    {
      id:2,
      title: 'Table',
      img: ['table.webp'],
      description: 'Table a big, nice and cool, the good table if not by else go out',
      category:'tables',
      price:'149.99',
    },
    {
      id:3,
      title: 'Sofa',
      img: ['sofa.jpg'],
      description: 'Staying at home on sofa and you not sick never',
      category:'sofa',
      price:'549.99',
    },
    {
      id:4,
      title: 'Lamp',
      img: ['wall-light.jpg'],
      description: 'On lamp and see us, off lamp the bad',
      category:'sofa',
      price:'549.99',
    },
    {
      id:5,
      title: 'Chair white',
      img: ['chair-white.jpeg'],
      description: 'Chair white so nice also sun',
      category:'sofa',
      price:'549.99',
    },
  ]
}

const slice = createSlice({
  name: 'mainItems',
  initialState: initialState,
  reducers: {}
})

export const mainReducer = slice.reducer