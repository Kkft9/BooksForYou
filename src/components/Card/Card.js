import React from 'react';
import { useHistory } from 'react-router-dom';
import bookImg from './book.jpg'

const Card = React.memo(props => {
  
  const book = props.book;
  console.log(book)
  const history = useHistory();

  const viewButtonClick = () => {
    history.push(`/details/${book.volumeInfo.industryIdentifiers[0].identifier}`);
  }

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem', margin: 'auto'}}>
        <div className="bd-placeholder-img card-img-top" style={{ width: '18rem', alignItems:'center', height: '18rem', overflow: 'hidden' }}>
          <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : bookImg} style={{ width: '18rem' }} alt="Poster" />
        </div>
        <div className="card-body" style={{alignItems:'center', textAlign:'center'}}>
          <h5 className="card-title"> {book.volumeInfo.title}</h5>
          <i className="card-title" >By : {`${book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Not available'}`}</i>
          <p className="card-text"> Year : {book.volumeInfo.publishedDate} </p>
          <button className="btn btn-primary" style={{display:'inline-block'}} onClick={viewButtonClick}>View details</button>
        </div>
      </div>
      <br />
    </div>
  )
})

export default Card;