import {configureStore} from "@reduxjs/toolkit";
import {itemsReducer} from "@/features/2-main/products/model/itemsReducer.ts";

export const store = configureStore({
  reducer: {
    productions: itemsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
