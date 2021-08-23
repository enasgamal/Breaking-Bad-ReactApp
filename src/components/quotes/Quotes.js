import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import GetAllQuotes from './GetAllQuotes';
import RandomQuote from './RandomQuote';
const Quotes = () => {

    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetAllQuotes=async()=>{
          const res=await axios(`https://breakingbadapi.com/api/quotes`)
          console.log(res.data)
          setQuote(res.data)
          setLoading(false)
        }
        GetAllQuotes()
      }, [])
      
    return (<div>
              <h1 className="text-center pt-5">Get A Random Quotes</h1>
              <RandomQuote/> <br/>
                <hr/>
              <h1 className="text-center pt-5">Popular Quotes</h1>
                <GetAllQuotes loading={loading} quote={quote} />
            </div>
    )
}
export default Quotes
