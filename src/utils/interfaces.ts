export interface Picture {
    path: string, 
    keywords: string[]
}

export interface PgState {
	currentPicture: Picture;
	answer: string[];
    language: string;
    pictures: Picture[];
}