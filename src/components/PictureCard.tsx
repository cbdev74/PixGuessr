import { Picture } from "../utils/interfaces";

interface PictureCardProps {
  picture: Picture;
}

const PictureCard = ({ picture }: PictureCardProps) => {
  return (
    <div className="md:col-span-1 col-span-2 w-fit h-fit m-5 mt-0">
      <img className="rounded-lg" src={picture?.path as string} />
      <p className="col-span-2 px-6 pt-4 text-[#d1d5db]">{picture?.path}</p>
    </div>
  );
};

export default PictureCard;
