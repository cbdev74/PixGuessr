import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPicture, setLanguage } from "./features/pictureSlice";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLanguage("en"));
		dispatch(setCurrentPicture());
	}, []);

	return (
		<div className="min-h-screen bg-[#000000e7] flex flex-col justify-between">
			<div>
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	);
};

export default App;
