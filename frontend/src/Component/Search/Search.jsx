import React, { useState, useEffect } from 'react'
import './Search.css'

const Search = () => {
    const [Date, setDate] = useState("");
    const [getData, setGetData] = useState([])
    console.log(Date)
    const getSearch = async () => {
        const response = await fetch(`http://localhost:3001/getData?date=${Date}`)
        const data = await response.json()
     
        setGetData(data.data)
    }
   
    useEffect(() => {
        getSearch()
    }, [])

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
                        <div>
                            <h1>Picture of the day</h1>
                                <img className='image' src={x.url} alt="imag" />
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