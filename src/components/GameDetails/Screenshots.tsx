import { ScreenshotsScheme } from "../../helpers/types";

export const Screenshots: React.FC<ScreenshotsScheme> = ({ screenshots }) => {
  return (
    <div className="bg-primaryDark p-10 mb-5 rounded-3xl">
      <h1 className="text-4xl mb-5 font-bold">Screenshots:</h1>
      <div className="flex flex-wrap gap-5">
        {screenshots!.map((img) => (
          <img
            key={img.id}
            src={img.image}
            alt="Screenshots"
            className="rounded-2xl w-auto h-[200px]"
          />
        ))}
      </div>
    </div>
  );
};
