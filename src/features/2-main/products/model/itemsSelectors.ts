import {RootState} from "@/app/store.ts";
import {createSelector} from "@reduxjs/toolkit";

export const itemsSelect = (state: RootState) => state.productions.items;
export const itemIdSelect = (_: RootState, itemId: number) => itemId;

export const itemSelectAutomatized = createSelector([itemsSelect, itemIdSelect], (items, itemId) => {
  return items.find((item) => item.id === itemId)
})


