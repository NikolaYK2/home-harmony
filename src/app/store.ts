import {configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "@/features/2-main/model/mainReducer.ts";

export const store = configureStore({
  reducer: {
    main: mainReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
