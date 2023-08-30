import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const movieTitle = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };
  return (
    <div className="App">
      <MovieCard title={movieTitle} genres={genresArr} links={socialLinks} />
    </div>
  );
}

export default App;
