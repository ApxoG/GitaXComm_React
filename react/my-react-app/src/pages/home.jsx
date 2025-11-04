import HeaderNav from "../components/layout/HeaderNav";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/MainContent";
import { useState, useEffect } from "react";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or other source
    const fetchMovies = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <div className="">
      {/* <HeaderNav /> */}
      <div className="flex">
        {/* <Sidebar /> */}
        <MainContent movies={movies} />
      </div>
    </div>
  );
}

export default Home;
