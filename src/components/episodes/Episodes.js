import axios from 'axios'
import  React,{ useState,useEffect } from 'react';
import GetAllEpisodes from './GetAllEpisodes';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetAllEpisodes=async()=>{
          const res=await axios(`https://breakingbadapi.com/api/episodes`)
          console.log(res.data)
          setEpisodes(res.data)
          setLoading(false)
        }
        GetAllEpisodes()
      }, [])
    return (<div>
              <h1 className="text-center p-4">Episodes</h1>
              <GetAllEpisodes loading={loading} episodes={episodes} />
            </div>
    )
}
export default Episodes
