import React from 'react'
import { useState, useEffect } from 'react'
import { instance } from '../axios';
import { requests } from '../requests';
import '../styles/banner.css'

function Banner() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await instance.get(requests.fetchNetflixOriginals);
                setBanner(request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)]);
                return request;
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();

    }, [])

    function truncate(str, n) {
        return (str?.length > n) ? (str.substr(0, n) + ' ...') : (str)
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner?.backdrop_path})`,
                backgroundPosition: 'center'
            }}>
            <div className="banner_contents">
                <h1 className='banner_title'>{banner?.title || banner?.name || banner?.original_name}</h1> {/*Here '?' is called optional chaining
                which handles if a variable is not defined. So here in 'banner?.title' means that if banner is defined then 
                fetch the value 'name' inside it and if it's not exist then don't throw an error or don't explode the app.
                That's why we should not use it a lot becasue it'll stop showing error so it's hard to debug */}
                <div className="banner_buttons">
                    <button className="banner_button">Play </button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">

                    {truncate(banner?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fade-bottom"></div>
        </header>
    )
}

export default Banner