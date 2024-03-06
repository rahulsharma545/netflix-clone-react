import React from "react";
import { useState, useEffect } from "react";
import { instance } from "../axios";
// import instance from '../axios'
import "../styles/row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(fetchURL); //axios returns a JSON so no need to parse it as json
        // console.log(request.data.results);
        setMoives(request.data.results);
        return request;
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [
    fetchURL,
  ]); /*Here an empty array [] means we want to run this useEffect only once. We can specify a veriable
  here that means whenever the variable's state change the useEffect will trigger. 
  Whenever we use a variable which is outside of the useEffect() block (i.e. 'fetchURL' which is coming from props) then we must use it inside [] as dependency
  which means every time time the variable changes, useEffect will update itself. So now whenever we pass different 
  fetchURL to our component the useEffect() will run.*/

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* Following are images of movies */}
        {movies.map((movie) => {
          return (
            <img key={movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              className={`row_poster ${isLargeRow && "row_poster_large"}`} //  This means if 'isLargeRow' is true then add class 'row_poster_large' to it
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
