import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../features/pictureSlice";

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.picture.language);

  console.log(language);

  return (
    <div className="col-span-2 flex justify-between bg-[#2a2a2ab1] rounded-lg p-3 m-5">
      <h1 className="font-semibold text-gray-300 text-2xl flex justify-end items-center">
        PixGuessr
      </h1>

      <div className="flex text-gray-300 text-sm font-medium items-center gap-4">
        Pictures <br /> language :{" "}
        <select
          value={language}
          name="lang"
          className="flex p-2 rounded text-black bg-gray-300"
          onChange={(e: any) => dispatch(setLanguage(e.currentTarget.value))}
        >
          <option value="it">Italiano</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
