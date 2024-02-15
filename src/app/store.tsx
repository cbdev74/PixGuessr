import { configureStore } from "@reduxjs/toolkit";
import pictureReducer from "../features/pictureSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
	reducer: {
		picture: pictureReducer,
	},
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
