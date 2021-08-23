import React from 'react'
import Spinner from '../shared/Spinner'
import './quotes.css'

const GetAllQuotes = ({loading,quote}) => {
   return loading ? ( <Spinner /> ) : (
        <div className="container my-5"> 
                <div className="row">
                        {quote.map((quot) => (
                            <div className="col-4">
                                <div id="ct">
                                    <div class="corner "id="left_top"></div>
                                    <div class="corner" id="left_bottom"></div>
                                    <div class="corner" id="right_top"></div>
                                    <div class="corner" id="right_bottom"></div>
                                    <span>{quot.author}</span>
                                    <blockquote>
                                        <p><i><h2>"{quot.quote}"</h2></i></p>
                                    </blockquote>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
    )
}
export default GetAllQuotes
