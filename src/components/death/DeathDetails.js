import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../shared/Spinner'
import '../episodes/episodes.css'
import kill from '../../img/kill.jpg'

const DeathDetails = ({ deaths }) => {
    const [details, setDeaths] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        const GetDeathDetails = async () => {
            const res = await axios('https://breakingbadapi.com/api/deaths?name=' + name)
            console.log(res.data[0])
            setDeaths(res.data[0])
            setLoading(false)
        }
        GetDeathDetails()
    }, [])

    return loading ? ( <Spinner /> ) : (
        <div>
            <section>
                <div class="container py-4 mb-3">
                    <h1 class="h1 text-center mb-5" id="pageHeaderTitle">Death Details</h1>
                    <article class="postcard light green">
                        <a class="postcard__img_link">
                            <img class="postcard__img" src={kill} alt="Image Title" />
                        </a>
                        <div class="postcard__text">
                            <h1 class="postcard__title green"><a >{name}</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Cause: {details.cause}
                                </time>
                            </div>
                            <div class="postcard__bar "></div>
                            <div class="postcard__preview-txt"> Last Words:  {details.last_words} 
                            </div>
                            <div class="postcard__preview-txt"> Responsible:  {details.responsible} 
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Episode {details.episode}</li>
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>Season {details.season}</li>
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>No.of deaths {details.number_of_deaths}</li>
                              </ul>
                       </div>
                    </article>
                </div>
            </section>
          </div>
    )
}
export default DeathDetails
