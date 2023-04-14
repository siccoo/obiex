import './App.css';
import Home from './container/Home/Home';

function App() {
  // const url =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=3389f1e448c6a36c49905fe30d46d6fe&language=en-US&page=1";

  // const fetchMovies = async () => {
  //   const data = await fetch(url);
  //   const movies = await data.json();
  //   console.log(movies);
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, [])


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
