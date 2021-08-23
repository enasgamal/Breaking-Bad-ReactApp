import React from 'react'
import './Characters.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (<nav>
              <ul className='pagination justify-content-center my-5'>
                {pageNumbers.map(number => (
                  <li key={number} className='page-item mx-1 cursor-pointer'>
                    <a onClick={() => paginate(number)} className='page-link bg-transparent cursor-pointer'>
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
    );
  };
export default Pagination
