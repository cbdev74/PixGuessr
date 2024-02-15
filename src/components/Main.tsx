import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { RootState } from "../app/store";
import { setAnswer } from "../features/pictureSlice";
import { processAnswer, findKeywordMatch } from "../utils";
import PictureCard from "./PictureCard";
import { Picture } from "../utils/interfaces";

const PixGuessrMain = () => {
	const dispatch = useDispatch();

	const currentPicture: Picture = useSelector(
		(state: RootState) => state?.picture?.currentPicture
	);
	const answer: string[] = useSelector(
		(state: RootState) => state?.picture?.answer
	);

	const [commons, setCommons] = useState([] as string[]);

	const txtAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const current = txtAreaRef.current;
		if (current) {
			const processedAnswer: string[] = processAnswer(current.value);
			dispatch(setAnswer(processedAnswer as string[] & void));
		}
	};

	useEffect(() => {
		const commons: string[] = findKeywordMatch(
			currentPicture.keywords as string[],
			answer as string[]
		);

		setCommons(commons as string[]);
	}, [answer as string[]]);

	return (
		<div className="grid grid-cols-2">
			<PictureCard picture={currentPicture as Picture} />
			<p className="col-span-2 px-6 pt-4 text-[#d1d5db]">
				Describe the image. The more accurate you are, the more keywords you
				get.
			</p>
			<div className="col-span-2 flex flex-col p-5 pt-3 w-full">
				<div style={{ touchAction: "manipulation", overflow: "hidden" }}>
					<textarea
						placeholder="Descrivi l'immagine..."
						className="textarea bg-[#212121] text-[#d1d5db] text-lg p-3 outline-none focus:ring-transparent border-2 border-gray-300 w-full rounded-lg"
						ref={txtAreaRef}
					></textarea>
				</div>
				<button
					className="bg-[#7a1515] shadow text-[#d1d5db] text-lg font-medium p-3 mt-3 rounded-lg"
					onClick={handleButtonClick as VoidFunction}
				>
					Verifica
				</button>
			</div>
			<div className="flex flex-col p-5 font-medium text-[#d1d5db] col-span-2">
				<h1 className="font-medium text-xl mb-2">
					Keywords indovinate: {commons?.length as number} su{" "}
					{currentPicture?.keywords?.length as number}
				</h1>
				{commons?.map((common: string, index: number) => {
					return <h2 key={index as number}>- {common as string}</h2>;
				})}
			</div>
		</div>
	);
};

export default PixGuessrMain;
