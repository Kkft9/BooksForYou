import './HomePage.css'
import React from 'react'
import {useHistory} from 'react-router-dom'

export default function HomePage() {
    const history = useHistory();
    function searchBook() {
        history.push('/search')
    }

    return (
        <div className='hmpg'>
            <button type="button" class="btn btn-info btn-lg" onClick={searchBook}>Search for books</button>
        </div>
    )
}