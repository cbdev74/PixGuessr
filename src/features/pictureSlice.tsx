import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import pictures_it from "../resources/pictures_details_it.json";
import pictures_en from "../resources/pictures_details_en.json";
import { PgState, Picture } from "../utils/interfaces";

const initialState: PgState = {
	currentPicture: {
		path: "" as string,
		keywords: [] as string[],
	},
	answer: [] as string[],
	language: "",
	pictures: []
};

export const pictureSlice = createSlice({
	name: "picture",
	initialState,
	reducers: {
		setLanguage(state: PgState, action: PayloadAction<string>) { 
			state.language = action.payload as string;
			if (state.language === "it") state.pictures =  pictures_it as Picture[];
			if (state.language === "en") state.pictures = pictures_en as Picture[];
		},
		setCurrentPicture(state: PgState) {
			const randomIndex = Math.floor(Math.random() * state.pictures.length);
			state.currentPicture = state.pictures[randomIndex] as Picture;
		},
		setAnswer(state: PgState, action: PayloadAction<string[]>) {
			state.answer = action.payload;
		},
	},
});

export const { setLanguage, setCurrentPicture, setAnswer } = pictureSlice.actions;

export default pictureSlice.reducer;
