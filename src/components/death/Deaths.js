import axios from 'axios'
import  React,{ useState,useEffect } from 'react';
import GetAllDeaths from './GetAllDeaths';

const Deaths = () => {
    const [deaths, setDeaths] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetAllDeaths=async()=>{
          const res=await axios(`https://breakingbadapi.com/api/deaths`)
          console.log(res.data)
          setDeaths(res.data)
          setLoading(false)
        }
        GetAllDeaths()
      }, [])

      
    return (
        <div>
            <h1 className="text-center p-3">Deaths History</h1>
            <GetAllDeaths loading={loading} deaths={deaths} />
            
        </div>
    )
}
export default Deaths
