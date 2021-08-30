import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({ type }) => {
    return (
        <>
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "Movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historial">Historial</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>

                </div>
            )}
        <img 
        width="100%"
        src="https://pics.filmaffinity.com/Before_Sunset-924094407-large.jpg" alt="movie"/>
        <div className="info">
            <img src="https://static.wikia.nocookie.net/logopedia/images/4/45/Before-sunset-movie-logo.png/revision/latest?cb=20200522235522" alt="title"/>
            <span className="desc">
            Nine years after the events of the original film, Jesse Wallace has written a bestselling novel, This Time, based on his experience with Céline in Vienna. 
            During a book tour in Europe, he does a reading at the Parisian bookstore Shakespeare and Company. Three journalists attend the reading to interview Jesse: one is convinced
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Featured
