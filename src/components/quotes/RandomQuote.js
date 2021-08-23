import React, { Component } from "react";
import axios from "axios";
import './quotes.css';

class RandomQuote extends Component {
    state = {
        advice: "",
        author:""
      }
     
      fetchQuote = () => {
        axios.get("https://breakingbadapi.com/api/quote/random").then((response) => {
          console.log(response.data[0].quote);
          this.setState({ advice: response.data[0].quote, author: response.data[0].author });
        });
      };
      componentDidMount() {
        this.fetchQuote();
      }
      render() {
        return (
        <div className="container">
            <div className="row justify-content-around">
                            <div className="col-6">
                                <div id="ct">
                                    <div class="corner "id="left_top"></div>
                                    <div class="corner" id="left_bottom"></div>
                                    <div class="corner" id="right_top"></div>
                                    <div class="corner" id="right_bottom"></div>
                                    <blockquote>
                                    <div class="card-div"> 
                                    &quot; &quot;
                                            </div>
                                        <p class="mt-4"><i><h2 > " {this.state.advice} "</h2></i></p>
                                        <p><i><h5>{this.state.author}</h5></i></p>
                                    </blockquote>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" class="btn btn-outline-success p-2" onClick={this.fetchQuote}>Random Quote</button>
                                    </div> 
                            </div>
              </div>
          </div>
        );
      }
}
export default RandomQuote;