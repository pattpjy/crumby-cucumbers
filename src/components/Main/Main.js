import "./Main.css";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from "../Search/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

const Main = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [hasError, setHasError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Unable To Fetch Your Data. Try Later.");
        }
        const json = await response.json();
        setAllMovies(json.movies);
        setVisibleMovies(json.movies);
      } catch (error) {
        setHasError(error.message);
      }
    }
    fetchData();
  }, []);

  const clearSearchResult = () => {
    setVisibleMovies(allMovies);
  };

  const displayMovies = () => {
    const displayAll = visibleMovies.map((movie) => {
      return (
        <Card
          poster={movie.poster_path}
          id={movie.id}
          key={movie.id}
          alt={movie.title}
          handleClick={clickHandler}
        />
      );
    });
    return displayAll;
  };
  const clickHandler = (event) => {
    return event.target.id;
  };

  const displaySearch = (searchInput) => {
    const searchMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setVisibleMovies(searchMovies);
  };

  return (
    <div>
      <div className="search-bar">
        <SearchBar
          searchMovies={displaySearch}
          clearSearchResult={clearSearchResult}
        />
      </div>
      {loading ? (
        <ClipLoader
          color="#36d7b7"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="poster-display">
          {hasError && (
            <div className="submitErrorMessage">
              <p>
                <strong>{hasError}</strong>
              </p>
            </div>
          )}
          {displayMovies()}
        </div>
      )}
    </div>
  );
};

// class Main$ extends Component {
//   constructor() {
//     super();
//     this.state = {
//       allMovies: [],
//       visibleMovies: [],
//     };
//   }

//   componentDidMount = () => {
//     fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Unable To Fetch Your Data. Try Later.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         this.setState({ allMovies: data.movies, visibleMovies: data.movies });
//       })
//       .catch((error) => this.setState({ hasError: error.message }));
//   };

//   clickHandler = (event) => {
//     const Id = event.target.id;
//   };

//   clearSearchResult = () => {
//     setVisibleMovies(allMovies);
//   };

//   displayMovies = () => {
//     const allMovies = this.state.visibleMovies.map((movie) => {
//       return (
//         <Card
//           poster={movie.poster_path}
//           id={movie.id}
//           key={movie.id}
//           alt={movie.title}
//           handleClick={this.clickHandler}
//         />
//       );
//     });
//     return allMovies;
//   };

//   displaySearch = (searchInput) => {
//     const searchMovies = this.state.allMovies.filter((movie) =>
//       movie.title.toLowerCase().includes(searchInput.toLowerCase())
//     );
//     this.setState({ visibleMovies: searchMovies });
//   };

//   render() {
//     return (
//       <div>
//         <div className="search-bar">
//           <SearchBar
//             searchMovies={this.displaySearch}
//             clearSearchResult={this.clearSearchResult}
//           />
//         </div>
//         <div className="poster-display">
//           {this.state.hasError && (
//             <div className="submitErrorMessage">
//               <p>
//                 <strong>{this.state.hasError}</strong>
//               </p>
//             </div>
//           )}
//           {this.displayMovies()}
//         </div>
//       </div>
//     );
//   }
// }

export default Main;
