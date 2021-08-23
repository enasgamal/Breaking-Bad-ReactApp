import React from 'react'
import Spinner from '../shared/Spinner'
import './episodes.css'
import { Link } from 'react-router-dom'

const GetAllEpisodes = ({loading,episodes}) => {
    return loading ? ( <Spinner /> ) : (
        <div className="container my-5"> 
                <div className="row">
                        {episodes.map((episode) => (
                            <div className="col-3 mb-5 ">
                                <div class=" h-25 full-withradius shrink" >
                                <Link to={`/episodes/${episode.episode_id}`}>
                                        <div class="card-body">
                                            <div class="card-episode"> 
                                              S{episode.season}.
                                            </div>
                                            <div class="card-season"> 
                                            E{episode.episode}
                                            </div>
                                        <h6 class="card-subtitle">Title: {episode.title}</h6>
                                        </div>
                                </Link>
                             </div>
                        </div>
                        ))}
                    </div>
                </div>
    )
}
export default GetAllEpisodes
