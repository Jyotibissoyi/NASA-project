
import React, { useState, useEffect } from 'react'
import moment from "moment"
import './Search.css'

const Search = () => {
    const [Date, setDate] = useState("");
    const [getData, setGetData] = useState([])
    console.log(Date)
    const getSearch = async () => {
        const now = moment().format("YYYY-MM-DD")

        if (Date >= "2015-01-01" && Date <= now) {
            const response = await fetch(`http://localhost:3001/getData?date=${Date}`)
            const data = await response.json()
            setGetData(data.data)

        } else if (Date !== "") {
            alert("Please select a date between January 1, 2015 and today.")
        }
    }

    useEffect(() => {
        getSearch()
    },)

    return (
        <div className="container1">
            <p className='a'>qeyh</p>
            <p className='a'>qeyh</p>
            <p className='a'>qeyh</p>

            <input className='input' type="Date" onChange={(e) => setDate(e.target.value)} />
            <button className='button' onClick={getSearch}>search</button>

            {
                getData.map((x) => {
                    return (
                        <div key={x.date}>
                            <h1>Picture of the day</h1>
                            <div>
                                {
                                    x.media_type === "image" ? (
                                        <img className='img1' src={x.url} alt="imag" />
                                    ) : (
                                        <iframe
                                            title='space_video'
                                            src={x.url}
                                            //frameBorder="0"
                                            allow='encrypted-media'
                                            allowFullScreen
                                            className='photo'

                                        />
                                    )
                                }
                            </div>
                            <div className='title'><h1>{x.title}</h1></div>
                            <div className='explanation'><h2>explanation</h2>{x.explanation}</div>
                            <div className='type'>TYPE:{x.media_type}</div>
                            <div className='date'>Date: {x.date}</div>

                        </div>
                    )
                })
            }
        </div>


    )
}

export default Search