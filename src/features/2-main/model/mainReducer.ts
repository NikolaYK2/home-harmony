import {createSlice} from "@reduxjs/toolkit";
import chair from '@/assets/img/item/chairs/chair-grey.jpg'
import chairInt from '@/assets/img/item/chairs/chair-grey-inter.jpg'


type ItemMainType = {
  id: number,
  title: string,
  img: string[],
  description: string,
  category: string,
  price: string,
  sale: boolean,
}
type InitialStateType = {
  items: ItemMainType[]
}
const initialState: InitialStateType = {
  items: [
    {
      id: 1,
      title: 'Chair grey',
      img: [chairInt, chair,],
      description: 'Nice chair, to by, not pass',
      category: 'chairs',
      price: '49.99',
      sale: false,
    },
    {
      id: 2,
      title: 'Table',
      img: [
        'https://i1.adis.ws/i/fv/PRODSAIGXTB-MT-001_saigon_extending-dining-table-metal-base__lifestyle?$medium$&w=579&fmt=webp',
        'https://i1.adis.ws/i/fv/PRODSAIGXTB-MT-001_saigon_extending-dining-table-metal-base__alt04?$product$&fmt=webp&h=1338&w=1898'
      ],
      description: 'Table a big, nice and cool, the good table if not by else go out',
      category: 'tables',
      price: '149.99',
      sale: false,
    },
    {
      id: 3,
      title: 'Sofa',
      img: [
        'https://i1.adis.ws/i/fv/PRODZFRSP000000000027556_legend_classic-back-fabric-corner-sofa__lifestyle?$large$&w=689&fmt=webp',
        'https://i1.adis.ws/i/fv/PRODZFRSP000000000027556_legend_classic-back-fabric-corner-sofa_kingston-silver_right-hand-facing?$product$&fmt=webp&h=2790&w=3964'
      ],
      description: 'Staying at home on sofa and you not sick never',
      category: 'sofa',
      price: '549.99',
      sale: false,
    },
    {
      id: 4,
      title: 'Lamp',
      img: [
        'https://i1.adis.ws/i/fv/PRODZFRSP000000000046363_elon-stacked-table-lamp_light__lifestyle?$large$&w=689&fmt=webp&fmt=webp',
        'https://i1.adis.ws/i/fv/PRODZFRSP000000000046363_elon-stacked-table-lamp_light_champagne-gold?$product$&w=1981.5&fmt=webp'
      ],
      description: 'On lamp and see us, off lamp the bad',
      category: 'lighting',
      price: '549.99',
      sale: false,
    },
    {
      id: 5,
      title: 'Chair white',
      img: [
        'https://i1.adis.ws/i/fv/PRODAVLNCHPR--001_avellino_dining-chairs-pair__lifestyle?$large$&w=689&fmt=webp&fmt=webp',
        'https://i1.adis.ws/i/fv/PRODAVLNCHPR--001_avellino_dining-chairs-pair?$product$&w=1981.5&fmt=webp'
      ],
      description: 'Chair white so nice also sun',
      category: 'sofa',
      price: '549.99',
      sale: false,
    },
  ]
}

const slice = createSlice({
  name: 'mainItems',
  initialState: initialState,
  reducers: {
  }
})

export const mainReducer = slice.reducer