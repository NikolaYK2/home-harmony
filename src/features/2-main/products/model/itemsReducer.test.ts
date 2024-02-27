import {beforeEach, expect, test} from 'vitest'
import {InitialStateType, itemsReducer, itemsThunk} from "@/features/2-main/products/model/itemsReducer.ts";

let items: InitialStateType
beforeEach(() => {
  items = {
    items: [
      {
        id: 1,
        title: 'Chair',
        img: [''],
        description: 'Nice chair',
        category: 'Chairs',
        price: '44',
        sale: false,
        favorite: false,
      }
    ]
  }

})

test('itemsReducer. Choose favorite product', () => {

  const newItem = itemsReducer(
    items,
    {
      type: itemsThunk.chooseFavoriteProductTC.fulfilled.type,
      payload: {itemId: 1}
    }
  );

  expect(newItem.items[0].favorite).toBe(true)
  expect(items.items[0].favorite).toBe(false)
})