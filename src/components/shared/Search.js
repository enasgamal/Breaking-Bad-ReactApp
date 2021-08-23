import React,{useState} from 'react'
import './Header.css'

const Search = ({ getQuery }) => {
    var placeholderText="Search characters"
    const [text, setText] = useState('')

    const onChange = (q) => {
      setText(q)
      getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input
                type='text'
                className='form-control'
                placeholder={placeholderText}
                value={text}
                onChange={(e) => onChange(e.target.value)}
                />
            </form>
    </section>
    )
}
export default Search
