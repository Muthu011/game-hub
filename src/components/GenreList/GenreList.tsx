import React from "react";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { genre, error, isLoading } = useGenres();

  return (
    <ul>
      {genre.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
