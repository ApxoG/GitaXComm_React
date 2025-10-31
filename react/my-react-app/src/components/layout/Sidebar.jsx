import React from "react";
import Mostwatched from "../movie/Mostwatched";
import ContinueWatching from "../movie/ContinueWatching";

const MostWatchedMovieData = [
  {
    id: 1,
    title: "Suzume no Tojimari.Movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 2,
    title: "Spider-Man: Into the Spider-Verse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 3,
    title: "Frozen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
];

const continuePlayingData = [
  {
    id: 1,
    title: "Suzume no Tojimari.Movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 2,
    title: "Spider-Man: Into the Spider-Verse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 3,
    title: "Frozen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 4,
    title: "Suzume no Tojimari.Movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 5,
    title: "Spider-Man: Into the Spider-Verse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
  {
    id: 6,
    title: "Frozen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPW9gKvK5FIipVRNnfeIOTH_GW8h4bu0RPiTAma6NS2ZFNDsF51yYbtrxfeB_YfpqEGfiIPg&s=10",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="px-6 py-6  pb-0 mt-8 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm max-w-[350px] min-w-[350px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-white font-medium">
            🔥 Most Watching
          </h3>
          <h3 className="text-[16px] text-white font-medium">
            <span className="text-[#6F6F6F]"> Sort by:</span> Today
          </h3>
        </div>
        <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
          {MostWatchedMovieData.map((movie) => (
            <Mostwatched
              key={movie.id}
              title={movie.title}
              image={movie.image}
            />
          ))}
        </div>
      </div>
      <div className="p-6 mt-8 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm max-w-[350px] min-w-[350px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-white font-medium">
            Continue Playing
          </h3>
        </div>
        <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
          {continuePlayingData.map((movie) => (
            <ContinueWatching
              key={movie.id}
              title={movie.title}
              image={movie.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
