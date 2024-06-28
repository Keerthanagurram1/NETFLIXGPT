

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-4 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-black-900 scrollbar-track-black-900">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;