import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../shared/Spinner'
import episode from '../../img/episode.jpg'

const EpisodesDetails = ({ episodes }) => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const GetEpisodeDetails = async () => {
            const res = await axios('https://breakingbadapi.com/api/episodes/' + id)
            console.log(res.data[0])
            setDetails(res.data[0])
            setLoading(false)
        }
        GetEpisodeDetails()
    }, [])

    return loading ? ( <Spinner /> ) : (
        <div>
            <section>
                <div class="container pb-4 mb-5">
                    <h1 class="h1 text-center" id="pageHeaderTitle">Episode Details</h1>
                    <article class="postcard light red">
                        <a class="postcard__img_link">
                            <img class="postcard__img" src={episode} alt="Image Title" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title red"><a >{details.title}</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Air Date: {details.air_date}
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt"> Characters:
                            </div>
                            <ul>
                            {details.characters.map((character) => (
                                <li className="list-unstyled">-  {character}</li>
                            ))}
                            </ul>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Episode {details.episode}</li>
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>Season {details.season}</li>
                                <li class="tag__item play "><i class="fas fa-play mr-2"></i>{details.series}</li>
                            </ul>
                       </div>
                    </article>   
                </div>
            </section>
          </div>
    )
}
export default EpisodesDetails
