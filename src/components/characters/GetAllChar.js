import React from 'react'
import Spinner from '../shared/Spinner'
import './Characters.css'

const GetAllChar = ({ isLoaded, chars }) => {
  return isLoaded ? (<Spinner />) : (
    <div className="container my-5">
      <section className='cards'>
        {chars.map((char) => (
          <div className='card'>
            <div className='card-inner'>
              <div className='card-front'>
                <img src={char.img} alt='' />
              </div>
                  <div className='card-back'>
                    <h1>{char.name}</h1>
                        <strong>Actor Name:</strong> {char.portrayed} <br/><br/>
                        <strong>Nickname:</strong> {char.nickname} <br/><br/>
                        <strong>Birthday:</strong> {char.birthday} <br/><br/>
                        <strong>Status:</strong> {char.status} <br/><br/>    
               </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
export default GetAllChar
