import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
    const [getData, setGetData] = useState([])

    const getHome = async () => {
        const response = await fetch('http://localhost:3001/getData')
        const data = await response.json()
        setGetData(data.data)
    }
    useEffect(() => {
        getHome()
    }, [])

    return (
        <div className="container">
  
                {
                    getData.map((x) => {
                        return (
                            <div >
                              
                              <p className='a'>a</p>
                              <p className='a'>a</p>
                              <br></br>
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

export default Home