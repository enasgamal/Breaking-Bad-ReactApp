import axios from 'axios'
import  React,{ useState,useEffect } from 'react';
import GetAllChar from './GetAllChar';
import Search from '../shared/Search';
import Pagination from './Pagination';

const Characters = () => {
    const [chars, setChars] = useState([]);
    const [isLoaded,setIsLoaded]=useState(true)
    const [query, setQuery] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = chars.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

      useEffect(() => {
        const fetchItems=async()=>{
          const res=await axios(`https://breakingbadapi.com/api/characters?name=${query}`)
          console.log(res.data)
          setChars(res.data)
          setIsLoaded(false)
        }
        fetchItems()
      }, [query])
     
    return (<div>
              <div className="searchbar">
                <Search getQuery={(q) => setQuery(q)}/>
              </div>
              <h1 className="text-center">All Characters</h1>
              <GetAllChar isLoaded={isLoaded} chars={currentPosts}/>
              <Pagination postsPerPage={postsPerPage} totalPosts={chars.length} paginate={paginate} />
            </div>
    )
}
export default Characters
