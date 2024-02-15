import { createSlice } from "@reduxjs/toolkit";
import pictures from "../resources/pictures_details.json";
import { PgState, Picture } from "../utils/interfaces";

const initialState: PgState = {
	currentPicture: {
		path: "" as string,
		keywords: [] as string[],
	},
	answer: [] as string[],
};

export const pictureSlice = createSlice({
	name: "picture",
	initialState,
	reducers: {
		setCurrentPicture(state: PgState) {
			const randomIndex = Math.floor(Math.random() * pictures.length);
			state.currentPicture = pictures[randomIndex] as Picture;
		},
		setAnswer(state: PgState, action: any) {
			state.answer = action.payload as string[];
		},
	},
});

export const { setCurrentPicture, setAnswer } = pictureSlice.actions;

export default pictureSlice.reducer;
