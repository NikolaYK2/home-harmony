import {RootState} from "@/app/store.ts";

export const itemsSelect = (state:RootState)=>state.main.items;